import { CartActionsType } from "../actions/actions-type";

const INITIAL_STATE = {
    // items: [
    //     {
    //         "idProduto": 1,
    //         "nome": "Pipa Grande Colorida",
    //         "descricao": "Pipa colorida",
    //         "imagem": "https://i.ibb.co/SvxNRNy/pipa-box.png",
    //         "valorUnitario": 40.5,
    //         "disponibilidade": false,
    //         "categoria": {
    //             "codigo": 1,
    //             "descricao": "Pipa"
    //         }
    //     },
    // ],
    addedItems: [],
    total: 0
};

export default function pedido(state = INITIAL_STATE, action) {
    const { addedItems } = state;
    console.log(addedItems.length)
    switch (action.type) {
        case CartActionsType.ADD_TO_CART: {
            let addedItem = action.item;
            //Verificando se existem ocorrencia no addItems
            let existed_item = addedItems.find(item => action.item.idProduto === item.idProduto);
            if (existed_item) 
            {
                addedItem.quantity += 1
                return {
                    ...state,
                    total: state.total + addedItem.valorUnitario
                }
            }else{
                addedItem.quantity = 1;
                //calculating the total
                let newTotal = state.total + addedItem.valorUnitario 
                return { 
                    ...state,
                    addedItems: [...addedItems, addedItem],
                    total: newTotal 
                }

            }
           
        }
        default:
            return state;
    }
}