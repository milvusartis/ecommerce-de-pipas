import {ProductActionsTypes} from './actions-type';

export function decrement(number) {
    return {
      type: ProductActionsTypes.DECREMENTAR_QUANTIDADE,
      number
    };
  
  }


  export function increment (number) {

    return{
        type: ProductActionsTypes.INCREMENTAR_QUANTIDADE,
        number
    }
   
}


export function mudaProdutoVisivel(produto, produtoAtivo) {
    return {
      type: 'MUDAR_PRODUTO_EXIBIDO',
      produto,
      produtoAtivo,
    };
  
  }