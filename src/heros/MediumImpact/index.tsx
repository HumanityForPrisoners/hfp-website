'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'

import type { Page } from '@/payload-types'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const MediumImpactHero: React.FC<Page['hero']> = ({ media, richText }) => {
    const { headerTheme } = useHeaderTheme()

    return (
        <div
            className="relative -mt-[10.4rem] min-h-[60vh] pt-20 flex items-center justify-center text-white"
            data-theme={headerTheme}
        >
            <div className="absolute w-full h-full mx-auto flex flex-col items-center justify-center pt-32 pb-16 z-10">
                <div className="md:text-center h-fit">
                    {richText && (
                        <RichText
                            className="prose-h2:text-primary prose-h2:drop-shadow-lg
              prose-h2:font-normal
              prose-h6:text-primary prose-h6:opacity-75"
                            data={richText}
                            enableGutter={false}
                        />
                    )}
                </div>
            </div>
            <div className="select-none absolute w-full h-full">
                {media && typeof media === 'object' && (
                    <Media fill imgClassName="-z-10 object-cover" priority resource={media} />
                )}
                <div className="absolute z-0 bg-gradient-to-t from-secondary w-full h-full" />
            </div>
        </div>
    )
}
