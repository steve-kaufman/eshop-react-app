import { Icon } from "@iconify/react"
import { useProduct } from "../hooks/useProduct"
import { CartItem } from "../state/cart"

export function CartItemComponent({ productID, quantity }: CartItem) {
  const { name, price, imgURL } = useProduct(productID)

  return (
    <li className="cart-item">
      <figure className="product-img">
        <img src={imgURL} alt={name} />
      </figure>
      <section className="product-details">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">${price}</p>
        <p className="product-quantity">Quantity: {quantity}</p>
      </section>
      <Icon className="remove-btn" icon="mdi:trash-can-outline" />
    </li>
  )
}
