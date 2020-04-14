import React , {useState
} from 'react';
import './styles.scss'
import { Link, useHistory } from 'react-router-dom'

import milvus_logo from '../header/image/milvus_logo.svg'

import api from '../../services/api'
import { connect } from 'react-redux';

import {userAcions} from '../../redux/actions/action.user'


const Login = ({changeUser}) => {
    const [email, setEmail ] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();

  
  
      async function handleLogin(e){
          e.preventDefault();
  
          api.post('/login', {
              email:email,
              senha:senha
              
          
          }).then((response => {
              // const credenciais = btoa({"authorization":response.headers.authorization})
              // sessionStorage.setItem("credenciais", JSON.stringify(credenciais))
          
              sessionStorage.setItem("token", JSON.stringify(response.headers.authorization));
              changeUser();
  
              history.push("/")
              // window.location.reload();
  
          
          })).catch((error) => {
              if (401 === error.response.status){
                  return alert("Usuário ou senha não conferem");
          }
          console.log(error)
              // alert("Erro não esperado");
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

};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>({
    changeUser: () => dispatch(userAcions.requestChangerUser()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);