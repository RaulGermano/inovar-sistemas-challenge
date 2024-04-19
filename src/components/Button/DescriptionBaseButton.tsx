import CachedIcon from '@mui/icons-material/Cached'
import Button from '@mui/material/Button'
import { FC, ReactNode } from 'react'

type IDescriptionBaseButton = {
  onClick?: () => void
  value?: ReactNode
  className?: string
}

const defaultValue = (
  <>
    <CachedIcon color="primary" />
    &nbsp; Load more
  </>
)

const DescriptionBaseButton: FC<IDescriptionBaseButton> = ({
  onClick,
  value = defaultValue,
  className,
}) => (
  <div className="flex">
    <Button
      onClick={onClick}
      variant="contained"
      className={`h-[62px] w-full bg-[#f4f4f1] text-[16px] normal-case text-primary shadow-none hover:bg-[#f7f7f7] hover:shadow-none ${className}`}
    >
      {value}
    </Button>
  </div>
)

export default DescriptionBaseButton
