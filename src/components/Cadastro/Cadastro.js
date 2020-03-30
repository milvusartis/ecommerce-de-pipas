import React, { useState} from 'react';


import api from '../../services/api';

import './style.css';


export default function Cadastro() {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



async function handleRegister(e){
    e.preventDefault();

    const data = {
        name,
        lastname,
        email,
        password,
    };

    try{
        const response = await  api.post('cliente', data)
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
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                    <input type="text" 
                    placeholder="Sobrenome"
                    value={lastname}
                    onChange={e => setLastname(e.target.value)}
                    />
                    <input type="email" 
                    placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                    placeholder="Senha"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
                </section>
            </div>
        </div>
    ) 
}