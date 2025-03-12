import React from 'react'

export type Props = {
  name: string
  progress: number
} & React.HTMLAttributes<HTMLDivElement>

export const StatProgressBar: React.FC<Props> = (props) => {
  const { name, progress } = props
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex justify-between w-full">
        <h6 className="text-secondary">{name}</h6>
        <h6 className="text-secondary">{progress}%</h6>
      </div>

      <div className="w-full h-3 border border-secondary rounded-full overflow-hidden">
        <div className="h-full bg-secondary" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  )
}
