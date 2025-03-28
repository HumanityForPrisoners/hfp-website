import type { Metadata } from 'next/types'

import { ServiceCard } from '@/components/ServiceCard'
import { Pagination } from '@/components/Pagination'
import { RenderHero } from '@/heros/RenderHero'
import { PageRange } from '@/components/PageRange'
import { PageHeading } from '@/components/PageHeading'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { ServicesHero } from '@/payload-types'
import { MainGrid } from '@/components/MainGrid'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  type HeroProps = ServicesHero['hero']
  type HeadingProps = ServicesHero['pageHeading']

  const globalData: ServicesHero = (await getCachedGlobal('servicesHero', 4)()) as ServicesHero

  const heroData = globalData.hero as HeroProps
  const headingData = globalData.pageHeading as HeadingProps

  const services = await payload.find({
    collection: 'services',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      hero: true,
      heading: true,
      slug: true,
      content: true,
      meta: true,
    },
  })

  return (
    <div className="pt-24 pb-24">
      <PageClient />
      <RenderHero {...heroData} />
      <MainGrid className="pb-4">
        <PageHeading className="col-span-6" {...headingData} />
      </MainGrid>

      <div className="container mt-8">
        <PageRange
          collection="services"
          currentPage={services.page}
          limit={12}
          totalDocs={services.totalDocs}
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="mx-auto grid-cols-12-90 gap-x-30 gap-y-32 grid pt-8 pb-24 h-fit">
          {services?.docs.map((result, i) => {
            return <ServiceCard key={i} reference={result} />
          })}
        </div>
      </div>
      <div className="container">
        {services.totalPages > 1 && services.page && (
          <Pagination page={services.page} totalPages={services.totalPages} />
        )}
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Humanity For Prisoners Posts`,
  }
}
