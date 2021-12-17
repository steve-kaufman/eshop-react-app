import { products } from "../App"
import { ItemList } from "../components/ItemList"

export function Home() {
  const popularItems = products.filter((product) =>
    product.tags.includes("popular")
  )

  const holidayItems = products.filter((product) =>
    product.tags.includes("holiday")
  )

  const giftIdeas = products.filter((product) => product.tags.includes("gift"))

  return (
    <main className="page-main home">
      <h2 className="sub-heading">Popular Items:</h2>
      <ItemList items={popularItems} />
      <br />
      <h2 className="sub-heading">Holiday Cheer:</h2>
      <ItemList items={holidayItems} />
      <br />
      <h2 className="sub-heading">Gift Ideas:</h2>
      <ItemList items={giftIdeas} />
    </main>
  )
}
