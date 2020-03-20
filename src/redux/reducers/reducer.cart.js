import { CartActionsType } from "../actions/actions-type";

const INITIAL_STATE = {
    novoproduto: {}
};



export default function carrinhoReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CartActionsType.ADD_TO_CART:
            return { ...state, novoproduto: action.produto }
        default:
            return state;
    }

}