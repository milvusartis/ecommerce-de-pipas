import {ProductActionsTypes} from './actions-type';

export function diminuirQuantidade(number) {
    return {
      type: ProductActionsTypes.INCREASE_QUANTITY,
      number
    };
  
  }


  export function aumentarQuantidade (number) {

    return{
        type: ProductActionsTypes.INCREMENTAR_QUANTIDADE,
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