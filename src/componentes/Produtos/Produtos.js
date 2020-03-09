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
                <ListGroupItem tag="a" href="http://localhost:3000/" action color="success">Categorias</ListGroupItem>
                <ListGroupItem tag="a" href="http://localhost:3000/pipas" action>Pipas</ListGroupItem>
                <ListGroupItem tag="a" href="http://localhost:3000/linhas" action>Linhas</ListGroupItem>
                <ListGroupItem tag="a" href="http://localhost:3000/latas" action>Latas</ListGroupItem> 
              </ListGroup>
              <Row>

              <Col className=" cardPipas mb-3 mt-3"  xs="12" md="4">
            <Card>
              <CardImg top width="100%" src="https://http2.mlstatic.com/D_NQ_NP_635113-MLB40086962810_122019-V.jpg" alt="Card image cap" />
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
              <CardImg top width="100%" src="https://http2.mlstatic.com/D_NQ_NP_821158-MLB32882063836_112019-V.jpg" alt="Card image cap" />
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
              <CardImg top width="100%" src="https://http2.mlstatic.com/D_NQ_NP_761600-MLB32570055484_102019-V.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>Pipa colorido</CardTitle>
                <CardSubtitle>R$ 2,00 uni ou R$25,00 pacote com 15 unidades</CardSubtitle>
                <CardText></CardText>
                <Button color="success">Comprar</Button>
              </CardBody>
            </Card>
          </Col>

          <Col className=" cardLinhas mb-3 mt-3" xs="12" md="4">
          <Card>
            <CardImg top width="100%" height="344px" src="https://cdn.ecvol.com/s/www.becodaspipas.com.br/produtos/linha-30-530-metros-unidade/m/0.png?v=" alt="Card image cap" />
            <CardBody>
              <CardTitle>Linha 400 Jardas</CardTitle>
              <CardSubtitle>R$4,00</CardSubtitle>
              <CardText></CardText>
              <Button color="success">Comprar</Button>
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
              <Button color="success">Comprar</Button>
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
              <Button color="success">Comprar</Button>
            </CardBody>
          </Card>
        </Col>

          <Col className=" cardLatas mb-3 mt-3" xs="12" md="4">
            <Card>
              <CardImg top width="100%" height="320px" src="https://cdn.ecvol.com/s/www.becodaspipas.com.br/produtos/carretilha-madeira-vazada-28-cm-homem-aranha/m/0.jpg?v=" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText></CardText>
                <Button color="success">Comprar</Button>
              </CardBody>
            </Card>      
          </Col>

          <Col className=" cardLatas mb-3 mt-3" xs="12" md="4">
            <Card>
              <CardImg top width="100%" height="320px" src="https://cdn.ecvol.com/s/www.becodaspipas.com.br/produtos/_781/m/1.png?v=0" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText></CardText>
                <Button color="success">Comprar</Button>
              </CardBody>
            </Card>
          </Col>

          <Col className=" cardLatas mb-3 mt-3" xs="12" md="4">
            <Card>
              <CardImg top width="100%" height="320px" src="https://cdn.ecvol.com/s/www.becodaspipas.com.br/produtos/mini-carretilha-acrilica-15-cm-linha-10-2000-jardas/m/0.png?v=7" alt="Card image cap" />
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