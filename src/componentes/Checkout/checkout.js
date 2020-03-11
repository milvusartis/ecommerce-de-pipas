import React, { Component } from 'react';
import './Checkout.css'
import { Col, Row, Button, Form, FormGroup, Label,Container,Input } from 'reactstrap';




class Checkout extends Component {
  
    render() {
        return (
            <> <Container className="mt-5" id="checkout"xs="12" md="8">
                <Form>
                <Row>
                    <Col xs="12" md="4">
                    <FormGroup>
                        <Label >Numero do cartão</Label>
                        <Input  type="number" name="cartao" id="cartao" placeholder="Numero do cartão" />
                    </FormGroup>
                    </Col>
                    <Col xs="12" md="4">
                    <FormGroup>
                        <Label>Nome do cartão</Label>
                        <Input  type="text" name="nomeCarto" id="nomeCarto" placeholder="Nome impresso no cartão" />
                    </FormGroup>
                    </Col>
                    <Col xs="12" md="2" >
                    <FormGroup>
                        <Label>Código de segurança</Label>
                        <Input  type="number" name="ccv" id="ccv"placeholder="CCV"/>
                    </FormGroup>  
                    </Col>
                    <Col xs="12" md="2" >
                    <FormGroup >
                        <Label >Data de validade</Label>
                        <Input  type="date" name="dataValiade" id="dataValidade"placeholder="Data"/>
                    </FormGroup>  
                    </Col>
                </Row>
                <FormGroup>
                    <Label>Nome do destinatario </Label>
                    <Input  type="text" name="nomeDestinatario" id="nomeDestinatario" placeholder="Nome"/>
                </FormGroup>
                <Row>
                <Col xs="12" md="8">
                <FormGroup>
                    <Label>Endereço de entrega</Label>
                    <Input  type="text" name="endereco" id="endereco" placeholder="Nome da rua"/>
                </FormGroup>
                </Col>
                <Col xs="6" md="2">
                    <FormGroup>
                        <Label for="exampleZip">Numero</Label>
                        <Input  type="number" name="numeroCasa" id="numeroCasa" placeholder="Numero"/>
                    </FormGroup>  
                    </Col>
                    <Col xs="6" md="2">
                    <FormGroup>
                        <Label>Complemento</Label>
                        <Input  type="text" name="complemento" id="complemento"placeholder="Complemento"/>
                    </FormGroup>  
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="4">
                    <FormGroup>
                        <Label for="exampleCity">Bairro</Label>
                        <Input  type="text" name="bairro" id="bairro"placeholder="Bairro"/>
                    </FormGroup>
                    </Col>
                    <Col xs="6" md="2">
                    <FormGroup>
                        <Label>Cidade</Label>
                        <Input  type="text" name="cidade" id="cidade"placeholder="Cidade"/>
                    </FormGroup>
                    </Col>
                    <Col xs="6" md="2">
                    <FormGroup>
                        <Label>Estado</Label>
                        <Input  type="text" name="estado" id="estado"placeholder="Estado"/>
                    </FormGroup>  
                    </Col>
                </Row>
               
                <Button color="success">Finalizar Compra</Button>
                </Form>
                </Container>
    </>
        );
    }
}

export default Checkout;