import { CartActionsType } from "../actions/actions-type";

const INITIAL_STATE = {
    addedItems: [],
    total: 0,
    quantityItems:0,
    cep:0,
    valorFrete:0,
    diasEntrega:0,
};

export default function pedido(state = INITIAL_STATE, action) {
    const { addedItems, quantityItems } = state;
    console.log(addedItems.length)
    switch (action.type) {
        case CartActionsType.ADD_TO_CART: {
            let addedItem = action.item;
            //Verificando se existem ocorrencia no addItems
            let existed_item = addedItems.find(item => action.item.idProduto === item.idProduto);
            if (existed_item) 
            {
                addedItem.quantity += action.number           
              
                return {
                    ...state,
                    total: state.total + addedItem.valorUnitario*action.number,
                    quantityItems: state.quantityItems + action.number,
                }
            }else{
                addedItem.quantity = action.number;
                //Calculando a Quantidade de Ítens do Mesmo Produto
                let newTotal = state.total + addedItem.valorUnitario*addedItem.quantity
                return { 
                    ...state,
                    addedItems: [...addedItems, addedItem],
                    total: newTotal ,
                    quantityItems: state.quantityItems + addedItem.quantity,
                }

            }
           
        }

        //Removendo Todos Os Ítems
        case CartActionsType.REMOVE_ITEM: {            

            let itemToRemove= state.addedItems.find(item=> action.id === item.idProduto)
            let new_items = state.addedItems.filter(item=> action.id !== item.idProduto)
            //calculating the total
            let newTotal = state.total - (itemToRemove.valorUnitario * itemToRemove.quantity )
         
            return{
                ...state,
                addedItems: new_items,
                total: newTotal,
                quantityItems: state.quantityItems - itemToRemove.quantity,
            }
        }
        default:
            return state;
    }
}