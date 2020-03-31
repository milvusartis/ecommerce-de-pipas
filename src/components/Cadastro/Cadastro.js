import React, { useState} from 'react';


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
                <input type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={e => setName(e.target.value)}
                    />
                    <input type="email" 
                    placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                    placeholder="Senha"
                    type="password"
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                    />
                    <input type="text" 
                    placeholder="Cpf"
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                    />
                    <input type="text" 
                    placeholder="Rg"
                    value={rg}
                    onChange={e => setRg(e.target.value)}
                    />
                    <input 
                    placeholder="Telefone"
                    type="tel"
                    value={telefone}
                    onChange={e => setTelefone(e.target.value)}
                    />
                    <input 
                    placeholder="Rua"
                    value={rua}
                    onChange={e => setRua(e.target.value)}
                    />
                    <input type="number"
                    placeholder="Numero"
                    value={numero}
                    onChange={e => setNumero(e.target.value)}
                    />
                    <input 
                    placeholder="Complemento"
                    value={complemento}
                    onChange={e => setComplemento(e.target.value)}
                    />
                    <div>
                    <input 
                    placeholder="Bairro"
                    value={bairro}
                    onChange={e => setBairro(e.target.value)}
                    required
                    /> 
                    <input 
                    placeholder="cidade"
                    value={cidade}
                    onChange={e => setCidade(e.target.value)}
                    />
                    <input 
                    placeholder="UF"
                    value={uf}
                    onChange={e => setUf(e.target.value)}
                    />
                    </div>  
                    <input 
                    placeholder="Cep"
                    value={cep}
                    onChange={e => setCep(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
                </section>
            </div>
        </div>
    ) 
}