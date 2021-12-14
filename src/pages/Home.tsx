import { ItemList } from "../components/ItemList"
import { Item } from "../types/Item"

const popularItems: Item[] = [
  {
    id: "1",
    name: "Chair",
    price: 49.99,
    imgURL: "https://i.imgur.com/aWkpX3W.png",
  },
  {
    id: "2",
    name: "Baseball Bat",
    price: 9.99,
    imgURL: "https://i.imgur.com/0xCacPi.jpeg",
  },
  {
    id: "3",
    name: "Cat",
    price: NaN,
    imgURL: "https://i.imgur.com/AD3MbBi.jpeg",
  },
  {
    id: "4",
    name: "Dog",
    price: 0.25,
    imgURL: "https://i.imgur.com/XgbZdeA.jpeg",
  },
  {
    id: "5",
    name: "Lamp",
    price: 29.99,
    imgURL: "https://i.imgur.com/DFbPzOo.jpeg",
  },
  {
    id: "6",
    name: "Cheese",
    price: 5.99,
    imgURL: "https://i.imgur.com/N3LYcZs.jpeg",
  },
]

const holidayItems: Item[] = [
  {
    id: "20",
    name: "Snowglobe",
    price: 7.99,
    imgURL: "https://i.imgur.com/sV5pINr.jpeg",
  },
  {
    id: "21",
    name: "Santa Hat",
    price: 9.99,
    imgURL: "https://i.imgur.com/DxTY4yZ.png",
  },
  {
    id: "22",
    name: "Creepy Elf",
    price: 12.49,
    imgURL: "https://i.imgur.com/7bfhDBU.jpeg",
  },
]

const giftIdeas: Item[] = [
  {
    id: "30",
    name: "XBox One S",
    price: 4999.99,
    imgURL: "https://i.imgur.com/4SSxcSA.jpeg",
  },
  {
    id: "31",
    name: "Paper Weights",
    price: 3.49,
    imgURL:
      "https://i.pinimg.com/originals/9c/ae/53/9cae53a5572f1a8f3dfed279a341e1fe.jpg",
  },
  {
    id: "32",
    name: "Roomba",
    price: 86.39,
    imgURL:
      "https://i.pcmag.com/imagery/reviews/01hmxcWyN13h1LfMglNxHGC-1..v1589573902.jpg",
  },
]

export function Home() {
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
