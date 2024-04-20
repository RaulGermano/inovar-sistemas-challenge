import { IPost } from '@/lib/types/post'

const sortPostsByProperty = (
  array: IPost[],
  property: keyof IPost,
): IPost[] => {
  return array.sort((itemA, itemB) => {
    const valueA = itemA[property]
    const valueB = itemB[property]

    // DOC: If just has numeric characters then apply filter by numeric hanking
    if (!isNaN(Number(valueA)) && !isNaN(Number(valueB))) {
      const numValueA = Number(valueA)
      const numValueB = Number(valueB)

      if (numValueA < numValueB) return -1
      if (numValueA > numValueB) return 1
      return 0
    }

    if (valueA < valueB) return -1
    if (valueA > valueB) return 1
    return 0
  })
}

export default sortPostsByProperty
