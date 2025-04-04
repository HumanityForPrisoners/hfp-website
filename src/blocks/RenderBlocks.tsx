import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { HeroStatsBlock } from '@/blocks/HeroStats/Component'
import { AboutUsBlock } from '@/blocks/AboutUsBlock/Component'
import { FeaturedServicesBlock } from '@/blocks/FeaturedServicesBlock/Component'
import { GalleryBlock } from './GalleryBlock/Component'
import { ImpactBlock } from './ImpactBlock/Component'
import { TestimonialBlock } from '@/blocks/TestimonialBlock/Component'
import { LogoCarousel } from '@/blocks/LogoCarousel/Component'
import { FeaturedPostsBlock } from '@/blocks/FeaturedPostsBlock/Component'
import { TeamMembersBlock } from '@/blocks/TeamMembersBlock/Component'
import { VolunteerFormBlock } from '@/blocks/VolunteerForm/Component'
import { FullGalleryBlock } from '@/blocks/FullGalleryBlock/Component'
import { FaqBlock } from '@/blocks/FaqBlock/Component'
import { FeaturedEventsBlock } from './FeaturedEventsBlock/Component'
import { ResourcesBlock } from '@/blocks/ResourcesBlock/Component'

const blockComponents = {
    archive: ArchiveBlock,
    content: ContentBlock,
    cta: CallToActionBlock,
    heroStats: HeroStatsBlock,
    mediaBlock: MediaBlock,
    aboutUsBlock: AboutUsBlock,
    featuredServicesBlock: FeaturedServicesBlock,
    impactBlock: ImpactBlock,
    testimonialBlock: TestimonialBlock,
    logoCarousel: LogoCarousel,
    featuredPostsBlock: FeaturedPostsBlock,
    galleryBlock: GalleryBlock,
    teamMembersBlock: TeamMembersBlock,
    volunteerFormBlock: VolunteerFormBlock,
    fullGalleryBlock: FullGalleryBlock,
    faqBlock: FaqBlock,
    featuredEventsBlock: FeaturedEventsBlock,
    resourcesBlock: ResourcesBlock,
}

export const RenderBlocks: React.FC<{
    blocks: Page['layout'][0][]
}> = (props) => {
    const { blocks } = props

    const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

    if (hasBlocks) {
        return (
            <Fragment>
                {blocks.map((block, index) => {
                    const { blockType } = block

                    if (blockType && blockType in blockComponents) {
                        const Block = blockComponents[blockType]

                        if (Block) {
                            return (
                                <div className="my-16" key={index}>
                                    {/* @ts-expect-error there may be some mismatch between the expected types here */}
                                    <Block {...block} disableInnerContainer />
                                </div>
                            )
                        }
                    }
                    return null
                })}
            </Fragment>
        )
    }

    return null
}
