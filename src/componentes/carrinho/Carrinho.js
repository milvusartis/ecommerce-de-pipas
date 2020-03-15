import React, {Component} from 'react';
import "./Carrinho.css";




import {
    Container,
	Row,
	Col,
	ListGroupItem,
	ListGroup,
	Button,
	Input
} from 'reactstrap';
class Carrinho extends Component {





    render() {
        return ( 
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
					<hr className="my-2" />
					
					<Row className="mt-2 mb-2 p-2 qnt">
                          <Button className="btnMenos" color="success" onClick={this.decrement}>
                                        -
                                </Button>
                                    <Input
                                        type="number"
                                        className="col-2 mt-2 quantidade"
                                        value="0"/>
                            <Button className="btnMais"color="success" onClick={this.increment}>
                                        +
                                </Button>
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
								<Button  className="btnFinalizar"color="danger">Finalizar Compra</Button>
							</Col>
						
				</Row>
		</Container>
       
        </>
        )
    }
}
export default Carrinho;


