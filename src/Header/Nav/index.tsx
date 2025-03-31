'use client'
import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon, ChevronDown } from 'lucide-react'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
    const navItems = data?.navItems || []
    const ctaButton = data?.ctaButton || []

    return (
        <nav className="contents items-center w-full">
            <div className="flex gap-30 items-center col-start-4 w-fit">
                {navItems.map(({ link, multipleLinks, linkType }, i) => {
                    if (linkType === 'single') {
                        return (
                            <CMSLink
                                key={i}
                                className="text-popover-foreground"
                                {...link}
                                appearance="link"
                            />
                        )
                    } else if (linkType === 'multiple') {
                        return (
                            <div key={i} className="group hover:cursor-pointer">
                                <div className="flex gap-1 justify-center items-center">
                                    <p className="text-popover-foreground ">
                                        {multipleLinks?.label}
                                    </p>
                                    <ChevronDown className="inline text-ring w-[.7rem] group-hover:-rotate-90 transition-transform" />
                                </div>
                                <div className="flex-col items-center justify-center hidden group-hover:flex pt-4 absolute">
                                    {multipleLinks?.links?.map((subLink, j) => {
                                        return (
                                            <CMSLink
                                                key={j}
                                                appearance="link"
                                                className="text-popover-foreground w-36 text-center rounded-none p-4 bg-primary border border-foreground hover:bg-secondary hover:text-primary transition-colors first:rounded-tr-xl last:rounded-b-xl"
                                                {...subLink.link}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
            <div className="col-end-11 h-fit w-fit self-center">
                {ctaButton.map(({ link }, i) => {
                    return <CMSLink key={i} {...link} appearance={'default'} size={'lg'} />
                })}
            </div>
            <Link href="/search" className="col-start-12 h-fit w-fit self-center justify-self-end">
                <span className="sr-only">Search</span>
                <SearchIcon className="w-5 text-popover-foreground" />
            </Link>
        </nav>
    )
}
