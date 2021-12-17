import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { ProductPage } from "./pages/Product"
import { Product } from "./types/Product"

export const products: Product[] = [
  {
    id: "1",
    name: "Chair",
    price: 49.99,
    imgURL: "https://i.imgur.com/aWkpX3W.png",
    tags: ["popular"],
  },
  {
    id: "2",
    name: "Baseball Bat",
    price: 9.99,
    imgURL: "https://i.imgur.com/0xCacPi.jpeg",
    tags: ["popular"],
  },
  {
    id: "3",
    name: "Cat",
    price: NaN,
    imgURL: "https://i.imgur.com/AD3MbBi.jpeg",
    tags: ["popular"],
  },
  {
    id: "4",
    name: "Dog",
    price: 0.25,
    imgURL: "https://i.imgur.com/XgbZdeA.jpeg",
    tags: ["popular"],
  },
  {
    id: "5",
    name: "Lamp",
    price: 29.99,
    imgURL: "https://i.imgur.com/DFbPzOo.jpeg",
    tags: ["popular"],
  },
  {
    id: "6",
    name: "Cheese",
    price: 5.99,
    imgURL: "https://i.imgur.com/N3LYcZs.jpeg",
    tags: ["popular"],
  },
  {
    id: "20",
    name: "Snowglobe",
    price: 7.99,
    imgURL: "https://i.imgur.com/sV5pINr.jpeg",
    tags: ["holiday"],
  },
  {
    id: "21",
    name: "Santa Hat",
    price: 9.99,
    imgURL: "https://i.imgur.com/DxTY4yZ.png",
    tags: ["holiday"],
  },
  {
    id: "22",
    name: "Creepy Elf",
    price: 12.49,
    imgURL: "https://i.imgur.com/7bfhDBU.jpeg",
    tags: ["holiday"],
  },
  {
    id: "30",
    name: "XBox One S",
    price: 4999.99,
    imgURL: "https://i.imgur.com/4SSxcSA.jpeg",
    tags: ["gift"],
  },
  {
    id: "31",
    name: "Paper Weights",
    price: 3.49,
    imgURL:
      "https://i.pinimg.com/originals/9c/ae/53/9cae53a5572f1a8f3dfed279a341e1fe.jpg",
    tags: ["gift"],
  },
  {
    id: "32",
    name: "Roomba",
    price: 86.39,
    imgURL:
      "https://i.pcmag.com/imagery/reviews/01hmxcWyN13h1LfMglNxHGC-1..v1589573902.jpg",
    tags: ["gift"],
  },
]

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
