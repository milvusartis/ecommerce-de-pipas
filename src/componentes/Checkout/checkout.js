import React, { Component } from 'react';
import './Checkout.css'
import { Col, Row, Button, Form, FormGroup, Label,Container,Input } from 'reactstrap';




class Checkout extends Component {
  
    render() {
        return (
            <>
            <Container id="checkout">
                <Form>  
                    <Row> 
                    <Col xs="12" md="4">
                        <h3>Dados de pagamento</h3>
                        <FormGroup>
                            <Label >Numero do cartão</Label>
                            <Input  type="number" name="cartao" id="cartao" placeholder="Numero do cartão" />
                        </FormGroup>
                            <FormGroup>
                                <Label>Nome do cartão</Label>
                                <Input  type="text" name="nomeCarto" id="nomeCarto" placeholder="Nome impresso no cartão" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Código de segurança</Label>
                                <Input  type="number" name="ccv" id="ccv"placeholder="CCV"/>
                            </FormGroup>  
                            <FormGroup >
                                <Label >Data de validade</Label>
                                <Input  type="date" name="dataValiade" id="dataValidade"placeholder="Data"/>
                            </FormGroup>    
                    </Col>
                    <Col xs="12" md="4">
                        <h3>Dados da entrega</h3>
                        <FormGroup>
                            <Label >Nome do destinatadio</Label>
                            <Input  type="text" name="nomeEntrega" id="nomeEntrega" placeholder="Nome" />
                        </FormGroup>
                            <FormGroup>
                                <Label>Endereço de entrega</Label>
                                <Input  type="text" name="enderecoEntrega" id="enderecoEntrega" placeholder="Endereço" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Numero</Label>
                                <Input  type="number" name="numero" id="ccv"placeholder="numero"/>
                            </FormGroup>  
                            <FormGroup >
                                <Label >Bairro</Label>
                                <Input  type="text" name="bairro" id="bairro"placeholder="Bairro"/>
                            </FormGroup>   

                    </Col>
                    <Col xs="12" md="4">
                        <h3>Resumo da compra</h3>
                        <FormGroup>
                            <Label >Nome do destinatadio</Label>
                            <Input  type="text" name="nomeEntrega" id="nomeEntrega" placeholder="Nome" />
                        </FormGroup>
                            <FormGroup>
                                <Label>Endereço de entrega</Label>
                                <Input  type="text" name="enderecoEntrega" id="enderecoEntrega" placeholder="Endereço" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Numero</Label>
                                <Input  type="number" name="numero" id="ccv"placeholder="numero"/>
                            </FormGroup>  
                            <FormGroup >
                                <Label >Bairro</Label>
                                <Input  type="text" name="bairro" id="bairro"placeholder="Bairro"/>
                            </FormGroup>   
                    </Col>
                    </Row>
                </Form>
                    

                <Button color="success">Finalizar Compra</Button>
                </Container>
    </>
        );
    }
}

export default Checkout;