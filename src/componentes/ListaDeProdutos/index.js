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

  constructor(props) {
    super(props);
  }

  listarproduto = async (evento) => {
    // alert("Teste")       
    evento.preventDefault();

    const produtos = await axios(`http://localhost:8080/ecommerce/produto?descricao=Dorflex`);
    this.setState({ produtos: [produtos.data, ...this.state.produtos] });
    console.log(produtos)

  }

  listarProdutos() {
    var lista = []
    let i;
    for (i = 0; i < 4; i++) {
      lista.push(
      <Col className=" cardPipas mb-3 mt-3" xs="12" md="4">
        <Produto />
      </Col>);
    }
    return lista;
  }




  render() {
    return (
      <>
        <Container>
          <Row>
            {this.listarProdutos()}
          </Row>
        </Container>

      </>
    );
  }
}
