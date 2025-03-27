import React from 'react'
import { Post } from '@/payload-types'
import { Media } from '../Media'
import Link from 'next/link'

export type Props = {
  reference: Pick<Post, 'slug' | 'content' | 'title'>
}

export const PostCard: React.FC<Props> = (props) => {
  const { reference } = props
  return (
    <div className="col-span-4">
      <Link href={`/posts/${reference.slug}`}>
        <Media
          imgClassName="w-full h-72 rounded-t-3xl"
          resource={reference.content.image}
          loading="lazy"
        />
        <div className="border-b-4 border-transparent hover:border-secondary box-content shadow-md bg-primary h-32 rounded-b-3xl p-4">
          <div className="flex justify-between h-full flex-col gap-3 text-primary">
            <h5 className="text-ring">{reference.title}</h5>
            <p className="text-secondary text-sm">Read More</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
