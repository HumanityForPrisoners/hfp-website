import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React, { cache } from 'react'
import RichText from '@/components/RichText'

import { RenderHero } from '@/heros/RenderHero'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { Media } from '@/components/Media'

export async function generateStaticParams() {
    const payload = await getPayload({ config: configPromise })
    const events = await payload.find({
        collection: 'events',
        limit: 1000,
        overrideAccess: false,
        pagination: false,
        select: {
            slug: true,
        },
    })

    const params = events.docs.map(({ slug }) => {
        return { slug }
    })

    return params
}

type Args = {
    params: Promise<{
        slug?: string
    }>
}

export default async function Event({ params: paramsPromise }: Args) {
    const { slug = '' } = await paramsPromise
    const url = '/events/' + slug
    const event = await queryEventBySlug({ slug })

    if (!event) return <PayloadRedirects url={url} />

    return (
        <article className="pt-16 pb-16">
            <PageClient />

            {/* Allows redirects for valid pages too */}
            <PayloadRedirects disableNotFound url={url} />
            <RenderHero {...event.hero.hero} />
            <div className="flex items-center justify-center">
                <div className="mx-auto grid-cols-12-90 gap-30 grid pt-16 pb-24 lg:px-6">
                    <div className="col-span-12 relative">
                        <Media
                            imgClassName="rounded-3xl w-full max-h-[90vh] object-cover"
                            resource={event.content.image}
                        />
                        <div className="bg-secondary w-fit h-fit absolute z-10 -bottom-12 left-0 px-12 py-8 rounded-bl-3xl">
                            <h3 className="text-primary">{event.title}</h3>
                        </div>
                    </div>

                    <RichText
                        className="col-span-12 mt-20 prose-h5:text-secondary"
                        data={event.content.description}
                        enableGutter={false}
                    />
                </div>
            </div>
        </article>
    )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
    const { slug = '' } = await paramsPromise
    const event = await queryEventBySlug({ slug })

    return generateMeta({ doc: event })
}

const queryEventBySlug = cache(async ({ slug }: { slug: string }) => {
    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
        collection: 'events',
        limit: 1,
        pagination: false,
        where: {
            slug: {
                equals: slug,
            },
        },
    })

    return result.docs?.[0] || null
})
