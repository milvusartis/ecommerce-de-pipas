import { ListaDeProdutosActionsType } from "../actions/actions-type";

const INITIAL_STATE = {
    produtos: [
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