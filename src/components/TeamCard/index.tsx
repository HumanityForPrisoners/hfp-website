import React from 'react'
import { Team } from '@/payload-types'
import { Media } from '../Media'
import Link from 'next/link'

export type Props = {
  reference: Team
}

export const TeamCard: React.FC<Props> = (props) => {
  const { reference } = props
  return (
    <div className="col-span-4 relative">
      <Media
        className="rounded-3xl h-80"
        imgClassName="rounded-3xl w-full h-full object-cover"
        resource={reference.about.image}
        loading="lazy"
      />
      <div className="bg-secondary w-[92%] h-40 absolute z-10 -bottom-12 left-0 px-6 py-4 rounded-bl-3xl">
        <div className="flex flex-col gap-3 text-primary">
          <h5>{reference.fullName}</h5>
          <p>{reference.about.position}</p>
        </div>
      </div>
    </div>
  )
}
