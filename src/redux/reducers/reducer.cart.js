import { CartActionsType } from "../actions/actions-type";

const INITIAL_STATE = {
    novoproduto: {}
};
   


export default function pedido(state = INITIAL_STATE, action) {
    console.log(action.produto);
    console.log(action.type);
    if (action.type === CartActionsType.ADD_TO_CART) {       
        return { ...state, novoproduto : action.produto}
    }

return state;
}