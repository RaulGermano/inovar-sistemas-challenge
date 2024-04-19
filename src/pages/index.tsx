import DescriptionBaseButton from '@/components/Button/DescriptionBaseButton'
import BreathingGroupLoader from '@/components/Loader/BreathingGroupLoader'
import convertTimestampToTimeAgo from '@/utils/convertTimestampToTimeAgo'
import PostCard from '@components/Card/PostCard'
import { useResearcher } from '@contexts/ResearcherContext'
import LayoutDefault from '@layouts/LayoutDefault'
import { useGetPosts } from '@lib/services/queries/useGetPosts'
import type { IPost } from '@lib/types/post'
import SearchOffIcon from '@mui/icons-material/SearchOff'
import { useEffect, useState } from 'react'

const Page = () => {
  const { filterPosts } = useResearcher()
  const { data, isLoading } = useGetPosts(filterPosts)

  const [posts, setPosts] = useState<IPost[]>()

  useEffect(() => {
    if (data) setPosts(data)
  }, [data, filterPosts])

  return (
    <LayoutDefault>
      <div className="flex flex-1 flex-col justify-between gap-[65px]">
        <div className="flex flex-col">
          {isLoading && (
            <div className="flex flex-col gap-8">
              <BreathingGroupLoader count={5} height={80} />
            </div>
          )}

          <div className="flex flex-col gap-[60px]">
            {posts?.map((post, index) => {
              const props = {
                ...post,
                created_at: convertTimestampToTimeAgo(post.created_at),
              }
              return <PostCard key={index} {...props} />
            })}

            {!posts?.length && !isLoading && (
              <DescriptionBaseButton
                className="h-[100px] text-[#717171]"
                value={
                  <>
                    <SearchOffIcon color="action" fontSize="large" />
                    &nbsp; No items were found
                  </>
                }
              />
            )}
          </div>
        </div>

        <DescriptionBaseButton
          onClick={() => {
            /** TODO: Make it functional when implements route pagination */
          }}
        />
      </div>
    </LayoutDefault>
  )
}

export default Page
