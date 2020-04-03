import React, { Component } from 'react';
import "./Carrinho.css";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
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
		const { addedItems, quantityItems, total,valorFrete,diasEntrega} = this.props
		return(
		<>
			<Container>
				<Row>
					<div className="col-md-8 bg-light">
						<Row className="mt-2 titulo">
						<div className="col-md-3 d-flex justify-content-center align-items-center">
							
						</div>
						<div className="col-md-3 text-center">
							Nome
						</div>
						<div className="col-md-2 d-flex justify-content-center align-items-center">
							Quantidade
						</div>
						<div className="col-md-2 d-flex justify-content-center align-items-center">
							Valor Unitario
						</div>
						<div className="col-md-2 d-flex justify-content-center align-items-center teste">
							Total Produto
						</div>
						</Row>
						{addedItems.map(item => (
						<Row key={item.idProduto} className="mt-2">
						<div className="col-md-3 col-sm-6 esconde mt-2">
							<img className="imagens img-fluid" src={item.imagem} alt="item1"/>
						</div>
						<ListGroup horizontal="md" className="col-sm-8 ml-2 esconde">
							<ListGroupItem className="d-flex justify-content-center align-items-center">
								{item.nome}
							</ListGroupItem>
							<ListGroupItem className="d-flex justify-content-center align-items-center">
								{item.quantity===1?item.quantity+" Unidade":item.quantity+" Unidades"}
							</ListGroupItem>
							<ListGroupItem className="d-flex justify-content-center align-items-center">
								{item.valorUnitario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
							</ListGroupItem>
							<ListGroupItem className="d-flex justify-content-center align-items-center">
								{(item.valorUnitario*item.quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
							</ListGroupItem>
						</ListGroup>
						</Row>
						))}
						{addedItems.map(item => (
							<Row className="mt-2 visao-normal">
								<div className="col-md-3 col-sm-6">
									<img className="imagens img-fluid" src={item.imagem} alt="item1"/>
								</div>
								<div className="col-md-3 col-sm-6 d-flex justify-content-center align-items-center">
									{item.nome}
								</div>
								<div className="col-md-2 col-sm-6 d-flex justify-content-center align-items-center">
									{item.quantity===1?item.quantity+" Unidade":item.quantity+" Unidades"}
								</div>
								<div className="col-md-2 col-sm-3 d-flex justify-content-center align-items-center">
									{item.valorUnitario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
								</div>
								<div className="col-md-2 col-sm-3 d-flex justify-content-center align-items-center">
									{(item.valorUnitario*item.quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
								</div>
							</Row>
						))}
					</div>
					<Col xs="12" md="4">
						<ListGroup>
							<h3 className="titulos">Resumo da compra</h3>
							<ListGroupItem className="listaResumo">Quantidade de Produto:<br className="ajusta"/>{quantityItems}</ListGroupItem>
							
							<ListGroupItem className="listaResumo">Valor:<br/>{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</ListGroupItem>
							<ListGroupItem className="listaResumo">
								Frete:<br/>{valorFrete.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
							</ListGroupItem>
							<ListGroupItem className="listaResumo">
								Prazo de Entrega:<br/>{diasEntrega} Dias
							</ListGroupItem>
							<ListGroupItem className="listaResumo">
								Valor total:<br/>{(total+diasEntrega).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
							</ListGroupItem>
						</ListGroup>
						<Link to="/checkout">
							<Button className="btnFinalizar"color="danger">Finalizar Compra</Button>
						</Link>
					</Col>		
				</Row>
			</Container>
		</>
		)
	}
}

const mapStateToProps = state => ({
    addedItems: state.carrinhoReducer.addedItems,
    total: state.carrinhoReducer.total,
	quantityItems: state.carrinhoReducer.quantityItems,
	valorFrete:state.carrinhoReducer.valorFrete,
	diasEntrega:state.carrinhoReducer.diasEntrega,
});

const mapDispatchToProps = dispatch => ({

})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Carrinho);