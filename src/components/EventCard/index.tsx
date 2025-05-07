import React from 'react'
import { Event } from '@/payload-types'
import { Media } from '../Media'
import Link from 'next/link'

export type Props = {
    reference: Pick<Event, 'slug' | 'content' | 'title' | 'eventAt'>
}

export const EventCard: React.FC<Props> = (props) => {
    const { reference } = props
    const date = new Date(reference.eventAt as string)
    const formatter = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZone: 'America/New_York',
        timeZoneName: 'short',
        hour12: true,
    })
    return (
        <div className="col-span-4 lg:col-span-full">
            <Link href={`/events/${reference.slug}`}>
                <Media
                    className="rounded-t-3xl h-80"
                    imgClassName="rounded-t-3xl w-full h-full object-cover"
                    resource={reference.content.image}
                    loading="lazy"
                />
                <div className="bg-primary h-56 px-6 py-4 rounded-b-3xl shadow-lg">
                    <div className="flex flex-col gap-3 h-full">
                        <h5 className="text-ring">{reference.title}</h5>
                        <p>{reference.content.shortDescription}</p>
                        <p>{formatter.format(date)}</p>
                        <div className="flex items-end h-full">
                            {reference.content.donorPerfectLink ? (
                                <Link href={reference.content.donorPerfectLink}>
                                    <div className="py-3 px-8 bg-secondary text-primary hover:bg-primary hover:text-secondary hover:border-secondary hover:border rounded-3xl">
                                        Donate
                                    </div>
                                </Link>
                            ) : (
                                <div className="py-3 px-8 bg-secondary text-primary hover:bg-primary hover:text-secondary hover:border-secondary hover:border hover:cursor-pointer rounded-3xl">
                                    More Info
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
