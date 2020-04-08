import React, { useState }from 'react';
import { Link } from "react-router-dom";
import { MdAccountCircle } from 'react-icons/md';
import Badge from 'react-bootstrap/Badge'
import { connect } from 'react-redux';

import FloatingCart from '../FloatingCart/FloatingCart';

import './LoginBadge.css';


function handleLogout() {
    sessionStorage.clear();
    localStorage.clear();
    window.location.reload();

}

const LoginBadge = ({ usuario }) => {
   

    const [isOpen, setIsOpen] = useState(false);

   const onHover = () => {
        setIsOpen(true);
    }

    const onLeave = (event) => {       
        setTimeout(() => {
            setIsOpen(false);
        }, 2000); 
    }
    
   return (



    <>

        {usuario !== null ? (

                <div className="badge-login">
                    <Link title="Fazer logout" onClick={handleLogout} to="#">
                        <Badge pill variant="" className="badge login logado" onMouseOver={(event) => onHover(event)}><MdAccountCircle /></Badge>{' '}

                        {isOpen && (
                    <span  onMouseLeave={(event) => onLeave(event)}>
                        {/* Codigo Flutuante aqui */}
                      
                    </span>

                )}


                    </Link>
                    <span className="user">Olá, {usuario.nome}</span>

                </div>

        ) : (
             
                <div className="badge-login">
                    <Link title="Olá, faça o seu login" to="/login">
                        <Badge pill variant="" className="badge login "><MdAccountCircle /></Badge>{' '}
                    </Link>
                    <span className="user">Olá, faça o seu login</span>
                    </div>
               
            )}

    </>


);
        }

const mapStateToProps = state => ({
    usuario: state.userReducer.user,

});

const mapDispatchToProps = dispatch =>
    ({

    })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginBadge);
