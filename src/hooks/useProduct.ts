import { products } from "../App"

export function useProduct(id: string) {
  const product = products.find((product) => product.id === id)
  if (!product) throw new Error("no product with that id")
  return product
}
