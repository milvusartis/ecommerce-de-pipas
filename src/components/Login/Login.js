import React, { Component } from 'react'
import './styles.css';
import{
    Button,
    Input,
    Form,
    Alert,
}
from 'reactstrap'


 class login extends Component {
     constructor (props){
         super(props)
         console.log(this.props)
         this.state ={
             message : this.props.location.state? this.props.location.state.message: '',
         };
     }

     sigIn = () => {
         const data ={email: this.email, password: this.password};
         const requestInfo = {
             method: 'POST',
             body: JSON.stringify(data),
             headers: new Headers({
                 'Content-type': 'application/json'
             })
         }
     
     fetch('http://localhost:8080/api/ecommerce/cliente', requestInfo)
     .then(response =>{
         if(response.ok){
             return response.json()
         }
         throw new Error("Login invalido...");
     })
     .then(token => {
        localStorage.setItem('token', token);
        this.props.history.push("/checkout");
        return;
     })
     .catch(e =>{
         this.setState({message: e.message})
     });
    }
    render() {
        return (
            <div className="container d-flex justify-content-center entrar">
                <Form className="form" >
                    {
                        this.state.message !== ''?(
                        <Alert color="danger">{this.state.message}</Alert>
                        ) : ''
                    }
                    <hr className="my-3"/>
                    <h5 className="grey-text text-darken-3">Login</h5>
                        <div className="input-field">
                            <label htmlForm="email">Email</label>
                            <Input  placeholder="Email" type="email" id="email" onChange={e => this.email = e.target.value}/>
                        </div>
                        <div className="input-field">
                            <label htmlForm="password">Password</label>
                            <Input  placeholder="Senha" type="password" id="password" onChange={e => this.password = e.target.value}/>   
                        </div>
                        <div className="input-field">
                            <Button className="btn btn-danger mt-3 mb-3 " onClick={this.sigIn}>Login</Button>
                            <a href ="/cadastro"className="btn btn-danger mt-3 mb-3 ml-5">Cadastro</a>
                            <div>
                                <Button to='/logout' color="success">Sair</Button>
                            </div>
                            
                            
                        </div>
                 </Form>
            </div>
        )
    }
}



export default login
