'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'

import type { Page } from '@/payload-types'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const MediumImpactHero: React.FC<Page['hero']> = ({ media, richText }) => {
  const { headerTheme } = useHeaderTheme()

  return (
    <div
      className="relative -mt-[10.4rem] pt-20 flex items-center justify-center text-white"
      data-theme={headerTheme}
    >
      <div className="mx-auto flex flex-col items-center justify-center pt-16 pb-16">
        <div className="md:text-center">
          {richText && (
            <RichText
              className="mb-6 prose-h2:text-primary 
              prose-h2:font-normal
              prose-h6:text-secondary"
              data={richText}
              enableGutter={false}
            />
          )}
        </div>
      </div>
      <div className="min-h-[60vh] select-none">
        {media && typeof media === 'object' && (
          <Media fill imgClassName="-z-10 object-cover" priority resource={media} />
        )}
      </div>
    </div>
  )
}
