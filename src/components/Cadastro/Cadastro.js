import React, { useState} from 'react';

import InputMask from 'react-input-mask';

import api from '../../services/api';

import './style.css';


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


async function handleRegister(e){
    e.preventDefault();

    const cliente = {
        cpf,
        rg,
        telefone,

     usuario: {
            nome,
            email,
            senha
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
    }catch (err){
        alert('Erro no cadastro, tente novamente.')
    }
    
}
 




    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <h1> Faça seu cadastro</h1>
            
                <form onSubmit={handleRegister}>
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
                    id="senha"
                    required
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                    />
                    <input 
                    placeholder="Confirme a senha"
                    type="password"
                    id="senha1"
                    required
                    />
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
                 

                    <button className="button" type="submit">Cadastrar</button>
                </form>
                </section>
            </div>
        </div>
    ) 
}