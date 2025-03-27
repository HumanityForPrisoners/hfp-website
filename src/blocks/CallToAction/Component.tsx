import React from 'react'

import type { CallToActionBlock as CTABlockProps } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import { MainGrid } from '@/components/MainGrid'

export const CallToActionBlock: React.FC<CTABlockProps> = ({ backgroundImage, content }) => {
  const { preHeader, heading, description, ctaButton } = content
  return (
    <div className="bg-secondary relative overflow-clip flex flex-col items-center justify-center w-full h-96">
      <Media
        className="absolute"
        imgClassName="-z-10 object-cover h-96 opacity-25"
        resource={backgroundImage}
        loading="lazy"
      />
      <MainGrid className="z-10">
        <div className="flex justify-between items-center h-fit col-span-12">
          <div className="flex flex-col gap-8 z-10 w-1/2 ">
            <h6 className="text-primary">{preHeader}</h6>
            <h2 className="text-primary">{heading}</h2>
            <p className="text-primary">{description}</p>
          </div>
          <div className="flex flex-col gap-8 w-auto pr-36">
            <CMSLink className="text-primary" appearance="outline" size="lg" {...ctaButton} />
          </div>
        </div>
      </MainGrid>
    </div>
  )
}
