import { createStore } from 'redux';


const INITIAL_STATE = {

    produtos: [
        {
            "codigo": 1,
            "nome": "Pipa Grande Colorida",
            "descricao": "Pipa colorida",
            "imagem": "https://imagensemoldes.com.br/wp-content/uploads/2017/12/Imagem-Pipa-em-png-e-pdf-edit%C3%A1vel.png",
            "valor": 40.5,
            "disponibilidade": false,
            "categoria": {
                "codigo": 1,
                "descricao": "Linha"
            }
        },
        {
            "codigo": 2,
            "nome": "Pipa Media Colorida",
            "descricao": "Pipa Beneficente",
            "imagem": "https://s3.amazonaws.com/sample-login/companies/avatars/000/004/570/original/pipa.png",
            "valor": 45.5,
            "disponibilidade": true,
            "categoria": {
                "codigo": 2,
                "descricao": "Lata"
            }
        },
        {
            "codigo": 33,
            "nome": "Pipa Capucheta",
            "descricao": "Pipa estilizada",
            "imagem": "https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Summer-Vacation-PNG/Kite_Transparent_PNG_Clip_Art.png",
            "valor": 50.0,
            "disponibilidade": true,
            "categoria": {
                "codigo": 65,
                "descricao": "Pipa"
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
   
    date: {},
    day: {},
    maxNumber: 5,//->quantidade de itens disponivel
    number: 1,//////////////////////////
    cep: {},////////////////////////////
    deliveryCost: {},//////////////////
    cidade:{},
    estado:{},
    produtoAtivo: true,   

};


function reducer(state = INITIAL_STATE, action) {
    console.log(action);
    if (action.type === 'MUDAR_PRODUTO_EXIBIDO') {       
        return { ...state, produto: action.produto, produtoAtivo: !action.produtoAtivo }
    }else if ( action.type ==='INCREMENTAR_QUANTIDADE'){
            console.log("AUMENTEIIIIIII")
    }else if ( action.type ==='DECREMENTAR_QUANTIDADE'){
        console.log("DECREMENTEI")
}


    return state;
}

const store = createStore(reducer);

export default store;