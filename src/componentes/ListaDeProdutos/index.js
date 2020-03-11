import React, { Component } from 'react';
import axios from 'axios';
import './Produtos.css';

import {
  Col, Row, Container,
} from 'reactstrap';
import Produto from '../../componentes/Produto';


export default class ListaDeProdutos extends Component {

  state = {
    produtos: []
}

constructor(props){
  super(props); 
}

listarproduto = async (evento) => {         
  // alert("Teste")       
  evento.preventDefault();

  const produtos = await axios(`http://localhost:8080/ecommerce/produto?descricao=Dorflex`);
  this.setState({ produtos: [produtos.data, ...this.state.produtos] });
  console.log(produtos)    
  
}




  render() {
    return (
      <>
        <Container className=" d-flex flex-row" sm="12" md="6">
          <Row>     

            <Col className=" cardPipas mb-3 mt-3" xs="12" md="4"> 
            <Produto/>
            </Col>
            <Col className=" cardPipas mb-3 mt-3" xs="12" md="4"> 
            <Produto/>
            </Col>
            <Col className=" cardPipas mb-3 mt-3" xs="12" md="4"> 
            <Produto/>
            </Col>
            

          </Row>
        </Container>

      </>
    );
  }
}
