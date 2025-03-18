import clsx from 'clsx'
import React from 'react'
import type { Media } from 'src/payload-types'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
  logo?: Media | { url: string } | null
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  if (!props.logo?.url) {
    return null
  }

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="Payload Logo"
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('max-w-[9.375rem] w-fit h-fit', className)}
      src={props.logo.url}
    />
  )
}
