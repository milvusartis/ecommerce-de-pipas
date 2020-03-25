import { CartActionsType } from "./actions-type";

const CartActions = {

addToCart: (item, number) => ({
    type: CartActionsType.ADD_TO_CART,
    item,
    number,
  }),

  //remove item action
removeItem: (id)=>({
      type: CartActionsType.REMOVE_ITEM,
      id
  }),

}
export { CartActions }