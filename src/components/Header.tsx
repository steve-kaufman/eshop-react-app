import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"
import "../scss/header.scss"

export function Header() {
  return (
    <header className="page-header">
      <Link to="/">
        <h2 className="title">EShop</h2>
      </Link>
      <Link to="/cart" className="cart">
        <Icon icon="mdi:cart" />
        <p>Cart</p>
      </Link>
    </header>
  )
}
