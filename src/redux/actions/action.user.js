import {UserLoginActionsType} from './actions-type';

export function changeUser(user) {
    return {
    type: UserLoginActionsType.CHANGE_USER,
    payload: user

};
}
