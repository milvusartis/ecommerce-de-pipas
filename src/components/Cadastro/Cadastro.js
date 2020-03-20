import React, { Component } from 'react';
import './style.css';

import{
    Input,
    Form,
}
from 'reactstrap';

 class Cadastro extends Component {
     state ={
         email: '',
         password: '',
         nome: '',
         sobrenome:''

     }
     handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })

    }
    handleSubmit = (e) => {
        e.preventDefault(); 
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const nome = e.target.elements.nome.value;
        const sobrenome = e.target.elements.sobrenome.value;

        sessionStorage.setItem ('@milvus/password', password);
        sessionStorage.setItem('@milvus/email', email);
        sessionStorage.setItem('@milvus/nome',nome);
        sessionStorage.setItem('@milvus/sobrenome', sobrenome);
        window.location.reload();
      
      }
    render() {
        return (
            <div className="container d-flex justify-content-center">
                <Form onSubmit={this.handleSubmit} className="global">
                    <h5 className="grey-text text-darken-3">Cadastro</h5>
                        <div className="input-field">
                            <label htmlForm="email">Email</label>
                            <Input  placeholder="Email" type="email" id="email" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlForm="senha">Senha</label>
                            <Input  placeholder="Senha" type="password" id="password" onChange={this.handleChange}/>   
                        </div>
                        <div className="input-field">
                            <label htmlForm="email">Nome</label>
                            <Input  placeholder="Nome" type="text" id="nome" onChange={this.handleChange}/>
                        </div> <div className="input-field">
                            <label htmlForm="Sobrenome">sobrenome</label>
                            <Input  placeholder="Sobrenome" type="Sobrenome" id="sobrenome" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <button className="btn btn-danger mt-3 mb-3">Cadastrar</button>
                        </div>
                 </Form>
            </div>
        )
    }
}



export default Cadastro
