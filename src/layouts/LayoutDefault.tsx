import HeaderResearcher from '@/components/Header/HeaderResearcher'
import FooterDefault from '@components/Footer/FooterDefault'
import { FC, Fragment, ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

const LayoutDefault: FC<LayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <HeaderResearcher />
      <div className="container flex min-h-[700px]">{children}</div>
      <FooterDefault />
    </Fragment>
  )
}

export default LayoutDefault
