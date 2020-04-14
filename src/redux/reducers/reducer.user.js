import { UserLoginActionsType } from "../actions/actions-type";

const INITIAL_STATE = {
    user: JSON.parse(sessionStorage.getItem("usuario")) || null
}

const userLoginReducer = (state = INITIAL_STATE, action) => {
    const { payload, type } = action
    console.log(action)
    switch (type) {       
        case UserLoginActionsType.CHANGE_USER:
            return { ...state, user: payload}  
        default:
            return state
    }
}

export default userLoginReducer