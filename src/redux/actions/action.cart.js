import { CartActionsType} from "./actions-type";

export function addToCart(item, number) {
    return {
      type: CartActionsType.ADD_TO_CART,
      item,
      number,
    };
}