import React, { Component } from 'react'
import{
    Button,
    Input,
    Form,
}
from 'reactstrap'
import { Link } from 'react-router-dom'

 class login extends Component {
     state ={
         email: '',
         password: ''

     }
     handleSubmit = (e) => {
        e.preventDefault(); 
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        sessionStorage.setItem ('@milvus/password', password);
        sessionStorage.setItem('@milvus/email', email);
        window.location.reload();
      }
    
      handleLogout = () => {
        localStorage.removeItem('@welcome-app/username');
        window.location.reload();
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
                            <label htmlForm="password">Password</label>
                            <Input  placeholder="Senha" type="password" id="password" onChange={this.handleChange}/>   
                        </div>
                        <div className="input-field">
                            <button className="btn btn-danger mt-3 mb-3 ">Login</button>
                            <a href ="/cadastro"className="btn btn-danger mt-3 mb-3 ml-5">Cadastro</a>
                            
                            
                        </div>
                 </Form>
            </div>
        )
    }
}



export default login
