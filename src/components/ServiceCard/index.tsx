import React from 'react'
import { Service } from '@/payload-types'
import { Media } from '../Media'
import Link from 'next/link'

export type Props = {
  reference: Pick<Service, 'slug' | 'content' | 'title'>
}

export const ServiceCard: React.FC<Props> = (props) => {
  const { reference } = props
  return (
    <div className="col-span-4 relative">
      <Link href={`/services/${reference.slug}`}>
        <Media
          className="rounded-3xl"
          imgClassName="rounded-3xl w-full h-full"
          resource={reference.content.image}
          loading="lazy"
        />
        <div className="bg-secondary w-[92%] h-40 absolute z-10 -bottom-12 left-0 px-6 py-4 rounded-bl-3xl">
          <div className="flex flex-col gap-3 text-primary">
            <h5>{reference.title}</h5>
            <p>{reference.content.shortDescription}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
