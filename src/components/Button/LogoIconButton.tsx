import LogoImage from '@public/assets/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'

type ILogoIconButton = {
  link?: string
}

const LogoIconButton = ({ link = '#' }: ILogoIconButton) => (
  <Link href={link}>
    <Image src={LogoImage} alt="logo" height={40} />
  </Link>
)

export default LogoIconButton
