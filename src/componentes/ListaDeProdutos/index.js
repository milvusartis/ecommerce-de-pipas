import React from 'react';
import './Produtos.css';
import { connect } from 'react-redux';

import {
  Col, Row, Container, Card, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody,
} from 'reactstrap';


import { Link } from "react-router-dom";

const ListaDeProdutos = ({ produtos }) => (
  <>
    <Container>
      <Row>
        {produtos.map(produto => (

          <Col className="cardPipas mb-3 mt-3" xs="12" md="4">
            <Link className="" to="/produto">
              <Card key={produto.codigo}>
                <CardImg top width="100%" src={produto.imagem} alt="Card image cap" />
                <CardBody>
                  <CardTitle>{produto.nome}</CardTitle>
                  <CardSubtitle className="preco">{produto.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </CardSubtitle>
                  <CardText></CardText>
                </CardBody>
              </Card>
            </Link>

          </Col>

        ))}

      </Row>
    </Container>
  </>

);
export default connect(state => ({ produtos: state }))(ListaDeProdutos);