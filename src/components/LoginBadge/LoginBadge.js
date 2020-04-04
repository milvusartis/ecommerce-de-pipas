import React from 'react';


import { Link } from "react-router-dom";


import { MdAccountCircle } from 'react-icons/md';

import Badge from 'react-bootstrap/Badge'
import { connect } from 'react-redux';



const LoginBadge = ({usuario}) => (

    <>


    {usuario !== null ? (

        <>
            <Link title="Fazer logout" to="/logout">
                <Badge pill variant="" className="badge login logado"><MdAccountCircle /></Badge>{' '}
            </Link>
            <span className="user">Olá, {usuario.nome}</span>

        </>

    ) : (
            <>
                <Link title="Olá, faça o seu login" to="/login">
                    <Badge pill variant="" className="badge login "><MdAccountCircle /></Badge>{' '}
                </Link>
                <span className="user">Olá, faça o seu login</span>

            </>
        )}


</>


);

const mapStateToProps = state => ({
    ...state,
    usuario: state.userReducer.user, 

});

const mapDispatchToProps = dispatch =>
({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginBadge);
