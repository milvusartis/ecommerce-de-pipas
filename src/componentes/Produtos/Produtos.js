import React, { Component } from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody,Col
  } from 'reactstrap';


class Produtos extends Component {
  
    render() {
        return (
            <>
            <Col>
            <CardDeck>
            <Card>
              <CardImg top width="100%" src="https://cdn.ecvol.com/s/www.becodaspipas.com.br/produtos/pipa-biquinho-50-cm-c-25/m/0.png?v=1" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText></CardText>
                <Button color="success">Comprar</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg top width="100%" src="https://cdn.awsli.com.br/300x300/812/812332/produto/32610796/89afe08f44.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText></CardText>
                <Button color="success" color="success">Comprar</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg top width="100%" src="https://cdn.awsli.com.br/300x300/812/812332/produto/32598061/72a82d2b2d.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText></CardText>
                <Button color="success">Comprar</Button>
              </CardBody>
            </Card>
          </CardDeck> 
          </Col>

          <Col>
          <CardDeck>
            <Card>
              <CardImg top width="100%" src="https://cdn.ecvol.com/s/www.becodaspipas.com.br/produtos/carretilha-de-plastico-26-cm-linha-10-1000-jardas/z/0.png?v=6" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>.</CardText>
                <Button color="success">Comprar</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg top width="100%" src="https://cdn.ecvol.com/s/www.becodaspipas.com.br/produtos/carretilha-acrilica-21-cm/z/0.png" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                <Button color="success">Comprar</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg top width="100%" src="https://a-static.mlcdn.com.br/224x224/kit-02-linha-10-de-pipa-papagaio-arraia-1000-jardas-oferta-aguia/amplabrasil/6325306894/f0e2b5e6410a2be8996607cc88ec3279.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card hasow that equal height action.</CardText>
                <Button color="success">Comprar</Button>
              </CardBody>
            </Card>
          </CardDeck> 
          </Col>

          



          

          
          
          </>
        
        );
      };
          
           
    }   


export default Produtos;