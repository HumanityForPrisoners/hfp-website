import React, { Fragment } from 'react'
import { FeaturedEventsBlock as FeaturedEventsBlockProps, Event } from '@/payload-types'
import { EventCard } from '@/components/EventCard'
import { CMSLink } from '@/components/Link'
import { MainGrid } from '@/components/MainGrid'

export const FeaturedEventsBlock: React.FC<FeaturedEventsBlockProps> = ({
    events,
    ctaButton,
    disableCTA,
}) => {
    const filteredEvents: Event[] = (events || []).filter((s): s is Event => typeof s === 'object')

    return (
        <Fragment>
            <MainGrid className="pt-8 pb-24 gap-y-14">
                <h3 className="col-span-12">Upcoming Events</h3>
                {filteredEvents.map(({ content, title, slug, eventAt }, i) => {
                    const today = new Date()
                    const eventDate = new Date(eventAt as string)
                    return (
                        eventDate >= today && (
                            <EventCard key={i} reference={{ content, title, slug, eventAt }} />
                        )
                    )
                })}
                <h3 className="col-span-12">Past Events</h3>
                {filteredEvents.map(({ content, title, slug, eventAt }, i) => {
                    const today = new Date()
                    const eventDate = new Date(eventAt as string)
                    return (
                        eventDate < today && (
                            <EventCard key={i} reference={{ content, title, slug, eventAt }} />
                        )
                    )
                })}
            </MainGrid>
            {!disableCTA && (
                <div className="flex w-full items-center justify-center">
                    <CMSLink {...ctaButton} appearance={'default'} size={'lg'} />
                </div>
            )}
        </Fragment>
    )
}
