'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const ctaButton = data?.ctaButton || []

  return (
    <nav className="contents items-center w-full">
      <div className="flex gap-30 items-center col-start-4 w-fit">
        {navItems.map(({ link }, i) => {
          return <CMSLink key={i} className="text-popover-foreground" {...link} appearance="link" />
        })}
      </div>
      <div className="col-start-11 h-fit w-fit self-center">
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
