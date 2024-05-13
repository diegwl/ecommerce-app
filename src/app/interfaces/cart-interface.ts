import { CartProductInterface } from "./cart-product-interface";

export interface CartInterface {
  id: number,
  products: CartProductInterface[],
  total: number,
  totalProducts: number
}
