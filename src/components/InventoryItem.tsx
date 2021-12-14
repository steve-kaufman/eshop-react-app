import { Item } from "../types/Item"

import "../scss/inventory.scss"

export function InventoryItem({ name, price, imgURL }: Item) {
  return (
    <section className="inventory-item">
      <figure className="item-image">
        <img src={imgURL} alt={name} />
      </figure>
      <h3 className="item-name">{name}</h3>
      <p className="item-price">${price}</p>
    </section>
  )
}
