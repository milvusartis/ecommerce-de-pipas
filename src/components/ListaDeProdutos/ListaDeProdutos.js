import React, { Component } from 'react';
import './ListaDeProdutos.css';

// import { bindActionCreators } from 'redux';

import {
    Col, Row, Container, Card, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody, Button,
} from 'reactstrap';


import { Link } from "react-router-dom";

import { connect } from 'react-redux';

import { listaDeProdutoActions } from '../../redux/actions/action.lista-de-produtos'
// import { ListaDeProdutosActionsType } from '../../redux/actions/actions-type';
import * as ProductAction from '../../redux/actions/action.product'



class ListaDeProdutos extends Component {

    componentDidMount() {
        const { getAll } = this.props;
        getAll();
    }


    render() {
        console.log(this.props);
        const { produtos, produtoAtivo, changeDisplayedProduct, } = this.props    
        return (
            <>
                <Container>
                    <Row>
                        {produtos.map(produto => (

                            <Col className="cardPipas mb-3 mt-3" xs="12" md="4">
                                <Link onClick={() =>  changeDisplayedProduct(produto, produtoAtivo)} className=""  >
                                <Card key={produto.codigo}>
                                    <CardImg top width="100%" src={produto.imagem} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>{produto.nome}</CardTitle>
                                        <CardSubtitle className="preco">{produto.valorUnitario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </CardSubtitle>
                                        <CardText></CardText>
                                        <Button color="success" onClick={() =>  changeDisplayedProduct(produto, produtoAtivo)}>Visualizar Produto</Button>
                                    </CardBody>
                                </Card>

                                </Link>

                            </Col>

                        ))}

                    </Row>
                </Container>

            </>
        );
    }

}


const mapStateToProps = state => ({
    produtos: state.listaDeProdutosReducer.produtos,
    produtoAtivo: state.produtoReducer.produtoAtivo
})


const mapDispatchToProps = dispatch => ({
    getAll: () => dispatch(listaDeProdutoActions.requestGetAll()),
    changeDisplayedProduct: (produto, produtoAtivo) => dispatch(ProductAction.changeDisplayedProduct(produto, produtoAtivo)),
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(ListaDeProdutos);
