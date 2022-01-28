import { Icon } from "@iconify/react"
import { useSetRecoilState } from "recoil"
import { useProduct } from "../hooks/useProduct"
import { CartItem, cartState } from "../state/cart"

export function CartItemComponent({ productID, quantity }: CartItem) {
  const { name, price, imgURL } = useProduct(productID)

  const setCart = useSetRecoilState(cartState)

  const remove = () => {
    setCart(cart => 
      cart.filter(item => 
        item.productID !== productID))
  }

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
      <button className="remove-btn" onClick={remove}>
        <Icon icon="mdi:trash-can-outline" />
      </button>
    </li>
  )
}
