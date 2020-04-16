import React, { Component } from 'react';
import './ListaDeProdutos.scss';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {
    Col, Row, Container, Card, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody, Button, Input, Label, Form
} from 'reactstrap';
import { listaDeProdutoActions } from '../../redux/actions/action.lista-de-produtos'
import * as ProductAction from '../../redux/actions/action.product'
import { history } from "../../index"
class ListaDeProdutos extends Component {
    state={
        produtos:[]
    }
    HandleSelect(event,produtos) {
        let valor = event.target.value
        switch (valor) {
            case 'valorUnitario-asc': {
                this.setState({produtos:produtos.sort(this.dynamicsort("valorUnitario", "asc"))})
                history.push(window.location)
                break;
            }
            case 'valorUnitario-desc': {
                this.setState({produtos:produtos.sort(this.dynamicsort("valorUnitario", "desc"))})
                history.push(window.location)
                break;
            }
        }
    }
    dynamicsort(property, order) {
        var sort_order = -1;
        if (order === "desc") {
            sort_order = 1;
        }
        return function (a, b) {
            if (a[property] < b[property]) {
                return -1 * sort_order;
            } else if (a[property] > b[property]) {
                return 1 * sort_order;
            } else {
                return 0 * sort_order;
            }
        }
    }
    componentDidMount() {
        const { getAll,produtos } = this.props;
        getAll();
        this.setState({produtos:produtos})
    }
    render() {
        const { produtoAtivo, changeDisplayedProduct} = this.props
        const {produtos} = this.state
        return (
            <>
                <Container>
                    {window.location.pathname === "/produtos" &&
                        <Form>
                            <Label for="ordenar">Classificar por:</Label>
                            <Input type="select" name="ordenar" id="ordenar" style={{ width: "50%" }} onChange={(event) => { this.HandleSelect(event,produtos) }}>
                                <option value=''></option>
                                <option value='valorUnitario-asc'>
                                    Maior Preço
                                </option>
                                <option value='valorUnitario-desc'>
                                    Menos Preço
                                </option>
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