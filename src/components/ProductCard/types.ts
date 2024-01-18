type Category = 'camiseta' | 'camisa' | 'boné'
type Size = 'PP' | 'P' | 'M' | 'G' | 'GG' | 'GGG'

export type Product = {
  title: String
  category: Category
  description: string
  value: number
  discount: number
  image: string
  variants: {
    size: Size, 
    value: number, 
    sku: string,
    amount: number
  }[]
}