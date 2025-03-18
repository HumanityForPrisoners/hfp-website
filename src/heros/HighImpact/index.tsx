'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { headerTheme } = useHeaderTheme()

  return (
    <div
      className="relative -mt-[7.4rem] pt-20 flex items-center justify-center text-white"
      data-theme={headerTheme || 'light'}
    >
      <div className="mx-auto grid-cols-12-90 gap-30 grid pb-24">
        <div className="md:text-left col-start-7 col-span-full">
          {richText && (
            <RichText
              className="mb-6 prose-h1:text-primary 
              prose-p:text-primary
              prose-h6:text-secondary"
              data={richText}
              enableGutter={false}
            />
          )}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex gap-4">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} size={'lg'} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
      <div className="min-h-[80vh] select-none">
        {media && typeof media === 'object' && (
          <Media fill imgClassName="-z-10 object-cover" priority resource={media} />
        )}
      </div>
    </div>
  )
}
