import React from 'react'

import type { HeroStatsBlock as HeroStatBlockProps } from '@/payload-types'

import { StatCard } from '@/components/StatCard'
import clsx from 'clsx'

export const HeroStatsBlock: React.FC<HeroStatBlockProps> = ({ Stats, options }) => {
    return (
        <div
            className={clsx(
                options.modifyForHomepage && '-mt-36',
                'relative flex items-center justify-center lg:text-center lg:px-6',
                options.modifyForHomepage && 'lg:hidden',
            )}
        >
            <div className="grid grid-cols-12-90 lg:grid-cols-2 gap-30 mx-auto relative">
                {(Stats || []).map((stat, i) => {
                    return (
                        <StatCard
                            key={i}
                            mainStat={stat.mainStat}
                            subtitle={stat.subtitle}
                            className="col-span-3 lg:col-span-1"
                            mdf={options.modifyForHomepage}
                            rmbg={options.removeBackground}
                        />
                    )
                })}
            </div>
        </div>
    )
}
