import { formatDateTime } from 'src/utilities/formatDateTime'
import React from 'react'

import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'
import { formatAuthors } from '@/utilities/formatAuthors'

export const PostHero: React.FC<{
    post: Post
}> = ({ post }) => {
    const { categories, hero, populatedAuthors, publishedAt, title } = post

    const hasAuthors =
        populatedAuthors && populatedAuthors.length > 0 && formatAuthors(populatedAuthors) !== ''

    return (
        <div className="relative -mt-[10.4rem] flex items-end">
            <div className="container z-10 relative lg:grid lg:grid-cols-[1fr_48rem_1fr] text-white pb-8">
                <div className="md:col-start-1 md:col-span-1 col-start-2 col-span-2">
                    <div className="uppercase text-sm mb-6">
                        {categories?.map((category, index) => {
                            if (typeof category === 'object' && category !== null) {
                                const { title: categoryTitle } = category

                                const titleToUse = categoryTitle || 'Untitled category'

                                const isLast = index === categories.length - 1

                                return (
                                    <React.Fragment key={index}>
                                        {titleToUse}
                                        {!isLast && <React.Fragment>, &nbsp;</React.Fragment>}
                                    </React.Fragment>
                                )
                            }
                            return null
                        })}
                    </div>

                    <div className="lg:w-fit">
                        <h1 className="mb-6 md:text-3xl lg:text-5xl text-6xl">{title}</h1>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-16">
                        {hasAuthors && (
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-1">
                                    <p className="text-sm">Author</p>

                                    <p>{formatAuthors(populatedAuthors)}</p>
                                </div>
                            </div>
                        )}
                        {publishedAt && (
                            <div className="flex flex-col gap-1">
                                <p className="text-sm">Date Published</p>

                                <time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="min-h-[80vh] select-none">
                {hero?.heroImage && typeof hero.heroImage !== 'string' && (
                    <Media
                        fill
                        priority
                        imgClassName="-z-10 object-cover"
                        resource={hero.heroImage}
                    />
                )}
                <div className="absolute pointer-events-none left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />
            </div>
        </div>
    )
}
