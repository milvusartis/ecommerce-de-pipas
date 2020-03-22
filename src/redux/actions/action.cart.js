import { CartActionsType} from "./actions-type";

export function addToCart(produto, number) {
    return {
      type: CartActionsType.ADD_TO_CART,
      produto,
      number,
    };
}