import React, { Component } from 'react';
import './Produtos.css';

import {
  Col, Row, Container, Card, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody,
} from 'reactstrap';

import { Link } from "react-router-dom";

import api from '../../services/api';


export default class ListaDeProdutos extends Component {

  state = {
    produtos: 
       [
        {
            "idProduto": 1,
            "nome": "Pipa Grande Colorida",
            "descricao": "Pipa colorida",
            "imagem": "https://imagensemoldes.com.br/wp-content/uploads/2017/12/Imagem-Pipa-em-png-e-pdf-edit%C3%A1vel.png",
            "valorUnitario": 40.5,
            "disponibilidade": false
        },
        {
            "idProduto": 2,
            "nome": "Pipa Media Colorida",
            "descricao": "Pipa Beneficente",
            "imagem": "https://s3.amazonaws.com/sample-login/companies/avatars/000/004/570/original/pipa.png",
            "valorUnitario": 45.5,
            "disponibilidade": true
        },
        {
            "idProduto": 33,
            "nome": "Pipa Capucheta",
            "descricao": "Pipa estilizada",
            "imagem": "https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Summer-Vacation-PNG/Kite_Transparent_PNG_Clip_Art.png",
            "valorUnitario": 50.0,
            "disponibilidade": true
        },
       
    ]

    ,
  };

  async componentDidMount() {
    this.carregarProdutos();
  }


  carregarProdutos = async () => {  
   


    const response = await api.get(`/produto`).then((response) => {
      this.setState({ produtos: response.data });
      // Success 🎉
      console.log(response);
  })
  .catch((error) => {
      console.log("Ahhhhhhhhhhhhhhhhhhhhhhhh ISAAAA");
      // Error 😨
      if (error.response) {
          /*
           * The request was made and the server responded with a
           * status code that falls out of the range of 2xx
           */
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
      } else if (error.request) {
          /*
           * The request was made but no response was received, `error.request`
           * is an instance of XMLHttpRequest in the browser and an instance
           * of http.ClientRequest in Node.js
           */
          console.log(error.request);
      } else {
          // Something happened in setting up the request and triggered an Error
          console.log('Error', error.message);
      }
      console.log(error.config);
  });


  }



  montaCardProdutos = () => {
    var retorno = []


    const { produtos } = this.state;

    produtos.forEach((produto, indice) => {
      retorno.push(

        <Col className=" cardPipas mb-3 mt-3" xs="12" md="4">
          <Card key={produto.idProduto}>
            <CardImg top width="100%" src={produto.imagem} alt="Card image cap" />
            <CardBody>
              <CardTitle>{produto.nome}</CardTitle>
              <CardSubtitle>R$ {produto.valorUnitario} unidade</CardSubtitle>
              <CardText></CardText>
              <Link className="btn btn-success" to={`/produto/${produto.idProduto}`}>Comprar</Link>
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
