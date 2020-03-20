import {ListaDeProdutosActionsType} from './actions-type';

const listaDeProdutoActions = {
  getALL: produtos => ({
      payload: produtos,
      type: ListaDeProdutosActionsType.PRODUTOS_GET_ALL
  }),
  requestGetAll: () => ({
      payload: null,
      type: ListaDeProdutosActionsType.RODUTOS_REQUEST_GET_ALL
  })
}

export {listaDeProdutoActions}