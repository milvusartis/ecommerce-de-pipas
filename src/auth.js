import {Route, Redirect} from 'react-router-dom';
import React from 'react';


const isAuth = () => {
    if(localStorage.getItem('token') !== null) {
        return true
    }
    return false;
};

const PrivateRoute = ({component: Component, ...rest})=> {
    return (
        <Route 
            {...rest}
            render={props =>
            isAuth() ? (
                <Component {...props} />
            ): (
                <Redirect
                to={{
                    pathname: '/',
                    state: {message: 'Usuário não autorizado'}
                }}
                />
            )}
        />
    );
}
export default PrivateRoute;