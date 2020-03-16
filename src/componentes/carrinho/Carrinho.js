import React from 'react';
import "./Carrinho.css";
import { connect } from 'react-redux';

import {
    Container,
	Row,
	Col,
	ListGroupItem,
	ListGroup,
	Button,
	Input
} from 'reactstrap';

const Carrinho = (novoproduto, dispatch) => (
	<>

<Container>
			<Row>
				
			<Col>
				<Row>
					<p>Produto</p>
					<p>Quantidade</p>
					<p>Entrega</p>
					<p>Preço</p>


					<Col className="cardPipas mb-3 mt-3" xs="12" md="4">			
						<div key={novoproduto.codigo}>	
							<h1>{novoproduto.nome}</h1>			
						</div>
					</Col>

				</Row>
				
				
					
					<Row className="mt-2 mb-2 p-2 qnt">
                          
                    </Row>
							</Col>
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
		</Container>

	</>
);

export default connect(state => ({
    novoproduto: state.carrinho.novoproduto,
}))(Carrinho) ;


