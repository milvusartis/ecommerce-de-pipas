import React, { Component } from 'react';

import {changeUser} from '../../redux/actions/action.user';

import {connect} from 'react-redux';

import { Link } from "react-router-dom";


import { MdAccountCircle } from 'react-icons/md';

import Badge from 'react-bootstrap/Badge'



class LoginBadge extends Component {

    
    render() {
        console.log(this.props)
        return (
            <>

                {this.props.usuario != null ? (

                    <>
                        <Link title="Fazer logout" to="/logout">
                            <Badge pill variant="" className="badge login logado"><MdAccountCircle /></Badge>{' '}
                        </Link>
                        <span className="user">Olá, {this.props.usuario.email}</span>

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
    }
}
export default connect(state => ({usuario: state.userReducer.user}))(LoginBadge)
