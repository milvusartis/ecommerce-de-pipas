import React from 'react';
import './Produtos.css';
import { connect } from 'react-redux';

import {
  Col, Row, Container, Card, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody, Button,
} from 'reactstrap';


import { Link } from "react-router-dom";

import * as ProdutoActions from '../../store/actions/produto'

const ListaDeProdutos = ({ produtos, produtoAtivo, dispatch }) => (
  <>
    <Container>
      <Row>
        {produtos.map(produto => (

          <Col className="cardPipas mb-3 mt-3" xs="12" md="4">
            <Link onClick={() => dispatch(ProdutoActions.mudaProduto(produto, produtoAtivo))} className=""  >
            
              <Card key={produto.codigo}>
                <CardImg top width="100%" src={produto.imagem} alt="Card image cap" />
                <CardBody>
                  <CardTitle>{produto.nome}</CardTitle>
                  <CardSubtitle className="preco">{produto.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </CardSubtitle>
                  <CardText></CardText>
                  <Button onClick={() => dispatch(ProdutoActions.mudaProduto(produto, produtoAtivo))}>Visualizar Produto</Button>
                </CardBody>
              </Card>
             
            </Link>

          </Col>

        ))}

      </Row>
    </Container>
  </>

);
export default connect(state => ({ produtos: state.produto.produtos, produtoAtivo: state.produto.produtoAtivo}))(ListaDeProdutos);