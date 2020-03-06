import React, { Component } from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody,Col, Row, Container,ListGroup, ListGroupItem 
  } from 'reactstrap';


class Produtos extends Component {
  
    render() {
        return (
            <>
            <Container className="mt-5  d-flex flex-row">

              <ListGroup className="col-3 categorias">
                <ListGroupItem tag="a" href="#" disabled>Categotias</ListGroupItem>
                <ListGroupItem tag="a" href="#" action>Pipas</ListGroupItem>
                <ListGroupItem tag="a" href="#" action>Linhas</ListGroupItem>
                <ListGroupItem tag="a" href="#" action>Latas</ListGroupItem> 
              </ListGroup>
              <Row>

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
                <Button color="success" color="success">Comprar</Button>
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