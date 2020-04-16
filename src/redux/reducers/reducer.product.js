import { ProductActionsTypes } from "../actions/actions-type";

const INITIAL_STATE = {
    produtos: [
        {
            "codigo": 1,
            "nome": "Pipa Grande Colorida",
            "descricao": "Pipa colorida",
            "imagem": "https://i.ibb.co/SvxNRNy/pipa-box.png",
            "valor": 40.5,
            "disponibilidade": false,
            "categoria": {
                "codigo": 1,
                "descricao": "Pipa"
            }
        },
        {
            "codigo": 2,
            "nome": "Pipa Media Colorida",
            "descricao": "Pipa Beneficente",
            "imagem": "https://i.ibb.co/rsvK81S/pipa-flex.png",
            "valor": 45.5,
            "disponibilidade": true,
            "categoria": {
                "codigo": 1,
                "descricao": "Pipa"
            }
        },
        {
            "codigo": 33,
            "nome": "Pipa Capucheta",
            "descricao": "Pipa estilizada",
            "imagem": "https://i.ibb.co/xsGBZVK/pipa-neon.png",
            "valor": 50.0,
            "disponibilidade": true,
            "categoria": {
                "codigo": 1,
                "descricao": "Pipa"
            }
        },
        {
            "codigo": 35,
            "nome": "Pipa Capucheta",
            "descricao": "Pipa estilizada",
            "imagem": "https://i.ibb.co/Db0Z0SM/pipa-rocket.png",
            "valor": 50.0,
            "disponibilidade": true,
            "categoria": {
                "codigo": 1,
                "descricao": "Pipa"
            }
        },
        {
            "codigo": 36,
            "nome": "Papel de Seda",
            "descricao": "Pipa estilizada",
            "imagem": "https://i.ibb.co/gm89jkL/papeldeseda.png",
            "valor": 50.0,
            "disponibilidade": true,
            "categoria": {
                "codigo": 2,
                "descricao": "Papel"
            }
        },
        {
            "codigo": 37,
            "nome": "Mini Carretilha",
            "descricao": "Carretilha",
            "imagem": "https://i.ibb.co/QjgpzmJ/minicarretilha.png",
            "valor": 50.0,
            "disponibilidade": true,
            "categoria": {
                "codigo": 3,
                "descricao": "Carretilha"
            }
        },
        {
            "codigo": 38,
            "nome": "Carretilha com linha",
            "descricao": "Carretilha",
            "imagem": "https://i.ibb.co/h1GkxYP/carretilhacomlinha.png",
            "valor": 50.0,
            "disponibilidade": true,
            "categoria": {
                "codigo": 3,
                "descricao": "Carretilha"
            }
        },
        {
            "codigo": 39,
            "nome": "Linha",
            "descricao": "Linha",
            "imagem": "https://i.ibb.co/3Y906L3/linha10.png",
            "valor": 50.0,
            "disponibilidade": true,
            "categoria": {
                "codigo": 4,
                "descricao": "Linha"
            }
        },
        {
            "codigo": 40,
            "nome": "Linha colorida",
            "descricao": "Linha colorida",
            "imagem": "https://i.ibb.co/C2gh325/linhacolorida.png",
            "valor": 50.0,
            "disponibilidade": true,
            "categoria": {
                "codigo": 4,
                "descricao": "Linha"
            }
        },
        {
            "codigo": 41,
            "nome": "Pipa Capucheta",
            "descricao": "Pipa estilizada",
            "imagem": "https://i.ibb.co/gjR085c/cola-PVA.pngg",
            "valor": 50.0,
            "disponibilidade": true,
            "categoria": {
                "codigo": 5,
                "descricao": "Cola"
            }
        },

    ],
    produto:
    {
        "codigo": 1,
        "nome": "Pipa Grande Colorida",
        "descricao": "Pipa elegante",
        "imagem": "https://img.pngio.com/kites-png-vector-psd-and-clipart-with-transparent-background-pipa-png-260_412.png",
        "valor": 40.5,
        "disponibilidade": false,
    },
    maxNumber: 5,//->quantidade de itens disponivel
    number: 1,//////////////////////////
    produtoAtivo: true,
};

export default function produto(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ProductActionsTypes.CHANGE_DISPLAYED_PRODUCT:
            return { ...state, produto: action.produto, produtoAtivo: false }
        case ProductActionsTypes.INCREMENT_QUANTITY:
            if (action.number > state.maxNumber - 1) {
                return { ...state, number: state.maxNumber }
            } else {
                return { ...state, number: action.number + 1 }
            }
        case ProductActionsTypes.DECREMENT_QUANTITY:
            if (action.number - 2 < 0) {
                return { ...state, number: 1 }
            } else {
                return { ...state, number: action.number - 1 }
            }
        case ProductActionsTypes.ACTIVE_CARROUSEL:
            return{...state,produtoAtivo:true}
        default:
            return state;
    }
}