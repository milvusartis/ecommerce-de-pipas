import React, { Component } from 'react';
import './ListaDeProdutos.scss';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {
    Col, Row, Container, Card, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody, Button, Input,Label,Form
} from 'reactstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { listaDeProdutoActions } from '../../redux/actions/action.lista-de-produtos'
import * as ProductAction from '../../redux/actions/action.product'

class ListaDeProdutos extends Component {
    teste = () => {
        if (window.location.pathname === "/produtos") {
            console.log(window.location.pathname)
        }
    }
    componentDidMount() {
        const { getAll } = this.props;
        getAll();
        this.teste()
    }
    render() {

        const { produtos, produtoAtivo, changeDisplayedProduct, } = this.props

        return (
            <>
                <Container>
                    {window.location.pathname==="/produtos"&&
                    <Form>
                        <Label for="ordenar">Classificar por:</Label>
                        <Input type="select" name="ordenar" id="ordenar" style={{ width: "50%" }}>
                            <option></option>
                            <option>Maior Preço</option>
                            <option>Menos Preço</option>
                        </Input>
                    </Form>
                    }
                    <Row>

                        {typeof produtos !== "undefined" ? produtos.map(produto => (
                            <Col key={produto.idProduto} className="cardPipas mb-3 mt-3" xs="12" md="4">
                                <Link to="" onClick={() => changeDisplayedProduct(produto, produtoAtivo)} className=""  >
                                    <Card>
                                        <CardImg top width="100%" src={produto.imagem} alt="Card image cap" />
                                        <CardBody>
                                            <CardTitle>{produto.nome}</CardTitle>
                                            <CardSubtitle className="preco">{produto.valorUnitario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </CardSubtitle>
                                            <CardText></CardText>
                                            <Button color="success" onClick={() => changeDisplayedProduct(produto, produtoAtivo)}>Visualizar Produto</Button>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </Col>
                        )) : ''}
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