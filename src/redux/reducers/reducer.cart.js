import { CartActionsType } from "../actions/actions-type";

const INITIAL_STATE = {
    items: [
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
    ],
    addedItems:[],
    total: 0
};

export default function pedido(state = INITIAL_STATE, action) {
    const {addedItems} = state;
    console.log(addedItems.length)
    switch (action.type) {
        case CartActionsType.ADD_TO_CART:
            // Object.assign(state.novoproduto,action.produto)
            // console.log(state.novoproduto)
            return { ...state, addedItems: [...addedItems, action.item]}
        default:
            return state;
    }
}