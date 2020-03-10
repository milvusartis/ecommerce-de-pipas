import React, { Component } from 'react';
import './Produtos.css';
import {
    Card, Button, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody,Col,Container,Row,ListGroup, ListGroupItem 
  } from 'reactstrap';

  class Linhas extends Component {
  
    render() {
        return (
            <>
             <Container className="d-flex flex-row" sm="12" md="6">

             <ListGroup className="col-3 mt-3" >
                <ListGroupItem  id="categoria1"tag="a" href="http://localhost:3000/produtos" action color="success">Categorias</ListGroupItem>
                <ListGroupItem  id="categoria2" tag="a" href="http://localhost:3000/pipas" action>Pipas</ListGroupItem>
                <ListGroupItem  id="categoria3"tag="a" href="http://localhost:3000/linhas" action>Linhas</ListGroupItem>
                <ListGroupItem  id="categoria4"tag="a" href="http://localhost:3000/latas" action>Latas</ListGroupItem> 
              </ListGroup>
         

                <Row>
            <Col className=" cardLinhas mb-3 mt-3" xs="12" md="4">
          <Card>
            <CardImg top width="100%" height="344px" src="https://cdn.ecvol.com/s/www.becodaspipas.com.br/produtos/linha-30-530-metros-unidade/m/0.png?v=" alt="Card image cap" />
            <CardBody>
              <CardTitle>Linha 400 Jardas</CardTitle>
              <CardSubtitle>R$4,00</CardSubtitle>
              <CardText></CardText>
              <Button color="success"href="http://localhost:3000/produtocompleto">Comprar</Button>
            </CardBody>
          </Card>
         </Col>

          <Col className=" cardLinhas mb-3 mt-3" xs="12" md="4">
          <Card>
            <CardImg top width="100%" height="320px" src="https://cdn.ecvol.com/s/www.becodaspipas.com.br/produtos/linha-corrente-carretel-500-jardas-457-metros/m/0.png?v=" alt="Card image cap" />
            <CardBody>
              <CardTitle>Linha Corrente Carretel 500 Jardas</CardTitle>
              <CardSubtitle>R$ 5,50</CardSubtitle>
              <CardText></CardText>
              <Button color="success"href="http://localhost:3000/produtocompleto">Comprar</Button>
            </CardBody>
          </Card>        
          </Col>

          <Col className=" cardLinhas mb-3 mt-3" xs="12" md="4">    
          <Card>
            <CardImg top width="100%" height="320px" src="https://cdn.ecvol.com/s/www.becodaspipas.com.br/produtos/titan-linha-4-6000-jardas-cor/m/1.png?v=0" alt="Card image cap" />
            <CardBody>
              <CardTitle>Linha De Pipa 12000 Jardas Colorida</CardTitle>
              <CardSubtitle>R$ 10,00</CardSubtitle>
              <CardText></CardText>
              <Button color="success"href="http://localhost:3000/produtocompleto">Comprar</Button>
            </CardBody>
          </Card>
        </Col>

        <Col className=" cardLinhas mb-3 mt-3" xs="12" md="4">
          <Card>
            <CardImg top width="100%" height="320px" src="https://cdn.ecvol.com/s/www.becodaspipas.com.br/produtos/linha-de-pipa-vera-cruz-500-jardas-branca/m/0.jpg?v=1" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText></CardText>
              <Button color="success"href="http://localhost:3000/produtocompleto">Comprar</Button>
            </CardBody>
          </Card>
         </Col>

         <Col className=" cardLinhas mb-3 mt-3" xs="12" md="4">
          <Card>
            <CardImg top width="100%" height="320px" src="https://cdn.ecvol.com/s/www.becodaspipas.com.br/produtos/titan-linha-10-6000-jardas-branco/m/0.png?v=" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText></CardText>
              <Button color="success"href="http://localhost:3000/produtocompleto">Comprar</Button>
            </CardBody>
          </Card>
         </Col>

         <Col className=" cardLinhas mb-3 mt-3" xs="12" md="4">
          <Card>
            <CardImg top width="100%" height="320px" src="https://cdn.ecvol.com/s/www.becodaspipas.com.br/produtos/linha-de-pipa-titan-12000-jardas-branca/m/0.png?v=" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText></CardText>
              <Button color="success"href="http://localhost:3000/produtocompleto">Comprar</Button>
            </CardBody>
          </Card>
         </Col>

      </Row>
</Container>
        </>
        
        );
      };
    }   
    export default Linhas;