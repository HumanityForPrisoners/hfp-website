import React from 'react'
import { TestimonialBlock as TestimonialBlockProps } from '@/payload-types'
import { MainGrid } from '@/components/MainGrid'
import { Media } from '@/components/Media'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'

export const TestimonialBlock: React.FC<TestimonialBlockProps> = ({ video, content }) => {
    const { heading, preHeading, testimonialContent } = content

    const { fullName, profilePic, testimonial } = testimonialContent
    return (
        <MainGrid className="lg:px-6">
            <iframe
                className="z-8 cursor-pointer col-span-6 col-start-1 rounded-[7rem] rounded-tl-none w-full h-96 row-start-1 lg:col-span-full"
                src={video.video}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
            />
            <div className="rounded-[7rem] z-11 rounded-tr-none h-96 bg-primary flex flex-col justify-center shadow-md col-span-7 lg:col-span-full col-start-6 lg:col-start-1 mt-44 lg:mt-0 gap-6 row-start-1 lg:row-start-2 p-16 lg:h-fit">
                <h6 className="text-secondary">{preHeading}</h6>
                <h3 className="text-ring">{heading}</h3>
                <div className="flex items-start gap-4">
                    <div className="w-auto">
                        <Media
                            resource={profilePic}
                            className="relative w-12 h-12 rounded-full overflow-hidden"
                            imgClassName="object-cover"
                            fill={true}
                            loading="lazy"
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <div className="pb-3">
                                <h6 className="text-secondary">{fullName}</h6>
                                <p className="text-[.65rem]">
                                    Watch Here:{' '}
                                    <a target="_blank" href={video.video}>
                                        {video.video}
                                    </a>
                                </p>
                            </div>
                            <div className="text-6xl leading-[0]">
                                <FormatQuoteIcon fontSize="inherit" className="text-secondary" />
                            </div>
                        </div>
                        <p className="italic">{testimonial}</p>
                    </div>
                </div>
            </div>
        </MainGrid>
    )
}
