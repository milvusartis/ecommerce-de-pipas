import { CartActionsType} from "./actions-type";

export function addToCart(item, number) {
  return {
    type: CartActionsType.ADD_TO_CART,
    item,
    number,
  };
}

export function changeCepValue(cep){
  return{
    type:CartActionsType.CHANGE_CEP_VALUE,
    cep
  };
}

export function changeFreteInfo(json){
  return{
    type:CartActionsType.CHANCE_FRETE_INFO,
    payload:json
  };
}

export function getCep(cep){
  return{
    type:CartActionsType.GET_CEP,
    cep
  };
}

const CartActions = {
  addToCart: (item, number) => ({
    type: CartActionsType.ADD_TO_CART,
    item,
    number,
  }),

  //remove item action
  removeItem: (id) => ({
    type: CartActionsType.REMOVE_ITEM,
    id
  }),

  //add qt action
  addQuantity: (id) => ({
    type: CartActionsType.ADD_QUANTITY,
    id
  }),

  //subtract qt action
  subtractQuantity: (id) => ({
    type: CartActionsType.SUB_QUANTITY,
    id
  }),
}

export { CartActions }