import { ProductActionsTypes } from "../actions/actions-type";

const INITIAL_STATE = {

    produtos: [],

};



export default function listaDeProdutosReducer(state = INITIAL_STATE, action) {
      const data = action.payload;
      console.log(data)
    const { payload, type } = action;

    switch (type) {
        case ProductActionsTypes.GET_ALL:
            return { state, produtos: payload }
        default:
            return state;
    }
}