import { footerLinksOptions, socialMediasLinks } from '@/data/constants'
import ButtonWithIcon from '@components/Button/ButtonWithIcon'
import LogoIconButton from '@components/Button/LogoIconButton'
import Link from 'next/link'

const FooterDefault = () => {
  return (
    <footer className="container mb-2 mt-3">
      <div className="flex flex-col justify-between gap-3 sm:flex-row">
        <div className="flex flex-row items-center justify-center gap-3">
          <LogoIconButton />

          <div className="flex flex-col">
            <p className="text-[15px] font-bold leading-[normal]">
              The UX Library
            </p>

            <p className="text-[13px] leading-[normal] text-[#868686]">
              Community curated design content & discussion
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-center sm:flex-col sm:justify-start">
          <div className="flex flex-row items-center justify-center gap-2 sm:justify-start">
            {socialMediasLinks.map((props, index) => (
              <ButtonWithIcon key={index} {...props} />
            ))}

            <p className="hidden text-[20px] leading-[0] text-[#adadad] md:block">
              &bull;
            </p>

            {footerLinksOptions.map(({ title, link }, index) => (
              <Link key={index} href={link}>
                <p className="text-[12px] font-medium text-primary">{title}</p>
              </Link>
            ))}
          </div>

          <div>
            <p className="hidden text-right text-[11px] text-[#adadad] md:block">
              &copy; 2014 - The UX Library
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterDefault
