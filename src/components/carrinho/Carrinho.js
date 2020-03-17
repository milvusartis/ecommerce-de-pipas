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
				</Row>
				<Row>
					{/* <p>Pipa Colorida</p>
					<p>5 unidades</p>
					<p>16/03/2020</p>
					<p>RS 50,00</p> */}
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


