import { CartActionsType } from "./actions-type";

const CartActions = {

addToCart: (item, number) => ({
    type: CartActionsType.ADD_TO_CART,
    item,
    number,
  }),
}
export { CartActions }