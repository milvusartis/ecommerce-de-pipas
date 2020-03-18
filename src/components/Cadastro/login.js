import React, { Component } from 'react';
import './style.css';
import{
    Button,
    Input,
    Form,
    Container
    
}
from 'reactstrap'

 class login extends Component {
     state ={
         email: '',
         senha: ''

     }
     handleChange = (e) =>{
         this.setState({
            [e.target.id]: e.target.value
         })

     }
     handleSubmit = (e) =>{
        e.preventDefault();
     }
    render() {
        return (
            <div className="container d-flex justify-content-center">
                <Form onSubmit={this.handleSubmit} className="global">
                    <h5 className="grey-text text-darken-3">Login</h5>
                        <div className="input-field">
                            <label htmlForm="email">Email</label>
                            <Input  placeholder="Email" type="email" id="email" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlForm="senha">Senha</label>
                            <Input  placeholder="Senha" type="senha" id="senha" onChange={this.handleChange}/>   
                        </div>
                        <div className="input-field">
                            <Button className="btn btn-danger mt-3 mb-3 ">Login</Button>
                            <Button href="/cadastro"className="btn btn-danger mt-3 mb-3 ml-5">Cadastro</Button>
                            
                        </div>
                 </Form>
            </div>
        )
    }
}



export default login
