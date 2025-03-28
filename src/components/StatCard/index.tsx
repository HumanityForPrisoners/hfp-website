import clsx from 'clsx'
import React from 'react'

export type Props = {
  mainStat: string
  subtitle: string
  mdf: boolean
  rmbg: boolean
} & React.HTMLAttributes<HTMLDivElement>

export const StatCard: React.FC<Props> = (props) => {
  const { mainStat, subtitle, className, mdf, rmbg } = props

  return (
    <div
      className={clsx(
        (mdf || !rmbg) && 'bg-primary rounded-3xl rounded-ss-none shadow-lg',
        'flex flex-col py-6 px-2 items-center text-secondary',
        className,
      )}
    >
      <h1>{mainStat}</h1>
      <h4>{subtitle}</h4>
    </div>
  )
}
