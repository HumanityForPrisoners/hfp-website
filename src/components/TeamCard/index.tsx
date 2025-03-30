import React from 'react'
import { Team } from '@/payload-types'
import { Media } from '../Media'
import clsx from 'clsx'
import { CMSLink } from '@/components/Link'

import { YouTube, LinkedIn, Instagram, Facebook, X, LocalPhone, Mail } from '@mui/icons-material'

export type Props = {
  reference: Team
} & React.HTMLAttributes<HTMLDivElement>

export const TeamCard: React.FC<Props> = (props) => {
  const iconMap = {
    linkedin: LinkedIn,
    youtube: YouTube,
    instagram: Instagram,
    facebook: Facebook,
    x: X,
    phone: LocalPhone,
    mail: Mail,
  }

  const { reference, className } = props
  return (
    <div className={clsx(className)}>
      <div className="relative">
        <Media
          className="rounded-3xl h-[32rem]"
          imgClassName="rounded-3xl w-full h-full object-cover"
          resource={reference.about.image}
          loading="lazy"
        />
        <div className="flex flex-col gap-2 absolute left-0 top-0 h-full justify-center">
          {reference.about.socialLinks?.map((socialLink, i) => {
            const Icon = iconMap[socialLink.icon]
            return (
              <CMSLink
                key={i}
                className="bg-primary rounded-sm rounded-l-none p-2 flex items-center text-2xl justify-center hover:bg-secondary group transition-colors"
                {...socialLink.socialLink}
              >
                <Icon className="text-secondary group-hover:text-primary" fontSize="inherit" />
              </CMSLink>
            )
          })}
          {reference.about.contactLinks?.map(({ emailSelect, phoneSelect, type }, i) => {
            const Icon = iconMap[type]
            return (
              <CMSLink
                key={i}
                className="bg-primary rounded-sm rounded-l-none p-2 flex items-center text-2xl justify-center hover:bg-secondary group transition-colors"
                url={type === 'phone' ? `tel:${phoneSelect}` : `mailto:${emailSelect}`}
              >
                <Icon className="text-secondary group-hover:text-primary" fontSize="inherit" />
              </CMSLink>
            )
          })}
        </div>
      </div>
      <div className="w-full h-auto px-6 py-4">
        <div className="flex flex-col gap-3 items-center justify-center">
          <h4 className="text-3xl text-secondary">{reference.fullName}</h4>
          <p>{reference.about.position}</p>
        </div>
      </div>
    </div>
  )
}
