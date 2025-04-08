import React from 'react'
import { ResourcesBlock as ResourcesBlockType } from '@/payload-types'
import { MainGrid } from '@/components/MainGrid'
import Link from 'next/link'
import { Media } from '@/payload-types'

export const ResourcesBlock: React.FC<ResourcesBlockType> = ({ linkGroup, newsletters }) => {
    return (
        <MainGrid className="lg:px-6">
            {linkGroup.map(({ title, links }, i) => {
                return (
                    <div key={i} className="bg-primary p-8 shadow-lg col-span-12 rounded-3xl">
                        <h3 className="text-secondary pb-4">{title}</h3>
                        <ul className="pl-8">
                            {links.map(({ link, label }, j) => {
                                return (
                                    <li key={j} className="list-disc underline pb-1">
                                        <Link href={link}>{label}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
            <div className="bg-primary p-8 shadow-lg col-span-12 rounded-3xl">
                <h3 className="text-secondary pb-4">{newsletters.title}</h3>
                <ul className="pl-8">
                    {newsletters.content.map(({ newsletterLabel, content }, j) => {
                        return (
                            <li key={j} className="list-disc underline pb-1">
                                <a target="_blank" href={(content as Media).url as string}>
                                    {newsletterLabel}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </MainGrid>
    )
}
