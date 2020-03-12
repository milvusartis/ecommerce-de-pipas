import React, { Component } from 'react';
import axios from 'axios';
import './Produtos.css';

import {
  Col, Row, Container, Card, Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody,
} from 'reactstrap';

import { Link } from "react-router-dom";

import Produto from '../../componentes/Produto';

import api from '../../services/api';


export default class ListaDeProdutos extends Component {

  state = {
    produtos: [],
  };

  async componentDidMount() {
    this.carregarProdutos();
  }


  carregarProdutos = async () => {
    const response = await api.get(`/produto`);

    console.log(response);

    this.setState({ produtos: response.data });
  }



  montaCardProdutos = () => {
    var retorno = []


    const { produtos } = this.state;

    produtos.forEach((produto, indice) => {
      retorno.push(

        <Col className=" cardPipas mb-3 mt-3" xs="12" md="4">
          <Card>
            <CardImg top width="100%" src={produto.imagem} alt="Card image cap" />
            <CardBody>
              <CardTitle>{produto.nome}</CardTitle>
              <CardSubtitle>R$ {produto.valorUnitario} uni</CardSubtitle>
              <CardText></CardText>
              <Button color="success" href="http://localhost:3000/produtocompleto">Comprar</Button>
              <Link to={`/produto/${produto.idProduto}`}>Acessar</Link>
            </CardBody>
          </Card>

        </Col>);
    });


    return retorno;
  }




  render() {
    const { produtos } = this.state;
    return (
      <>
        <Container>
          <Row>

            {this.montaCardProdutos()}

          </Row>
        </Container>

      </>
    );
  }
}
