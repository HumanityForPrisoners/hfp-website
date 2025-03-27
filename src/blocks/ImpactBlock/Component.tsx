import React from 'react'
import { ImpactBlock as ImpactBlockProps } from '@/payload-types'
import { MainGrid } from '@/components/MainGrid'
import { Media } from '@/components/Media'
import { StatCard } from '@/components/StatCard'
import { PageHeading } from '@/components/PageHeading'
import { StatProgressBar } from '@/components/StatProgressBar'

export const ImpactBlock: React.FC<ImpactBlockProps> = ({ leftSide, rightSide }) => {
  return (
    <MainGrid className="pt-20">
      <div className="col-span-6">
        <div className="flex flex-col items-end relative">
          <StatCard className="w-80 absolute left-0 bottom-40" {...leftSide.statistic} />
          <Media
            imgClassName="rounded-3xl h-[42rem] object-cover"
            className="w-[34rem]"
            resource={leftSide.image}
            loading="lazy"
          />
        </div>
      </div>

      <div className="col-span-6">
        <div className="flex flex-col justify-center h-full gap-8">
          <PageHeading className="gap-8" {...rightSide.pageHeading} />
          {rightSide.progressBar &&
            rightSide.progressBar.map((bar, i) => {
              return <StatProgressBar key={i} name={bar.name} progress={bar.progress} />
            })}
        </div>
      </div>
    </MainGrid>
  )
}
