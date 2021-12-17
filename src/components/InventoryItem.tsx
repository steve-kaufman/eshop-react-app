import { Product } from "../types/Product"

import "../scss/inventory.scss"
import { useNavigate } from "react-router-dom"

export function InventoryItem({ id, name, price, imgURL }: Product) {
  const navigate = useNavigate()

  const selectItem = () => {
    navigate(`/product/${id}`)
  }

  return (
    <section className="inventory-item" onClick={selectItem}>
      <figure className="item-image">
        <img src={imgURL} alt={name} />
      </figure>
      <h3 className="item-name">{name}</h3>
      <p className="item-price">${price}</p>
    </section>
  )
}
