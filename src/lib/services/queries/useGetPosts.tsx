import { searchMenuOptions } from '@/data/constants'
import { IPost, IPosts } from '@/lib/types/post'
import sortPostsByProperty from '@/utils/sortPostsByProperty'
import axiosInstance from '@lib/services/axios/axiosInstance'
import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { toast } from 'react-toastify'

export type IFiltersPosts = {
  search?: string
  orderBy?: keyof IPost
}

const getPosts = async (filters?: IFiltersPosts): Promise<IPost[]> => {
  try {
    const response = await axiosInstance.get<IPosts>(
      `/a94fc67f-71a2-475d-a6a4-ddde5c566f67`,
    )

    let data: IPost[] = response.data.posts

    if (filters?.search) {
      data = data.filter((post) =>
        post.title.toLowerCase().includes(filters?.search || ''),
      )
    }

    if (filters?.orderBy) {
      data = sortPostsByProperty(
        data,
        filters?.orderBy || (searchMenuOptions[0].key as keyof IPost),
      )
    }

    return data
  } catch (error) {
    toast.error('Some error has occurred. Try again')
    console.error(error)

    return []
  }
}

const useGetPosts = (filters?: IFiltersPosts): UseQueryResult<IPost[]> => {
  return useQuery<IPost[]>({
    queryKey: ['POSTS', filters],
    queryFn: () => getPosts(filters),
  })
}

export { getPosts, useGetPosts }
