import React, { useState} from 'react';

import InputMask from 'react-input-mask';

import api from '../../services/api';

import { useHistory } from 'react-router-dom';

import './style.scss';


export default function Cadastro() {
    const [nome, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [rg, setRg] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cidade, setCidade] = useState('');
    const [complemento, setComplemento] = useState('');
    const [numero, setNumero] = useState('');
    const [rua, setRua] = useState('');
    const[uf, setUf] = useState('');
    const [cep, setCep] = useState('');
    const [bairro, setBairro] = useState('')

    const history = useHistory();

async function handleRegister(e){
    window.location.reload();
    e.preventDefault();

    const cliente = {
        cpf,
        rg,
        telefone,

        usuario: {
            nome,
            email,
            senhai
        },
        endereco :{
        
            cidade,
            complemento,
            numero,
            bairro,
            rua,
            uf,
            cep
        }
        
    }


    try{
        const response = await  api.post('clientes', cliente)
        alert("Cadastro realizado com sucesso");
        
        history.push("/login")

    }catch (err){
        alert('Erro no cadastro, tente novamente.')
    }
    
} 

function validarSenha(){
    let senha1 = document.getElementById('senha').value;
    let senha2 = document.getElementById('rep_senha').value;
    if (senha1 !== '' && senha2 !== ''){
    if(senha1 == senha2) {
        document.getElementById('confirmacao').style.color = '#008B45'
        document.getElementById('confirmacao').innerHTML = "Senhas conferem"
    }else{
        document.getElementById('confirmacao').style.color = '#FF6347'
        document.getElementById('confirmacao').innerHTML = "Senhas não conferem"
    }
}else{
    document.getElementById('confirmacao').style.color = ''
        document.getElementById('confirmacao').innerHTML = ''
}
}



    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <h1> Faça seu cadastro</h1>
            
                <form name="formCadastro"  onSubmit={handleRegister}>
                <input 
                type="text"
                    placeholder="Nome"
                    required
                    value={nome}
                    onChange={e => setName(e.target.value)}
                    />
                    <input type="email" 
                    placeholder="E-mail"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                    placeholder="Senha"
                    type="password"
                    onKeyUp={validarSenha}
                    id="senha"
                    required
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                    />
                    <input 
                    placeholder="Confirme a senha"
                    type="password"
                    onKeyUp={validarSenha}
                    id="rep_senha"
                    required
                    />
                    <tr>
                        <td colSpan="2">
                            <p id="confirmacao">

                            </p>
                        </td>
                    </tr>
                    <InputMask 
                    mask="999.999.999-99"
                    type="text"
                    placeholder="Cpf"
                    required
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                    />
                    <InputMask 
                    type="text" 
                    placeholder="Rg"
                    mask="99.999.999-9"
                    required
                    value={rg}
                    onChange={e => setRg(e.target.value)}
                    />
                    <InputMask
                    mask="(99) 99999-9999" 
                    placeholder="Telefone"
                    type="tel"
                    required

                    value={telefone}
                    onChange={e => setTelefone(e.target.value)}
                    />
                    <InputMask
                    mask="99-999-999"
                    placeholder="Cep"
                    required 
                    value={cep}
                    onChange={e => setCep(e.target.value)}
                    />
                    <div className="input-group">
                    <input 
                    style={{width : 290}}
                    placeholder="Rua"
                    value={rua}
                    required
                    onChange={e => setRua(e.target.value)}
                    />
                    <input 
                    style={{ width: 80}}
                    type="number"
                    placeholder="Nº"
                    required
                    value={numero}
                    onChange={e => setNumero(e.target.value)}
                    />
                    </div>
                    <div className="input-group">
                    <input 
                    style={{width : 190}}
                    placeholder="Complemento"
                    value={complemento}
                    required
                    onChange={e => setComplemento(e.target.value)}
                    />
                    <input 
                    style={{width : 180}}
                    placeholder="Bairro"
                    value={bairro}
                    onChange={e => setBairro(e.target.value)}
                    required
                    /> 
                    </div>
                    <div className="input-group">
                    <input 
                    style={{width : 290}}
                    placeholder="Cidade"
                    required
                    value={cidade}
                    onChange={e => setCidade(e.target.value)}
                    />
                    <input 
                    style={{ width: 80}}
                    placeholder="UF"
                    required
                    maxLength="2"
                    value={uf}
                    onChange={e => setUf(e.target.value)}
                    />
                    </div>  
                

                    <button className="button"  type="submit">Cadastrar</button>
                </form>
                </section>
            </div>
        </div>
    ) 
}