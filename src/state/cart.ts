import { atom } from "recoil";

export type CartItem = {
    productID: string
    price: number
    quantity: number
}

export const cartState = atom<CartItem[]>({
    key: 'cartState',
    default: []
})