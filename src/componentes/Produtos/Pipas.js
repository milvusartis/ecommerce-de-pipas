import React, { Component } from 'react';
import {Router} from 'react-router-dom';
import {
    Card, Button, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody,Col,Container,Row,ListGroup, ListGroupItem 
  } from 'reactstrap';

  class Pipas extends Component {
  
    render() {
        return (
            <>
            
            <Container className="mt-4 d-flex flex-row" sm="12" md="6">
            <ListGroup className="col-3 categorias mt-3">
                <ListGroupItem tag="a" href="http://localhost:3000/" action color="success">Categorias</ListGroupItem>
                <ListGroupItem tag="a" href="http://localhost:3000/pipas" action>Pipas</ListGroupItem>
                <ListGroupItem tag="a" href="http://localhost:3000/linhas" action>Linhas</ListGroupItem>
                <ListGroupItem tag="a" href="http://localhost:3000/latas" action>Latas</ListGroupItem> 
              </ListGroup>

              <Row>
            
            <Col className=" cardPipas mb-3 mt-3"  xs="12" md="4">
            <Card>
              <CardImg top width="100%"  src="https://http2.mlstatic.com/D_NQ_NP_635113-MLB40086962810_122019-V.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>Pipa personagens</CardTitle>
                <CardSubtitle>R$ 2,00 uni ou R$25,00 pacote com 15 unidades</CardSubtitle>
                <CardText></CardText>
                <Button color="success">Comprar</Button>
              </CardBody>
            </Card>
           
          </Col>

            <Col className=" cardPipas mb-3 mt-3" xs="12" md="4">  
            <Card>
              <CardImg top width="100%"  src="https://http2.mlstatic.com/D_NQ_NP_821158-MLB32882063836_112019-V.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>Pipa bico de ouro</CardTitle>
                <CardSubtitle>R$ 2,00 uni ou R$25,00 pacote com 15 unidades</CardSubtitle>
                <CardText></CardText>
                <Button color="success" color="success">Comprar</Button>
              </CardBody>
            </Card>
            
            </Col>

            <Col className="  cardPipas mb-3 mt-3" xs="12" md="4">
          
            <Card>
              <CardImg top width="100%"  src="https://http2.mlstatic.com/D_NQ_NP_761600-MLB32570055484_102019-V.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>Pipa colorido</CardTitle>
                <CardSubtitle>R$ 2,00 uni ou R$25,00 pacote com 15 unidades</CardSubtitle>
                <CardText></CardText>
                <Button color="success">Comprar</Button>
              </CardBody>
            </Card>
          </Col>

          <Col className=" cardPipas mb-3 mt-3"  xs="12" md="4">
            <Card>
              <CardImg top width="100%"  src="https://cdn.ecvol.com/s/www.becodaspipas.com.br/produtos/pipa-raia-grande-50x50-c-10-unidades/m/0.png?v=" alt="Card image cap" />
              <CardBody>
                <CardTitle>Peixinho personagens</CardTitle>
                <CardSubtitle>R$ 1,50 uni ou R$20,00 pacote com 15 unidades</CardSubtitle>
                <CardText></CardText>
                <Button color="success">Comprar</Button>
              </CardBody>
            </Card>
            </Col>

            <Col className=" cardPipas mb-3 mt-3"  xs="12" md="4">
            <Card>
              <CardImg top width="100%"  src="https://cdn.ecvol.com/s/www.becodaspipas.com.br/produtos/pipa-raia-de-plastico-flechinha-peixinho-40x40-c-10/z/0.png?v=7" alt="Card image cap" />
              <CardBody>
                <CardTitle>Peixinho personagens</CardTitle>
                <CardSubtitle>R$ 1,50 uni ou R$20,00 pacote com 15 unidades</CardSubtitle>
                <CardText></CardText>
                <Button color="success">Comprar</Button>
              </CardBody>
            </Card>
            </Col>

            <Col className=" cardPipas mb-3 mt-3"  xs="12" md="4">
            <Card>
              <CardImg top width="100%"  src="https://cdn.ecvol.com/s/www.becodaspipas.com.br/produtos/pipa-raia-de-plastico-flechinha-peixinho-40x40-c-10/z/3.png?v=7" alt="Card image cap" />
              <CardBody>
                <CardTitle>Peixinho colorido</CardTitle>
                <CardSubtitle>R$ 1,00 uni ou R$12,00 pacote com 15 unidades</CardSubtitle>
                <CardText></CardText>
                <Button color="success">Comprar</Button>
              </CardBody>
            </Card>
            </Col>


          </Row>
          </Container>

          </>
        )
    }
}


    export default Pipas;