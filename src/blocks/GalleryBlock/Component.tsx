import React from 'react'
import { GalleryBlock as GalleryBlockProps } from '@/payload-types'
import { MainGrid } from '@/components/MainGrid'
import clsx from 'clsx'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'

export const GalleryBlock: React.FC<GalleryBlockProps> = ({ leftSide, rightSide }) => {
  const { preHeader, header, description, direction } = leftSide.pageHeading

  const unRoundMap = [
    'rounded-tl-none rounded-tr-[6rem]',
    'rounded-tr-none rounded-tl-[6rem]',
    'rounded-bl-none rounded-br-[6rem]',
    'rounded-br-none rounded-bl-[6rem]',
  ]

  return (
    <MainGrid className="pt-0 pb-0 -mb-[28rem] z-10">
      <div className="col-span-12 bg-primary flex items-center justify-center p-16 rounded-lg">
        <div
          className={clsx(
            direction === 'left' ? 'items-start' : 'items-center',
            'flex flex-col gap-4 justify-center h-full w-1/2 pr-24',
          )}
        >
          <h6 className="text-secondary">{preHeader}</h6>
          <h2 className="text-ring">{header}</h2>
          <p>{description}</p>
          <CMSLink appearance="default" size="lg" {...leftSide.ctaButton} />
        </div>
        <div className="grid grid-cols-2 gap-1 h-full w-1/2">
          {rightSide?.images.map((image, i) => {
            return (
              <Media
                className={clsx('rounded-[4rem]  overflow-hidden w-full h-full', unRoundMap[i])}
                imgClassName="w-full h-56 object-cover"
                key={i}
                resource={image.image}
              />
            )
          })}
        </div>
      </div>
    </MainGrid>
  )
}
