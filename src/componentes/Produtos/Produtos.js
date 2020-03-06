import React, { Component } from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody,Col, Row, Container,ListGroup, ListGroupItem 
  } from 'reactstrap';


class Produtos extends Component {
  
    render() {
        return (
            <>
            <Container className="mt-4 d-flex flex-row" sm="12" md="6">

              <ListGroup className="col-3 categorias mt-3">
                <ListGroupItem tag="a" href="#" disabled>Categotias</ListGroupItem>
                <ListGroupItem tag="a" href="#" action>Pipas</ListGroupItem>
                <ListGroupItem tag="a" href="#" action>Linhas</ListGroupItem>
                <ListGroupItem tag="a" href="#" action>Latas</ListGroupItem> 
              </ListGroup>
              <Row>

              <Col className="mb-3 mt-3" xs="12" md="4">
            <Card>
              <CardImg top width="100%" src="https://http2.mlstatic.com/D_NQ_NP_635113-MLB40086962810_122019-V.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText></CardText>
                <Button color="success">Comprar</Button>
              </CardBody>
            </Card>
           
          </Col>

            <Col className="mb-3 mt-3" xs="12" md="4">  
            <Card>
              <CardImg top width="100%" src="https://http2.mlstatic.com/D_NQ_NP_821158-MLB32882063836_112019-V.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText></CardText>
                <Button color="success" color="success">Comprar</Button>
              </CardBody>
            </Card>
            
            </Col>

            <Col className="mb-3 mt-3" xs="12" md="4">
          
            <Card>
              <CardImg top width="100%" src="https://http2.mlstatic.com/D_NQ_NP_761600-MLB32570055484_102019-V.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText></CardText>
                <Button color="success">Comprar</Button>
              </CardBody>
            </Card>
           
          </Col>

          <Col className="mb-3 mt-3" xs="12" md="4">
          
            <Card>
              <CardImg top width="100%" src="https://cdn.ecvol.com/s/www.becodaspipas.com.br/produtos/linha-de-pipa-80-metros-tex-90-linhanyl/m/0.png?v=0" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText></CardText>
                <Button color="success">Comprar</Button>
              </CardBody>
            </Card>
           
          </Col>

            <Col className="mb-3 mt-3" xs="12" md="4">
          
            <Card>
              <CardImg top width="100%" src="#" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText></CardText>
                <Button color="success">Comprar</Button>
              </CardBody>
            </Card>
            
            </Col>

            <Col className="mb-3 mt-3" xs="12" md="4">
          
            <Card>
              <CardImg top width="100%" src="#" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText></CardText>
                <Button color="success">Comprar</Button>
              </CardBody>
            </Card>
           
          </Col>

          <Col className="mb-3 mt-3" xs="12" md="4">
          
            <Card>
              <CardImg top width="100%" src="#" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText></CardText>
                <Button color="success">Comprar</Button>
              </CardBody>
            </Card>
           
          </Col>

          <Col className="mb-3 mt-3" xs="12" md="4">
          
            <Card>
              <CardImg top width="100%" src="#" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText></CardText>
                <Button color="success">Comprar</Button>
              </CardBody>
            </Card>
           
          </Col>

          <Col className="mb-3 mt-3" xs="12" md="4">
          
            <Card>
              <CardImg top width="100%" src="#" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
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


export default Produtos;