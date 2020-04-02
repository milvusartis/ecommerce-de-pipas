import React, { Component } from 'react';
import '../../css/global.css'
import './Checkout.css';

import InputMask from 'react-input-mask';

import { connect } from 'react-redux';
import { Col, Row, Button, Form, FormGroup, Label,Container,Input, ListGroup, ListGroupItem} from 'reactstrap';

class Checkout extends Component {
    render() {
        const { quantityItems, total,valorFrete,diasEntrega} = this.props
        return (
            <>
            <Container id="checkout">
                <Form>  
                    <Row> 
                    <Col xs="12" md="4">
                        <h3 className="titulos">Dados de pagamento</h3>
                        <FormGroup>
                            <InputMask
                            required
                            mask="9999 9999 9999 9999" 
                            className="Input" 
                            name="cartao" 
                            id="cartao" 
                            placeholder="Numero do cartão" 
                            />
                        </FormGroup>
                            <FormGroup>
                                <Input 
                                required
                                className="Input" 
                                type="text" 
                                name="nomeCarto" 
                                id="nomeCarto" 
                                placeholder="Nome impresso no cartão" 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                maxLength="3"
                                required
                                className="Input"  
                                type="number" 
                                name="ccv" 
                                id="ccv"
                                placeholder="CCV"
                                />
                            </FormGroup>  
                            <FormGroup >
                                <InputMask 
                                required
                                className="Input" 
                                mask="99/9999"   
                                name="dataValiade" 
                                id="dataValidade"
                                placeholder="Data de validade"
                                />
                            </FormGroup>    
                    </Col>
                    <Col xs="12" md="4">
                        <h3 className="titulos">Dados da entrega</h3>
                        <FormGroup>
                            <Input 
                            required
                            className="Input" 
                            type="text" 
                            name="nomeEntrega" 
                            id="nomeEntrega" 
                            placeholder="Nome" 
                            />
                        </FormGroup>
                            <FormGroup>
                                <Input 
                                required
                                className="Input"  
                                type="text" 
                                name="enderecoEntrega" 
                                id="enderecoEntrega" 
                                placeholder="Endereço" 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input 
                                required
                                className="Input"  
                                type="number" 
                                name="numero" 
                                id="ccv"
                                placeholder="numero"
                                />
                            </FormGroup>  
                            <FormGroup >
                                <Input 
                                required
                                className="Input"  
                                type="text" 
                                name="bairro" 
                                id="bairro"
                                placeholder="Bairro"
                                />
                            </FormGroup>   

                    </Col>
                    <Col xs="12" md="4">
                    <ListGroup>
							<h3 className="titulos">Resumo da compra</h3>
							<ListGroupItem  className="listaResumo">Quantidade de Produto:<br className="ajusta"/>{quantityItems}</ListGroupItem>
							
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
                      <Button href="/sucesso" color="success" className="buttonCheckout">Finalizar Compra</Button>
                    </Col>
                    </Row>
                </Form>
                    
                </Container>
    </>
        );
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
)(Checkout);