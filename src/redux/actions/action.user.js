import { UserLoginActionsType } from './actions-type';


const userAcions = {
    changeUser: user => ({
        type: UserLoginActionsType.CHANGE_USER,
        payload: user
    }),
    requestChangerUser: ()=>({
        payload: null,
        type: UserLoginActionsType.REQUEST_CHANGE_USER
    })

}
export { userAcions }

