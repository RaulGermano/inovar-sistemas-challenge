import { SvgIconProps } from '@mui/material'
import Link from 'next/link'
import { ElementType } from 'react'

type IButtonWithIcon = {
  IconComponent: ElementType<SvgIconProps>
  color: string | null
  label: string
  href: string
}

const ButtonWithIcon = ({
  IconComponent,
  color = null,
  label,
  href,
}: IButtonWithIcon) => (
  <Link href={href}>
    <div className="flex flex-row gap-0.5">
      <IconComponent fontSize="small" sx={{ fill: color }} />
      <p className="text-[13px] font-medium">{label}</p>
    </div>
  </Link>
)

export default ButtonWithIcon
