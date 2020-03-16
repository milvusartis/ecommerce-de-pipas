const INITIAL_STATE = {
    produto: []
};
   


export default function pedido(state = INITIAL_STATE, action) {
    console.log("Adicionei aqui"+ action.produto);




    if (action.type === 'ADD_TO_CART') {       
        return { ...state, produto: action.produto}
    }

return state;
}