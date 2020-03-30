import { CartActionsType } from "../actions/actions-type";

const INITIAL_STATE = {
    addedItems: [],
    total: 0,
    quantityItems: 0,
    cep: 0,
    valorFrete:'',
    diasEntrega:'',
};

export default function pedido(state = INITIAL_STATE, action) {
    const { addedItems } = state;
    switch (action.type) {
        case CartActionsType.ADD_TO_CART: {
            let addedItem = action.item;
            //Verificando se existem ocorrencia no addItems
            let existed_item = addedItems.find(item => action.item.idProduto === item.idProduto);
            if (existed_item) {
                addedItem.quantity += action.number
                return {
                    ...state,
                    total: state.total + addedItem.valorUnitario * action.number,
                    quantityItems: state.quantityItems + action.number,
                }
            } else {
                addedItem.quantity = action.number;
                //Calculando a Quantidade de Ítens do Mesmo Produto
                let newTotal = state.total + addedItem.valorUnitario * addedItem.quantity
                return {
                    ...state,
                    addedItems: [...addedItems, addedItem],
                    total: newTotal,
                    quantityItems: state.quantityItems + addedItem.quantity,
                }
            }
        }

        //Removendo Todos Os Ítems
        case CartActionsType.REMOVE_ITEM: {
            let itemToRemove = state.addedItems.find(item => action.id === item.idProduto)
            let new_items = state.addedItems.filter(item => action.id !== item.idProduto)
            //calculating the total
            let newTotal = state.total - (itemToRemove.valorUnitario * itemToRemove.quantity)

            return {
                ...state,
                addedItems: new_items,
                total: newTotal,
                quantityItems: state.quantityItems - itemToRemove.quantity,
            }
        }

        //Somando Quantidade
        case CartActionsType.ADD_QUANTITY: {
            let addedItem = state.addedItems.find(item=> item.idProduto === action.id)
            addedItem.quantity += 1 
            let newTotal = state.total + addedItem.valorUnitario
            return{
                ...state,
                total: newTotal,
                quantityItems: state.quantityItems + 1,
            }
        }

        //Reduzindo quantidade 
        case CartActionsType.SUB_QUANTITY: {
            let addedItem = state.addedItems.find(item => item.idProduto === action.id)
            //if the qt == 0 then it should be removed
            if (addedItem.quantity === 1) {
                let new_items = state.addedItems.filter(item => item.idProduto !== action.id)
                let newTotal = state.total - addedItem.valorUnitario
                return {
                    ...state,
                    addedItems: new_items,
                    total: newTotal,
                    quantityItems: state.quantityItems - 1,
                }
            }
            else {
                addedItem.quantity -= 1
                let newTotal = state.total - addedItem.valorUnitario
                return {
                    ...state,
                    total: newTotal,
                    quantityItems: state.quantityItems - 1,
                }
            }

        }
        case CartActionsType.CHANGE_CEP_VALUE:
            return {...state,cep:action.cep}

        case CartActionsType.CHANCE_FRETE_INFO:
            if(action.payload.data.erro===true){
                return{...state,valorFrete:'',diasEntrega:''}
            }else{
                if(action.payload.data.uf==="SP"){
                    return{...state,valorFrete:4,diasEntrega:3}
                }else{
                    return{...state,valorFrete:8,diasEntrega:6}
                }
            }
        default:
            return state;
    }
}