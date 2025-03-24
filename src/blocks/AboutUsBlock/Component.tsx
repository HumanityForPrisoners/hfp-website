import React from 'react'
import Rectangle from '@/icons/rectangle.svg'

import type { AboutUsBlock as AboutUsBlockProps } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import { MainGrid } from '@/components/MainGrid'
import { PageHeading } from '@/components/PageHeading'
import Image from 'next/image'
import {
  AccessibilityNew,
  AssistWalker,
  Hearing,
  Info,
  PrivacyTip,
  Help,
  QuestionMark,
  Handshake,
  VolunteerActivism,
} from '@mui/icons-material'

export const AboutUsBlock: React.FC<AboutUsBlockProps> = ({ leftSide, rightSide }) => {
  const iconMap = {
    accessibilityNew: AccessibilityNew,
    hearing: Hearing,
    assistWalker: AssistWalker,
    info: Info,
    privacyTip: PrivacyTip,
    help: Help,
    questionMark: QuestionMark,
    handshake: Handshake,
    volunteerActivism: VolunteerActivism,
  }
  return (
    <MainGrid>
      <div className="col-span-6 flex flex-col gap-3">
        <PageHeading {...leftSide.pageHeading} className="pb-2" />
        <div>
          {leftSide.values?.map(({ icon, valueTitle, valueDescription }, i) => {
            const Icon = iconMap[icon]
            return (
              <div className="flex flex-row gap-4 items-center pb-4" key={i}>
                <div className="text-6xl">
                  <Icon className="text-secondary" fontSize="inherit" />
                </div>

                <div className="flex flex-col gap-2">
                  <h4>{valueTitle}</h4>
                  <p>{valueDescription}</p>
                </div>
              </div>
            )
          })}
        </div>
        <CMSLink className="w-fit" {...leftSide.ctaButton} size={'lg'} appearance={'default'} />
      </div>

      <div className="col-span-6 relative flex flex-col items-center">
        <Media
          imgClassName="rounded-full rounded-tr-none h-64 w-auto"
          className="z-11 w-fit -mb-3 pl-56"
          resource={rightSide.topImage}
          loading="lazy"
        />
        <Media
          imgClassName="rounded-full rounded-tl-none h-64 w-auto"
          className="z-10 w-fit -mt-3 pr-56"
          resource={rightSide.bottomImage}
          loading="lazy"
        />
        <Image
          src={Rectangle}
          alt="Rectangle"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1] object-cover"
        />
      </div>
    </MainGrid>
  )
}
