import { postCategories } from '@/data/constants'
import Chip from '@mui/material/Chip'

type IChipCategorySwitch = {
  value: string
  className?: string
}

const ChipCategorySwitch = ({ value, className }: IChipCategorySwitch) => {
  const category = postCategories.find(({ name }) => name === value)

  if (!category) return null

  return (
    <Chip
      label={category.name}
      className={`h-[24px] text-[12px] text-white ${className}`}
      style={{ backgroundColor: category.color }}
    />
  )
}

export default ChipCategorySwitch
