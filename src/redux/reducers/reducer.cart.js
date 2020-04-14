import { CartActionsType } from "../actions/actions-type";

const carrinho = {
    addedItems: [],
    total: 0,
    quantityItems: 0,
    cep: 0,
    valorFrete: '',
    diasEntrega: '',
    idPedido: ''
}

const INITIAL_STATE = JSON.parse(sessionStorage.getItem("carrinho")) || carrinho;

function pedido(state = INITIAL_STATE, action) {
    const { addedItems } = state;
    let newState = state
    switch (action.type) {
        case CartActionsType.ADD_TO_CART: {
            let addedItem = action.item;
            //Verificando se existem ocorrencia no addItems
            let existed_item = addedItems.find(item => action.item.idProduto === item.idProduto);
            if (existed_item) {
                addedItem.quantity += action.number
                newState = {
                    ...newState,
                    total: state.total + addedItem.valorUnitario * action.number,
                    quantityItems: state.quantityItems + action.number,
                }

            } else {
                addedItem.quantity = action.number;
                //Calculando a Quantidade de Ítens do Mesmo Produto
                let newTotal = state.total + addedItem.valorUnitario * addedItem.quantity
                newState = {
                    ...newState,
                    addedItems: [...addedItems, addedItem],
                    total: newTotal,
                    quantityItems: state.quantityItems + addedItem.quantity,

                }
            }
            break;
        }

        //Removendo Todos Os Ítems
        case CartActionsType.REMOVE_ITEM: {
            let itemToRemove = state.addedItems.find(item => action.id === item.idProduto)
            let new_items = state.addedItems.filter(item => action.id !== item.idProduto)
            //calculating the total
            let newTotal = state.total - (itemToRemove.valorUnitario * itemToRemove.quantity)

            newState = {
                ...newState,
                addedItems: new_items,
                total: newTotal,
                quantityItems: state.quantityItems - itemToRemove.quantity,
            }
            break;
        }

        //Somando Quantidade
        case CartActionsType.ADD_QUANTITY: {
            let addedItem = state.addedItems.find(item => item.idProduto === action.id)
            addedItem.quantity += 1
            let newTotal = state.total + addedItem.valorUnitario
            newState = {
                ...newState,
                total: newTotal,
                quantityItems: state.quantityItems + 1,
            }
            break;
        }

        //Reduzindo quantidade 
        case CartActionsType.SUB_QUANTITY: {
            let addedItem = state.addedItems.find(item => item.idProduto === action.id)
            //if the qt == 0 then it should be removed
            if (addedItem.quantity === 1) {
                let new_items = state.addedItems.filter(item => item.idProduto !== action.id)
                let newTotal = state.total - addedItem.valorUnitario
                newState = {
                    ...newState,
                    addedItems: new_items,
                    total: newTotal,
                    quantityItems: state.quantityItems - 1,
                }
            }
            else {
                addedItem.quantity -= 1
                let newTotal = state.total - addedItem.valorUnitario
                newState = {
                    ...newState,
                    total: newTotal,
                    quantityItems: state.quantityItems - 1,
                }
            }
            break;
        }
        case CartActionsType.CHANGE_CEP_VALUE: {
            newState = { ...newState, cep: action.cep }
            break;
        }
        case CartActionsType.CHANCE_FRETE_INFO: {
            if (action.payload.data.erro === true) {
                newState = { ...newState, valorFrete: '', diasEntrega: '' }
            } else {
                if (action.payload.data.uf === "SP") {
                    newState = { ...newState, valorFrete: 4, diasEntrega: 3 }
                } else {
                    newState = { ...newState, valorFrete: 8, diasEntrega: 6 }
                }
            }
            break;
        }
        case CartActionsType.GRAVA_PEDIDO: {
            newState = { ...newState, idPedido: action.pedido }
            break;
        }
    }
    localStorage.setItem("carrinho", JSON.stringify(newState))
    return newState;
}
export default pedido;