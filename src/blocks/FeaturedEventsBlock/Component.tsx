import React from 'react'
import { FeaturedEventsBlock as FeaturedEventsBlockProps, Event } from '@/payload-types'
import { EventCard } from '@/components/EventCard'
import { CMSLink } from '@/components/Link'
import { PageHeading } from '@/components/PageHeading'
import { MainGrid } from '@/components/MainGrid'

export const FeaturedEventsBlock: React.FC<FeaturedEventsBlockProps> = ({
    events,
    ctaButton,
    pageHeading,
    disableCTA,
}) => {
    const filteredEvents: Event[] = (events || []).filter((s): s is Event => typeof s === 'object')

    return (
        <>
            <MainGrid className="pt-8 pb-24 gap-y-28">
                <PageHeading {...pageHeading} className="col-span-6" />
                {filteredEvents.map(({ content, title, slug, eventAt }, i) => {
                    return <EventCard key={i} reference={{ content, title, slug, eventAt }} />
                })}
            </MainGrid>
            {!disableCTA && (
                <div className="flex w-full items-center justify-center">
                    <CMSLink {...ctaButton} appearance={'default'} size={'lg'} />
                </div>
            )}
        </>
    )
}
