import { CartActionsType } from "../actions/actions-type";

const INITIAL_STATE = {
    produtos:  [
        {
            "idProduto": 1,
            "nome": "Pipa Grande Colorida",
            "descricao": "Pipa colorida",
            "imagem": "https://i.ibb.co/SvxNRNy/pipa-box.png",
            "valorUnitario": 40.5,
            "disponibilidade": false,
            "categoria": {
                "codigo": 1,
                "descricao": "Pipa"
            }
        },
    ]
};

export default function pedido(state = INITIAL_STATE, action) {
    console.log(action)
    switch (action.type) {
        case CartActionsType.ADD_TO_CART:
            // Object.assign(state.novoproduto,action.produto)
            // console.log(state.novoproduto)
            return { ...state, produto: action.produto }
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