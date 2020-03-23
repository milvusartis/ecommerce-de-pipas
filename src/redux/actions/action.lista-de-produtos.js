import {ListaDeProdutosActionsType} from './actions-type';

const listaDeProdutoActions = {
  getALL: produtos => ({
      payload: produtos,
      type: ListaDeProdutosActionsType.PRODUTOS_GET_ALL
  }),
  requestGetAll: () => ({
      payload: null,
      type: ListaDeProdutosActionsType.PRODUTOS_REQUEST_GET_ALL
  })
}

export {listaDeProdutoActions}