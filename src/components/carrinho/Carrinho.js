import React, { Component } from 'react';
import "./Carrinho.css";
import { connect } from 'react-redux';

import {
    Container,
	Row,
	Col,
	ListGroupItem,
	ListGroup,
	Button,
} from 'reactstrap';

class Carrinho extends Component {
	render() {
		const { addedItems, quantityItems, total } = this.props
		return(
		<>
			<Container>
				<Row>
					<div className="col-md-8">
						<Row className="mt-2">
						<div className="col-md-3">
							<img className="item-imagem" src={item.imagem} alt="item1" width="100%" height="100px"/>
						</div>
						<div className="col-md-3 d-flex justify-content-center align-items-center">
							{item.nome}
						</div>
						<div className="col-md-3 d-flex justify-content-center align-items-center">
							{item.quantity}
						</div>
						<div className="col-md-3 d-flex justify-content-center align-items-center">
							{item.valorUnitario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
						</div>
						</Row>
						{addedItems.map(item => (
						<Row className="mt-2">
						<div className="col-md-3">
							<img className="item-imagem" src={item.imagem} alt="item1" width="100%" height="100px"/>
						</div>
						<div className="col-md-3 d-flex justify-content-center align-items-center">
							{item.nome}
						</div>
						<div className="col-md-3 d-flex justify-content-center align-items-center">
							{item.quantity}
						</div>
						<div className="col-md-3 d-flex justify-content-center align-items-center">
							{item.valorUnitario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
						</div>
						</Row>
						))}
					</div>
					<Col xs="12" md="4">
						<ListGroup>
							<h3 className="titulos">Resumo da compra</h3>
							<ListGroupItem className="listaResumo">Produto:</ListGroupItem>
							<ListGroupItem className="listaResumo">Valor:</ListGroupItem>
							<ListGroupItem className="listaResumo">Frete:</ListGroupItem>
							<ListGroupItem className="listaResumo">Valor total:</ListGroupItem>
						</ListGroup>
						<Button  href="/checkout"className="btnFinalizar"color="danger">Finalizar Compra</Button>
					</Col>		
				</Row>
				{/* <Col md="8">
						<Row>
						<Col md="2">
							<div>Produto</div>
							{addedItems.map(item => (
								<div>{item.nome}</div>
							))}
						</Col>
						</Row>
						<Row>
						<Col md="2">
							<div>Quantidade</div>
						</Col>
						</Row>
						<Row>
						<Col md="2">
							<div>Entrega</div>
						</Col>
						</Row>
						<Row>
						<Col md="2">
							<div>Preço</div>
						</Col>
						</Row>
						<Row>
							{addedItems.map(item => (
								<>
								</>
							))}
						</Row>
						<Row className="mt-2 mb-2 p-2 qnt">
							
						</Row>
					</Col> */}
			</Container>
		</>
		)
	}
}

// const Carrinho = (novoproduto, dispatch) => (
	
	
// );
const mapStateToProps = state => ({
    addedItems: state.carrinhoReducer.addedItems,
    total: state.carrinhoReducer.total,
    quantityItems: state.carrinhoReducer.quantityItems,
});

const mapDispatchToProps = dispatch => ({

})
// export default connect(state => ({
//     novoproduto: state.carrinho.novoproduto,
// }))(Carrinho) ;
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Carrinho);