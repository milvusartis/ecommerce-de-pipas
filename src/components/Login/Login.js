import React , {useState
} from 'react';
import './styles.css'
import { Link, useHistory } from 'react-router-dom'

import milvus_logo from '../header/image/milvus_logo.svg'

import api from '../../services/api'

export default function Login() {
    const [email, setEmail ] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();

    const data ={
        email,
        senha,
    }

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('session', { data });

            localStorage.setItem('userEmail', email)
            localStorage.setItem('userSenha', senha)

            history.push('/');

        }catch (err){
            alert('Falha no login, tente novamente')
        }
    }



    return (
        <div className="logon-container">
             <div className="content">
            <section className="form">
                <img src={milvus_logo} title="Milvus Arts" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>

                    <input 
                    placeholder="Email" 
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                    />
                    <input 
                    placeholder="Senha" 
                    type="password"
                    value={senha, setSenha}
                    onChange={e => setSenha(e.target.value)} 
                    />
                    
                    

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