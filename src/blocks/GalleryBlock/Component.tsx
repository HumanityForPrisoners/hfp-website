import React from 'react'
import { GalleryBlock as GalleryBlockProps } from '@/payload-types'
import { MainGrid } from '@/components/MainGrid'
import clsx from 'clsx'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'

export const GalleryBlock: React.FC<GalleryBlockProps> = ({
    leftSide,
    rightSide,
    isLastOnPage,
}) => {
    const { preHeader, header, description, direction } = leftSide.pageHeading

    const unRoundMap = [
        'rounded-tl-none rounded-tr-[6rem]',
        'rounded-tr-none rounded-tl-[6rem]',
        'rounded-bl-none rounded-br-[6rem]',
        'rounded-br-none rounded-bl-[6rem]',
    ]

    return (
        <MainGrid className={cn('pt-0 pb-0 z-10 lg:px-6', isLastOnPage && '-mb-[28rem]')}>
            <div className="col-span-12 bg-primary flex lg:flex-col items-center justify-center p-16 md:px-6 md:py-16 rounded-lg">
                <div
                    className={clsx(
                        direction === 'left' ? 'items-start' : 'items-center',
                        'flex flex-col gap-4 justify-center h-full w-1/2 pr-24 lg:pr-0 lg:items-center lg:text-center lg:w-full',
                    )}
                >
                    <h6 className="text-secondary">{preHeader}</h6>
                    <h2 className="text-ring">{header}</h2>
                    <p>{description}</p>
                    <CMSLink appearance="default" size="lg" {...leftSide.ctaButton} />
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-1 h-full w-1/2 lg:mt-8 lg:w-full">
                    {rightSide?.images.map((image, i) => {
                        return (
                            <Media
                                className={clsx(
                                    'rounded-[4rem]  overflow-hidden w-full h-full',
                                    unRoundMap[i],
                                )}
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
