import { useRecoilValue } from "recoil"
import { CartItemComponent } from "../components/CartItemComponent"
import { cartState } from "../state/cart"

import "../scss/cart.scss"
import { Link } from "react-router-dom"

export function CartPage() {
  const cart = useRecoilValue(cartState)

  const total = cart
    .reduce<number>((value, item) => {
      return value + item.quantity * item.price
    }, 0)
    .toFixed(2)

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
      <footer className="cart-footer">
        <section className="cart-total">
          <h3>Total:</h3>
          <h2 className="total-price">${total}</h2>
        </section>
        <Link to="/checkout">
          <button className="checkout-btn">Checkout</button>
        </Link>
      </footer>
    </main>
  )
}
