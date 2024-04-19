import { FC, Fragment } from 'react'
import { Breathing } from 'react-shimmer'

type BreathingListProps = {
  count: number
  height?: number
  width?: number
  className?: string
}

const BreathingGroupLoader: FC<BreathingListProps> = ({
  count,
  height,
  width,
  className,
}) => {
  return (
    <Fragment>
      {/* DOC: Declaring Breathig quantity bar whill repeat */}
      {[...Array(count)].map((_value, index) => (
        <Breathing
          key={String(index)}
          height={height}
          width={width}
          className={`rounded ${className}`}
        />
      ))}
    </Fragment>
  )
}

export default BreathingGroupLoader
