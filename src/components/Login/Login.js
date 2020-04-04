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


    async function handleLogin(e){
        e.preventDefault();
        sessionStorage.setItem("credenciais", JSON.stringify({"username":email, "password":senha}))


        api.get('/auth/token', {
        
        }).then((response => {
            sessionStorage.setItem("usuario", JSON.stringify(response.data))
            window.location.reload();
            history.push("/")

        
        })).catch((error) => {
            if (401 === error.response.status){
                return alert("Usuário ou senha não conferem");
        }
            alert("Erro não esperado");
        });
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
                    value={senha}
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