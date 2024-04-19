import { userDataMock } from '@/data/constants'
import { IPost } from '@/lib/types/post'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Button, ButtonGroup, Divider } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import ChipCategorySwitch from '../Chip/ChipCategorySwitch'

const PostCard = ({
  url,
  category,
  author,
  comments,
  likes,
  created_at: createdAt,
  title,
}: IPost) => {
  return (
    <div className="flex flex-row gap-[22px]">
      <ButtonGroup
        orientation="vertical"
        variant="contained"
        color="info"
        className="w-[40px] border-none shadow-none hover:shadow-none"
      >
        <Button
          onClick={() => {
            /** TODO: Have to be implemented */
          }}
          variant="contained"
          color="info"
          className="h-[32px] w-[44px] shadow-none hover:bg-[#fbfbfb] hover:shadow-none"
        >
          <KeyboardArrowUpIcon color="primary" />
        </Button>

        <Button
          onClick={() => {
            /** TODO: Have to be implemented */
          }}
          variant="contained"
          color="info"
          className="h-[42px] w-[44px] text-[24px] font-black shadow-none hover:bg-[#fbfbfb] hover:shadow-none"
        >
          {likes}
        </Button>
      </ButtonGroup>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <p className="text-[12px] font-medium uppercase leading-[normal] text-[#c4c4c4]">
            {url}
          </p>
          <Link href="#">
            <p className="line-clamp-1 text-[26px] leading-[normal]">{title}</p>
          </Link>
        </div>

        <div className="flex flex-row items-center">
          <ChipCategorySwitch value={category} />
          <Divider className="mx-3" orientation="vertical" />

          <div className="flex items-center gap-3">
            <Link href="#">
              <div className="flex flex-row items-center gap-1.5">
                <Image
                  src={userDataMock.profileImage}
                  priority
                  alt="logo"
                  width={18}
                  height={18}
                  className="rounded"
                />
                <p className="text-sm font-medium text-primary underline underline-offset-[3px]">
                  {author}
                </p>
              </div>
            </Link>

            <p className="hidden text-[12px] text-[#adadad] md:block">
              {createdAt}
            </p>

            <p className="hidden text-[20px] leading-[0] text-[#adadad] md:block">
              &bull;
            </p>

            <div className="hidden md:block">
              <Link href="#">
                <div className="flex flex-row items-center gap-1">
                  <ChatBubbleIcon fontSize="inherit" color="primary" />

                  <p className="text-[12px] font-normal text-primary underline underline-offset-[3px]">
                    {comments} Comment{`${parseInt(comments) === 1 ? '' : 's'}`}
                  </p>
                </div>
              </Link>
            </div>

            {/* TODO: Latel add a conditional role to show this component just when the logged user be the author */}
            <Link href="#">
              <p className="hidden text-[12px] font-normal text-primary underline underline-offset-[3px] md:block">
                Edit
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
