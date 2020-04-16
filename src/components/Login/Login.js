import React, {
    useState
} from 'react';
import './styles.scss'
import { Link, useHistory } from 'react-router-dom'
// import { FiLogIn, FiArrowLeft} from 'react-icons/fi';

import milvus_logo from '../header/image/milvus_logo.svg'

import api from '../../services/api'
import { connect } from 'react-redux';

import { userAcions } from '../../redux/actions/action.user'

import { toast } from "react-toastify";



const Login = ({ changeUser }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isForgot, setIsForgot] = useState(false);
    const history = useHistory();

   const handleContainer = ()=>{
       setIsForgot(!isForgot);
   }


    async function handleLogin(e) {
        e.preventDefault();

        api.post('/login', {
            email: email,
            senha: senha

        }).then((response => {
            sessionStorage.setItem("token", JSON.stringify(response.headers.authorization));
            changeUser();
            history.push("/")
        }))
    }


    async function generateNewPassword(e) {
        e.preventDefault();

        api.post('/auth/forgot', {
            email: email,

        }).then((response => {
            sessionStorage.clear();
            toast.success("Nova senha enviada para o email");
           handleContainer();
        }))
    }
    return (
        <div className="logon-container">

            <div className="content">
                <section className="form">
                    <img src={milvus_logo} title="Milvus Arts" />

                    {isForgot ? (
                        <>
                            <form onSubmit={generateNewPassword}>
                                <h1>Me envie uma nova senha</h1>

                                <input
                                    placeholder="Email"
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />


                                <button className="button" type="submit">Gerar nova senha</button>

                                <span className="back-link" onClick={handleContainer}>
                                    {/* <FiArrowLeft size={16}/> */}
                                    lembrei a senha
                                 </span>

                            </form>
                        </>) : (
                            <>
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
                                    {sessionStorage.getItem("msg") && (
                                        <span className="back-link" onClick={handleContainer}>
                                            Esqueci a senha
                                        </span>
                                    )}
                                </form>
                            </>
                        )}
                </section>
            </div>
        </div>
    )

};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    changeUser: () => dispatch(userAcions.requestChangerUser()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);