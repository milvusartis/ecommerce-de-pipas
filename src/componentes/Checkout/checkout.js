import React, { Component } from 'react';
import './Checkout.css'
import { Col, Row, Button, Form, FormGroup, Label,Container,Input, ListGroup, ListGroupItem} from 'reactstrap';
// import { Link } from "react-router-dom";



class Checkout extends Component {
    constructor(props) {
        super(props)
        // const{url} = this.props.match.url
        // const{pathname} = this.props.location.pathname
        const produto = props.location.state.produto;
		const cep = props.location.state.cep;
		const date = props.location.state.date;
		const number = props.location.state.number;
		const deliveryCost = props.location.state.deliveryCost;
        const total  = props.location.state.total;
        const cidade = props.location.state.cidade;
		const estado = props.location.state.estado;

        this.state = {
            produto: produto,
			cep:cep,
			date:date,
            number:number,
			deliveryCost:deliveryCost,
            total:total,
            cidade:cidade,
			estado:estado
		}
    }
    finalizarCompra= async(event)=>{
        let cartao=event.target.cartao.value
        let nomeCarto=event.target.nomeCarto.value
        let ccv=event.target.ccv.value
        let dataValidade=event.target.dataValidade.value
        let nomeEntrega=event.target.nomeEntrega.value
        let enderecoEntrega=event.target.enderecoEntrega.value
        let numero=event.target.numero.value
        let bairro=event.target.bairro.value
        console.log(cartao+" "+nomeCarto+" "+ccv+" "+dataValidade+" "+nomeEntrega+" "+enderecoEntrega+" "+numero+" "+bairro)
        event.preventDefault();
        await 20;
    }
    render() {
        return (
            <>
            <Container id="checkout">
                <Form onSubmit={this.finalizarCompra}>  
                    <Row> 
                    <Col xs="12" md="4">
                        <h3 className="titulos">Dados de pagamento</h3>
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
                                <Input  type="date" name="dataValidade" id="dataValidade"placeholder="Data"/>
                            </FormGroup>    
                    </Col>
                    <Col xs="12" md="4">
                        <h3 className="titulos">Dados da entrega</h3>
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
                                <Input  type="number" name="numero" id="numero"placeholder="numero"/>
                            </FormGroup>  
                            <FormGroup >
                                <Label >Bairro</Label>
                                <Input  type="text" name="bairro" id="bairro"placeholder="Bairro"/>
                            </FormGroup>   

                    </Col>
                    <Col xs="12" md="4">
                    <ListGroup>
                        <h3 className="titulos">Resumo da compra</h3>
                        <ListGroupItem className="listaResumo">Produto:<br/>{this.state.produto.nome}</ListGroupItem>
                        <ListGroupItem className="listaResumo">Valor:<br/>R$ {this.state.produto.valor}</ListGroupItem>
                        <ListGroupItem className="listaResumo">Frete:<br/>R$ {this.state.deliveryCost}</ListGroupItem>
                        <ListGroupItem className="listaResumo">Prazo de entrega:<br/>{this.state.date} Dias</ListGroupItem>
                        <ListGroupItem className="listaResumo">Valor total:<br/>R$ {this.state.total}</ListGroupItem>
                    </ListGroup>
                    <Button className="btnFinalizar"color="success" type="submit" >Finalizar Compra</Button>
                    {/* <Link className="" to={{
                                pathname:`/sucesso`,
                                state: {
								produto: this.state.produto,
								cep:this.state.cep,
								date:this.state.date,
            					number:this.state.number,
								deliveryCost:this.state.deliveryCost,
                                total:this.state.total,
                                cidade:this.state.cidade,
                                estado:this.state.estado
                                    }}} onClick={this.finalizarCompra}>
                    </Link> */}
                    </Col>
                    </Row>
                </Form>
                    
                </Container>
    </>
        );
    }
}

export default Checkout;