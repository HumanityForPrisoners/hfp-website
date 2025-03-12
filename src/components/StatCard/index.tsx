import clsx from 'clsx'
import React from 'react'

export type Props = {
  mainStat: string
  subtitle: string
} & React.HTMLAttributes<HTMLDivElement>

export const StatCard: React.FC<Props> = (props) => {
  const { mainStat, subtitle, className } = props

  return (
    <div
      className={clsx(
        'flex flex-col bg-primary py-6 px-2 items-center rounded-3xl rounded-ss-none  shadow-lg text-secondary',
        className,
      )}
    >
      <h1>{mainStat}</h1>
      <h4>{subtitle}</h4>
    </div>
  )
}
