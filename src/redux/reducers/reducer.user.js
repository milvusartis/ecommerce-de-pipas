import { UserLoginActionsType } from "../actions/actions-type";

const INITIAL_STATE = {
    user: {email: 'teste@teste.com', senha: '12345'},
}

const userLoginReducer = (state = INITIAL_STATE, action) => {
    const { payload, type } = action
    switch (type) {       
        case UserLoginActionsType.CHANGE_USER:
            return { ...state, user: payload}  
        default:
            return state
    }
}

export default userLoginReducer