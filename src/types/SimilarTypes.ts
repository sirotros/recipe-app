export type SimilarType = SimilarItemsType[]

export interface SimilarItemsType {
  id: number
  imageType: string
  title: string
  readyInMinutes: number
  servings: number
  sourceUrl: string
}
