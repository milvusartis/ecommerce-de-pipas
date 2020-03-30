import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./ExibeProduto.css";
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap'


import * as ProdutoActions from "../../redux/actions/action.product";
import {CartActions} from "../../redux/actions/action.cart";
import CalculaFrete from '../CalculaFrete/CalculaFrete';
import ControlaQtd from "../ControlaQtd/ControlaQtd";


class ExibeProduto extends Component {
  render() {
    const {produto, number, addToCart} = this.props;
    return (
        <>
        <Container>
            <Row>
                <Col sm="12" md="5">
                    <img src={produto.imagem}
                        className="img-fluid mt-2 mb-2"
                        alt="imagem"
                        title="imagem" />
                </Col>
                <Col sm="12" md="7">                  
                    <div className="p-2">
                        <h3 title="nome do Produto"
                            className="mt-2 mb-2">
                            {produto.nome}
                        </h3>
                        <h3 title="nome do Produto"
                            className="mt-2 mb-2">
                            {produto.descricao}
                        </h3>
                        <h5 title="Preço do Produto"
                            className="mt-2 mb-2 precoProduto">
                            {produto.valorUnitario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </h5>
                        <ControlaQtd/>
                        <Button className="btn-success col-sm-12 col-md-6"onClick={()=>addToCart(produto,number)}>Adicionar ao Carrinho</Button>
                        <CalculaFrete/>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
    );
  }
}

const mapStateToProps = state => ({
    produto: state.produtoReducer.produto,
    number: state.produtoReducer.number,
 
});

const mapDispatchToProps = dispatch =>({
    addToCart: (produto, number) => dispatch(CartActions.addToCart(produto,number)),
    incrementQuantity: (number)=> dispatch(ProdutoActions.incrementQuantity(number)),
    decrementQuantity: (number) => dispatch(ProdutoActions.decrementQuantity(number)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExibeProduto);