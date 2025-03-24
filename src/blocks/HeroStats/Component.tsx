import React from 'react'
import '@animxyz/core'

import type { HeroStatsBlock as HeroStatBlockProps } from '@/payload-types'

import { StatCard } from '@/components/StatCard'

export const HeroStatsBlock: React.FC<HeroStatBlockProps> = ({ Stats }) => {
  return (
    <div className="relative -mt-36 flex items-center justify-center">
      <div className="grid grid-cols-12-90 gap-30 mx-auto relative ">
        {(Stats || []).map((stat, i) => {
          return (
            <StatCard
              key={i}
              mainStat={stat.mainStat}
              subtitle={stat.subtitle}
              className="col-span-3"
            />
          )
        })}
      </div>
    </div>
  )
}
