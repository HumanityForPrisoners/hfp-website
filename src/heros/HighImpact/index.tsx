'use client'
import type { Page } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
    return (
        <div
            className="relative -mt-[7.4rem] pt-20 flex items-center justify-center text-white min-h-[80vh]"
            data-theme="light"
        >
            {/* Media as Background */}
            {media && typeof media === 'object' && (
                <Media
                    fill
                    imgClassName="-z-10 object-cover"
                    videoClassName="-z-10 absolute inset-0 w-full h-full object-cover"
                    priority
                    resource={media}
                    loading="eager"
                />
            )}
            <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
            {/* Text Content Overlay */}
            <div className="mx-auto grid-cols-12-90 gap-30 grid pb-24 z-10">
                <div className="md:text-left col-start-7 col-span-full">
                    {richText && (
                        <RichText
                            className="mb-6 prose-h1:text-primary 
              prose-p:text-primary
              prose-h6:text-secondary drop-shadow-xl"
                            data={richText}
                            enableGutter={false}
                        />
                    )}
                    {Array.isArray(links) && links.length > 0 && (
                        <ul className="flex gap-4">
                            {links.map(({ link }, i) => (
                                <li key={i}>
                                    <CMSLink {...link} size={'lg'} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}
