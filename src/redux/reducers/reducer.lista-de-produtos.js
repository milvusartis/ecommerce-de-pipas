import { ListaDeProdutosActionsType } from "../actions/actions-type";

const INITIAL_STATE = {
    produtos: []
}

const listaDeProdutosReducer = (state = INITIAL_STATE, action) => {
    const { payload, type } = action
  
    switch (type) {       
        case ListaDeProdutosActionsType.PRODUTOS_GET_ALL:
            return { ...state, produtos: payload}       
        default:
            return state
    }
}


export default listaDeProdutosReducer 