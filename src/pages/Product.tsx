import { Icon } from "@iconify/react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useRecoilState } from "recoil"
import { useProduct } from "../hooks/useProduct"
import "../scss/product-page.scss"
import { CartItem, cartState } from "../state/cart"

export function ProductPage() {
  const { id } = useParams()

  if (!id) {
    throw new Error("no ID in URL")
  }

  const { name, imgURL, price } = useProduct(id)

  const [cart, setCart] = useRecoilState(cartState)
  const [itemInCart, setItemInCart] = useState<CartItem | undefined>()

  useEffect(() => {
    setItemInCart(cart.find((item) => item.productID === id))
  }, [cart, id])

  const addToCart = () => {
    setCart((cart) => [...cart, { productID: id, quantity: 1 }])
  }

  const addToQuantity = (amount: number) => {
    const newQuantity = itemInCart!.quantity + amount

    if (newQuantity < 1) {
      setCart((cart) => cart.filter((item) => item.productID !== id))
    }

    setCart((cart) =>
      cart.map((item) => {
        if (item.productID !== id) return item
        return { ...item, quantity: item.quantity + amount }
      })
    )
  }

  return (
    <main className="page-main product-page">
      <section className="product-image">
        <img src={imgURL} alt={name} />
      </section>
      <h2 className="product-name">{name}</h2>
      <section className="product-details">
        <h3 className="product-price">${price}</h3>
        {!itemInCart ? (
          <button className="add-to-cart-btn" onClick={addToCart}>
            Add To Cart
          </button>
        ) : (
          <span className="quantity-details">
            <button className="quantity-btn" onClick={() => addToQuantity(-1)}>
              <Icon icon="mdi:minus-circle-outline" />
            </button>
            <span className="quantity-text">{itemInCart.quantity}</span>
            <button className="quantity-btn" onClick={() => addToQuantity(1)}>
              <Icon icon="mdi:plus-circle-outline" />
            </button>
          </span>
        )}
      </section>
    </main>
  )
}
