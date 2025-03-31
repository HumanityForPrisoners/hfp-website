import React from 'react'
import clsx from 'clsx'
import { FullGalleryBlock as FullGalleryBlockType } from '@/payload-types'
import { MainGrid } from '@/components/MainGrid'
import { PageHeading } from '@/components/PageHeading'
import { Media } from '@/components/Media'

export const FullGalleryBlock: React.FC<FullGalleryBlockType> = ({ row, pageHeading }) => {
    let rowContentLength = 0
    return (
        <MainGrid>
            <PageHeading className="col-span-6 pb-4" {...pageHeading} />
            {row?.map((row, i) => {
                rowContentLength = row.rowContent?.length || 0
                return (
                    <div key={i} className="contents">
                        {row.rowContent?.map((rowContent, j) => {
                            return (
                                <div
                                    className={clsx(
                                        rowContentLength === 3 ? 'col-span-4' : 'col-span-3',
                                        'h-56',
                                    )}
                                    key={j}
                                >
                                    {rowContent.mediaGroup?.mediaSelect === 'video' ? (
                                        <iframe
                                            className="w-full h-full cursor-pointer rounded-3xl"
                                            src={rowContent.mediaGroup.video || ''}
                                        />
                                    ) : (
                                        <Media
                                            resource={rowContent.mediaGroup?.image}
                                            className="flex items-center justify-center w-full h-full rounded-3xl overflow-hidden"
                                            imgClassName="object-cover min-h-56"
                                            loading="lazy"
                                        />
                                    )}
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </MainGrid>
    )
}
