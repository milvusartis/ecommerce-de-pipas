import { CartActionsType } from "../actions/actions-type";

const INITIAL_STATE = {
    novoproduto: {}
};

export default function pedido(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CartActionsType.ADD_TO_CART:
            Object.assign(state.novoproduto,action.produto)
            // console.log(state.novoproduto)
            return state
        default:
            return state;
    }
}

// export default function pedido(state = INITIAL_STATE, action) {
//     switch (action.type) {
//         case CartActionsType.ADD_TO_CART:
//             console.log(action.produto)
//             return { ...state, novoproduto: action.produto }
//         default:
//             console.log("a")
//             return state;
//     }
// }