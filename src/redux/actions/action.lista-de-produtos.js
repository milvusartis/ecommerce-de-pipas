import {ListaDeProdutosActionsType} from './actions-type';

const produtoActions = {
  getAll: produtos => ({
    payload: produtos,
    type: ListaDeProdutosActionsType.GET_ALL,
  })
  
}

export {produtoActions}
  
