import { userDataMock } from '@/data/constants'
import LogoIconButton from '@components/Button/LogoIconButton'
import AddIcon from '@mui/icons-material/Add'
import { Button, ButtonGroup } from '@mui/material'
import Image from 'next/image'
import { FC, ReactNode, useRef } from 'react'

type HeaderProps = {
  children?: ReactNode
}

const HeaderDefault: FC<HeaderProps> = ({ children = null }) => {
  const anchorRef = useRef<HTMLDivElement>(null)

  return (
    <header className="mb-[30px] border-b border-solid border-b-[#eeeeee] pb-[30px] pt-[10px] md:mb-[60px] md:pt-[30px]">
      <div className="container flex flex-col-reverse justify-between gap-[15px] sm:flex-row">
        <div className="flex flex-col sm:flex-row">
          <div className="flex items-end">
            <div className="hidden sm:block">
              <LogoIconButton />
            </div>
            {children && (
              <div className="relative mx-4 hidden h-full w-px bg-[#f0f0f0] sm:block"></div>
            )}
          </div>

          <div>{children}</div>
        </div>

        <div className="flex flex-row-reverse justify-between gap-[18px] md:flex-row">
          <ButtonGroup variant="contained" ref={anchorRef}>
            <Button
              onClick={() => {
                /** TODO: Have to be implemented */
              }}
            >
              <AddIcon />
            </Button>

            <Button
              onClick={() => {
                /** TODO: Have to be implemented */
              }}
            >
              Add Post
            </Button>
          </ButtonGroup>

          <div className="relative text-center">
            <div className="absolute left-1/2 top-1/2 h-[18px] w-[18px] -translate-x-[160%] translate-y-[-50%] rounded bg-primary text-[13px] font-bold text-white">
              5
            </div>

            <Image
              src={userDataMock.profileImage}
              priority
              alt="profile-image"
              width={40}
              height={40}
              className="inline-block rounded"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderDefault
