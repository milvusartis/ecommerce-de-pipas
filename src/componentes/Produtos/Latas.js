import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {
    Card, Button, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody,Col, Row, Container,ListGroup, ListGroupItem 
  } from 'reactstrap';


class Latas extends Component {
  
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
            <Col className=" cardLatas mb-3 mt-3" xs="12" md="4">
            <Card>
              <CardImg top width="100%" height="320px" src="https://cdn.ecvol.com/s/www.becodaspipas.com.br/produtos/carretilha-madeira-vazada-28-cm-homem-aranha/m/0.jpg?v=" alt="Card image cap" />
              <CardBody>
                <CardTitle>Carretilha homem-aranha</CardTitle>
                <CardSubtitle>R$ 20,00</CardSubtitle>
                <CardText></CardText>
                <Button color="success">Comprar</Button>
              </CardBody>
            </Card>   
          </Col>

          <Col className=" cardLatas mb-3 mt-3" xs="12" md="4">
            <Card>
              <CardImg top width="100%" height="320px" src="https://cdn.ecvol.com/s/www.becodaspipas.com.br/produtos/_781/m/1.png?v=0" alt="Card image cap" />
              <CardBody>
                <CardTitle>Carretilha acrilica roda de carro</CardTitle>
                <CardSubtitle>R$ 15,00</CardSubtitle>
                <CardText></CardText>
                <Button color="success">Comprar</Button>
              </CardBody>
            </Card>
          </Col>

          <Col className=" cardLatas mb-3 mt-3" xs="12" md="4">
            <Card>
              <CardImg top width="100%" height="320px" src="https://cdn.ecvol.com/s/www.becodaspipas.com.br/produtos/mini-carretilha-acrilica-15-cm-linha-10-2000-jardas/m/0.png?v=7" alt="Card image cap" />
              <CardBody>
                <CardTitle>Carretilha acrilica </CardTitle>
                <CardSubtitle>R$ 12,00</CardSubtitle>
                <CardText></CardText>
                <Button color="success">Comprar</Button>
              </CardBody>
            </Card>
          </Col>

          <Col className=" cardLatas mb-3 mt-3" xs="12" md="4">
            <Card>
              <CardImg top width="100%" height="320px" src="https://cdn.awsli.com.br/600x450/526/526018/produto/19656647/4d011f64d2.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>Lata de linha oval</CardTitle>
                <CardSubtitle>R$ 6,50</CardSubtitle>
                <CardText></CardText>
                <Button color="success">Comprar</Button>
              </CardBody>
            </Card>
          </Col>

          <Col className=" cardLatas mb-3 mt-3" xs="12" md="4">
            <Card>
              <CardImg top width="100%" height="320px" src="https://http2.mlstatic.com/linha-de-pipa-portaconelatamedia-fluorescente-pacote-c24-D_NQ_NP_799680-MLB25533680197_042017-F.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>Lata de linha redonda colorida</CardTitle>
                <CardSubtitle>R$ 8,00</CardSubtitle>
                <CardText></CardText>
                <Button color="success">Comprar</Button>
              </CardBody>
            </Card>
          </Col>

          <Col className=" cardLatas mb-3 mt-3" xs="12" md="4">
            <Card>
              <CardImg top width="100%" height="320px" src="https://cdn.awsli.com.br/600x450/526/526018/produto/19655088/64e80051e8.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>Lata de linha redonda pequena</CardTitle>
                <CardSubtitle>R$ 5,00</CardSubtitle>
                <CardText></CardText>
                <Button color="success">Comprar</Button>
              </CardBody>
            </Card>
          </Col>

          </Row>
          </Container>

          </>
        
        );
      };
    }   


export default Latas;