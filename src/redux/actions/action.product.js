import {ProductActionsTypes} from './actions-type';

export function activeCarrousel(){
  return{
    type:ProductActionsTypes.ACTIVE_CARROUSEL
  };
}

export function decrementQuantity(number) {
  return {
    type: ProductActionsTypes.DECREMENT_QUANTITY,
    number
  };
}

export function incrementQuantity (number) {
  return{
      type: ProductActionsTypes.INCREMENT_QUANTITY,
      number
  }
}

export function changeDisplayedProduct(produto, produtoAtivo) {
  return {
    type: ProductActionsTypes.CHANGE_DISPLAYED_PRODUCT,
    produto,
    produtoAtivo,
  };
}


export function requestProductList(text) {
  return {
    type: ProductActionsTypes.REQUEST_PRODUCT_LISt,
  }
}