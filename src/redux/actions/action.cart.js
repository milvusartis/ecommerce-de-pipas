import { CartActionsType } from "./actions-type";

export function addToCart(produto) {
    return {
      type: CartActionsType.ADD_TO_CART,
      produto
    };
  
  }


