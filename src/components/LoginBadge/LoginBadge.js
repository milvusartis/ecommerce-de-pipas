import React, { Component } from 'react';

import { Link } from "react-router-dom";


import { MdAccountCircle } from 'react-icons/md';

import Badge from 'react-bootstrap/Badge'



export default class LoginBadge extends Component {


    state = {
        usuario: null,
    }

    componentDidMount(){
       const usuario =  sessionStorage.getItem("usuario");
       console.log(usuario)
       this.setState({usuario:usuario})
    }


    render() {
        return (
            <>

                {this.state.usuario != null ? (

                    <>
                        <Link title="Fazer logout" to="/logout">
                            <Badge pill variant="" className="badge login logado"><MdAccountCircle /></Badge>{' '}
                        </Link>
                        <span className="user">Olá, {this.state.usuario.nome}</span>

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
