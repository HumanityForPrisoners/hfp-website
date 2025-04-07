import React from 'react'
import { FeaturedPostsBlock as FeaturedPostsBlockProps, Post } from '@/payload-types'
import { PostCard } from '@/components/PostCard'
import { CMSLink } from '@/components/Link'
import { PageHeading } from '@/components/PageHeading'
import { MainGrid } from '@/components/MainGrid'

export const FeaturedPostsBlock: React.FC<FeaturedPostsBlockProps> = ({
    pageHeading,
    ctaButton,
    posts,
}) => {
    const filteredPosts: Post[] = (posts || []).filter((s): s is Post => typeof s === 'object')

    return (
        <div className="pt-8 flex flex-col h-auto gap-1">
            <MainGrid className="h-fit lg:px-6">
                <PageHeading {...pageHeading} className="col-span-6 lg:col-span-full" />
                {filteredPosts.map(({ content, title, slug }, i) => {
                    return <PostCard key={i} reference={{ content, title, slug }} />
                })}
            </MainGrid>
            <div className="flex w-full items-center justify-center">
                <CMSLink {...ctaButton} appearance={'default'} size={'lg'} />
            </div>
        </div>
    )
}
