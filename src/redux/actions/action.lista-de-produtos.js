import {ListaDeProdutosActionsType} from './actions-type';

const produtoActions = {
  getAll: produtos => ({
    payload: produtos,
    type: ListaDeProdutosActionsType.GET_ALL,
  }),
  requestGetAll: produtos => ({
    payload: produtos,
    type: ListaDeProdutosActionsType.PRODUTOS_REQUEST_GET_ALL,
  }),
  
}

export {produtoActions}
  
