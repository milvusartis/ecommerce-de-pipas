import react, { Component } from "react";


class Sair extends Component{

    constructor() {
        super();
        this.state ={

            user: {},
        }
    }

    componentDidmount(){
        const token = localStorage.getItem('token');
        fetch('http://localhost:8080/api/ecommerce/cliente', {headers: new Headers({'Authorization': `Bearer ${token}` })})
        .then(response =>{
            if(response.ok){
                return response.json();
            }
            throw new Error("Oops! Ocorreu um erro.")
        })
        .then(user => this.setState({user}))
        .catch(e => console.log(e));
    }
}
export default Sair;