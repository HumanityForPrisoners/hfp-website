import clsx from 'clsx'
import React from 'react'
import { MainGrid } from '../MainGrid'

export type Props = {
  preHeader: string
  header: string
  description: string
  direction: 'left' | 'center'
} & React.HTMLAttributes<HTMLDivElement>

export const PageHeading: React.FC<Props> = (props) => {
  const { preHeader, header, description, direction, className } = props
  return (
    <div
      className={clsx(
        'flex flex-col gap-3',
        direction === 'center' ? 'items-center col-start-4' : 'col-start-1 items-start',
        className,
      )}
    >
      <h6 className="text-secondary">{preHeader}</h6>
      <h3 className="text-popover-foreground">{header}</h3>
      <p className={direction === 'center' ? 'text-center' : 'text-left'}>{description}</p>
    </div>
  )
}
