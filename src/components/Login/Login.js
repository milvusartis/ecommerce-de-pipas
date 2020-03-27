import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom'

import milvus_logo from '../header/image/milvus_logo.svg'


export default function Login() {
    return (
        <div className="logon-container">
             <div className="content">
            <section className="form">
                <img src={milvus_logo} title="Milvus Arts" />

                <form>
                    <h1>Faça seu login</h1>

                    <input placeholder="Email" type="email" />
                    <input placeholder="Senha" type="password" />

                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/cadastro">
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            </div>
        </div>
    )
}