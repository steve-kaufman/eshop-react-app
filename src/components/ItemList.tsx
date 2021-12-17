import { Product } from "../types/Product"
import { InventoryItem } from "./InventoryItem"

export function ItemList({ items }: { items: Product[] }) {
  return (
    <ul className="item-list">
      {items.map((item, i) => (
        <li key={i}>
          <InventoryItem {...item} />
        </li>
      ))}
    </ul>
  )
}
