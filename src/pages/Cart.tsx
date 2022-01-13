import { useRecoilValue } from "recoil"
import { CartItemComponent } from "../components/CartItemComponent"
import { cartState } from "../state/cart"

import "../scss/cart.scss"

export function CartPage() {
  const cart = useRecoilValue(cartState)

  return (
    <main className="page-main cart-page">
      <h2 className="sub-heading" style={{ fontSize: "1.2rem" }}>
        My Cart
      </h2>
      <ul className="cart-items">
        {cart.map((item, i) => (
          <CartItemComponent key={i} {...item} />
        ))}
      </ul>
    </main>
  )
}
