import { useParams } from "react-router-dom"
import { useProduct } from "../hooks/useProduct"
import "../scss/product-page.scss"

export function ProductPage() {
  const { id } = useParams()

  if (!id) {
    throw new Error("no ID in URL")
  }

  const { name, imgURL, price } = useProduct(id)

  return (
    <main className="page-main product-page">
      <section className="product-image">
        <img src={imgURL} alt={name} />
      </section>
      <h2 className="product-name">{name}</h2>
      <h3 className="product-price">${price}</h3>
    </main>
  )
}
