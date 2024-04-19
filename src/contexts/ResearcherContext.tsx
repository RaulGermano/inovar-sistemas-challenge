import { searchMenuOptions } from '@/data/constants'
import { IPost } from '@/lib/types/post'
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react'

export type IFiltersPosts = {
  search?: string
  orderBy?: keyof IPost
}

export type IResearcher = {
  filterPosts: IFiltersPosts
  setFilterPosts: Dispatch<SetStateAction<IFiltersPosts>>
}

type ContextProps = {
  children: ReactNode
}

export const ResearcherContext = createContext({} as IResearcher)

export const useResearcher = () => {
  const context = useContext(ResearcherContext)
  return context
}

export const ResearcherContextProvider: FC<ContextProps> = ({ children }) => {
  // DOC: Declaring initial values
  const [filterPosts, setFilterPosts] = useState<IFiltersPosts>({
    search: '',
    orderBy: searchMenuOptions[0].key as keyof IPost,
  })

  const value = useMemo(
    () => ({ filterPosts, setFilterPosts }),
    [filterPosts, setFilterPosts],
  )

  return (
    <ResearcherContext.Provider value={value}>
      {children}
    </ResearcherContext.Provider>
  )
}
