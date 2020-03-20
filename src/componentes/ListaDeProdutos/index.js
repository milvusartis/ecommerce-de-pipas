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
            "codigo": 1,
            "nome": "Pipa Grande Colorida",
            "descricao": "Pipa colorida",
            "imagem": "https://imagensemoldes.com.br/wp-content/uploads/2017/12/Imagem-Pipa-em-png-e-pdf-edit%C3%A1vel.png",
            "valor": 40.5,
            "disponibilidade": false,
            "categoria": {
              "codigo": 1,
              "descricao": "Linha"
          }            
        },
        {
            "codigo": 2,
            "nome": "Pipa Media Colorida",
            "descricao": "Pipa Beneficente",
            "imagem": "https://s3.amazonaws.com/sample-login/companies/avatars/000/004/570/original/pipa.png",
            "valor": 45.5,
            "disponibilidade": true,
            "categoria": {
              "codigo": 2,
              "descricao": "Lata"
          }
        },
        {
            "codigo": 33,
            "nome": "Pipa Capucheta",
            "descricao": "Pipa estilizada",
            "imagem": "https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Summer-Vacation-PNG/Kite_Transparent_PNG_Clip_Art.png",
            "valor": 50.0,
            "disponibilidade": true,
            "categoria": {
              "codigo": 65,
              "descricao": "Pipa"
          }
        },
       
    ]

    ,
  };

  async componentDidMount() {
    this.carregarProdutos();
  }


  carregarProdutos = async () => {  
   
    // const response = 

    await api.get(`/produto`).then((response) => {
      this.setState({ produtos: response.data });
      // Success 🎉
      // console.log(response);
  })
  .catch((error) => {
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

  formataMoeda = (valor) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }


  montaCardProdutos = () => {
    var retorno = []


    const { produtos } = this.state;

    produtos.forEach((produto, indice) => {
      retorno.push(

        <Col className=" cardPipas mb-3 mt-3" xs="12" md="4">
           <Link className="" to={{
             pathname:`/produto`,
             state: {
               produto: produto
             }
           }}>
          <Card key={produto.codigo}>
            <CardImg top width="100%" src={produto.imagem} alt="Card image cap" />
            <CardBody>
              <CardTitle>{produto.nome}</CardTitle>
              <CardSubtitle className="preco">{this.formataMoeda(produto.valor)} </CardSubtitle>
              <CardText></CardText>
            </CardBody>
        
          </Card>
          </Link>

        </Col>);
    });


    return retorno;
  }




  render() {
    // const { produtos } = this.state;
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
