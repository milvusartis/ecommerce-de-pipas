import React, { Component } from 'react';
import {
    InputGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    ListGroup,
    ListGroupItem
} from 'reactstrap';
import { MdClose } from 'react-icons/md';
import './BarraDePesquisa.scss'
import * as ProductAction from '../../redux/actions/action.product'
import { listaDeProdutoActions } from '../../redux/actions/action.lista-de-produtos'
import { connect } from 'react-redux';
import {history} from '../../index'
class BarraDePesquisa extends Component {
    state = {
        resultado: '',
        mostra: '',
        query: ''
    }
    componentDidMount() {
        const { getAll } = this.props;
        getAll();
    }
    handleInput = (event, produtos) => {
        this.setState({ mostra: '' })
        let query = event.target.value
        this.setState({ query: query })
        const { produtoAtivo, changeDisplayedProduct } = this.props
        if (event.target.value === "") {
            this.setState({ resultado: '' })
        } else {
            let valor = event.target.value
            let filtro = produtos.filter((el) => {
                return el.nome.toLowerCase().includes(valor.toLowerCase())
            })
            let produtosNome = filtro.map(res => (
                <ListGroupItem
                    key={res.idProduto}
                    onClick={() => {
                        changeDisplayedProduct(res, produtoAtivo)
                        this.setState({ mostra: "esconde" })
                        this.setState({ query: res.nome })
                    }}
                >
                    {res.nome}
                </ListGroupItem>)
            )
            let exibir = (
                <ListGroup className="bloco">
                    {produtosNome}
                </ListGroup>
            )
            this.setState({ resultado: exibir })
        }
    }
    render() {
        const { produtos } = this.props
        const { resultado, mostra, query } = this.state
        return (
            <>
                <InputGroup>
                    <Input placeholder="Busque por produtos" onChange={(event) => { this.handleInput(event, produtos) }} value={query} />
                    {query !== '' &&
                        <InputGroupAddon addonType="append">
                            <InputGroupText>
                                <MdClose onClick={() => { this.setState({ query: '' }) }} />
                            </InputGroupText>
                        </InputGroupAddon>
                    }
                </InputGroup>
                <div className={mostra === '' ? "resultado" : mostra}>
                    {resultado}
                </div>
            </>
        )
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
)(BarraDePesquisa);