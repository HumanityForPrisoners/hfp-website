import clsx from 'clsx'
import React from 'react'

export type Props = React.HTMLAttributes<HTMLDivElement>

export const MainGrid: React.FC<Props> = (props) => {
  const { children, className } = props

  return (
    <div className="flex items-center justify-center">
      <div className={clsx('mx-auto grid-cols-12-90 gap-30 grid pt-16 pb-16', className)}>
        {children}
      </div>
    </div>
  )
}
