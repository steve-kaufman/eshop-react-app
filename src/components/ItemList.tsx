import { Item } from "../types/Item"
import { InventoryItem } from "./InventoryItem"

export function ItemList({ items }: { items: Item[] }) {
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
