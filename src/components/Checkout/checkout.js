import React, { Component } from 'react';
import '../../css/global.css'
import './Checkout.css';

import InputMask from 'react-input-mask';

import { connect } from 'react-redux';
import { Col, Row, Button, Form, FormGroup,Container,Input, ListGroup, ListGroupItem} from 'reactstrap';

class Checkout extends Component {
    teste=(pedido)=>{
        console.log(pedido)
    }
    enviarPedido=(event,state)=>{
        event.preventDefault()
        
        let nomeCartao=event.target.nomeCartao.value
        let telefoneTitular=event.target.telefoneTitular.value
        let cpfTitular=event.target.cpfTitular.value
        let cartao = event.target.cartao.value
        cartao=cartao.replace(/\s+/g, '')
        let dataValiade=event.target.dataValiade.value
        let separa=dataValiade.split("/")
        let data = new Date("01/"+separa[0]+"/"+separa[1]);
        dataValiade = data.toLocaleDateString()
        let ccv=event.target.ccv.value
        
        let nomeEntrega=event.target.nomeEntrega.value
        let cep=state.cep
        let enderecoEntrega=event.target.enderecoEntrega.value
        let numero=event.target.numero.value
        let bairro=event.target.bairro.value
        let cidadeEntrega=event.target.cidadeEntrega.value
        let ufEntrega=event.target.ufEntrega.value

        //falta a data do cartão
        //let idUser = JSON.parse(localStorage.getItem("usuario"))
        //let data = new Date("01/"+event.target.dataValiade.value)
        //console.log(data.toLocaleDateString())
        let idUser = {idUsuario:1}
        let usuario={
            idUsuario:idUser.idUsuario
        }
        
        let pagamento={
            titularPagamento:nomeCartao,
            telefoneTitular:telefoneTitular,
            cpfTitular:cpfTitular,
            formaPagamento:"cartão",
            numeroCartao:cartao,
            dataValiade:dataValiade,
            ccv:ccv,
        }
        
        let pedidoItens = state.addedItems.map((state) =>(
            [{quantidade:state.quantity,
            precoVendido:state.valorUnitario,
            produto:{
                idProduto:state.idProduto
            }}]
        ))
        
        let pedido ={
            valorFrete:state.valorFrete,
            diasParaEntrega:state.diasEntrega,
            pedidoItens:pedidoItens,
            usuario:usuario,
            pagamento:pagamento,
            entrega:{
                nomeEntrega:nomeEntrega,
                enderecoEntrega:enderecoEntrega,
                numeroEntrega:numero,
                bairroEntrega:bairro,
                cidadeEntrega:cidadeEntrega,
                ufEntrega:ufEntrega,
                cepEntrega:cep,
            }
        }
        return pedido
    }
    render() {
        const {state} = this.props
        return (
            <>
            <Container id="checkout">
                <Form onSubmit={e=>{this.teste(this.enviarPedido(e,state))}
                    }>  
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
                            defaultValue="1111111111111111"
                            />
                        </FormGroup>
                            <FormGroup>
                                <Input 
                                required
                                className="Input" 
                                type="text" 
                                name="nomeCartao" 
                                id="nomeCartao" 
                                placeholder="Nome impresso no cartão"
                                defaultValue="Josenildo"
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
                                maxLength="3"
                                defaultValue="432"
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
                                defaultValue="122028"
                                />
                            </FormGroup>
                            <FormGroup >
                                <InputMask 
                                required
                                className="Input" 
                                mask="999.999.999-99"   
                                name="cpfTitular" 
                                id="cpfTitular"
                                placeholder="CPF do Titular"
                                defaultValue="12332112312"
                                />
                            </FormGroup>
                            <FormGroup >
                                <InputMask 
                                required
                                className="Input" 
                                mask="(99)9-9999-9999"   
                                name="telefoneTitular" 
                                id="telefoneTitular" 
                                placeholder="Telefone do Titular"
                                defaultValue="11987654321"
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
                            defaultValue="Josenildo"
                            />
                        </FormGroup>
                        <FormGroup >
                            <InputMask 
                            required
                            className="Input" 
                            mask="99999-999"   
                            name="cepEntrega" 
                            id="cepEntrega" 
                            placeholder="CEP"
                            defaultValue={state.cep}
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
                            defaultValue="Rua qualquer"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input 
                            required
                            className="Input"  
                            type="number" 
                            name="numero" 
                            id="numero"
                            placeholder="numero"
                            maxLength="3"
                            defaultValue="123"
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
                            defaultValue="Santa Maria"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input 
                            required
                            className="Input"  
                            type="text" 
                            name="cidadeEntrega" 
                            id="cidadeEntrega"
                            placeholder="Cidade"
                            defaultValue="Osasco"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input 
                            required
                            className="Input"  
                            type="text" 
                            name="ufEntrega" 
                            id="ufEntrega"
                            placeholder="UF"
                            defaultValue="SP"
                            maxLength="2"
                            />
                        </FormGroup>
                           
                    </Col>
                    <Col xs="12" md="4">
                    <ListGroup>
							<h3 className="titulos">Resumo da compra</h3>
							<ListGroupItem  className="listaResumo">Quantidade de Produto:<br className="ajusta"/>{state.quantityItems}</ListGroupItem>
							
							<ListGroupItem className="listaResumo">Valor:<br/>{state.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</ListGroupItem>
							<ListGroupItem className="listaResumo">
								Frete:<br/>{state.valorFrete.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
							</ListGroupItem>
							<ListGroupItem className="listaResumo">
								Prazo de Entrega:<br/>{state.diasEntrega} Dias
							</ListGroupItem>
							<ListGroupItem className="listaResumo">
								Valor total:<br/>{(state.total+state.diasEntrega).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
							</ListGroupItem>
						</ListGroup>
                      <Button color="success" className="buttonCheckout">Finalizar Compra</Button>
                    </Col>
                    </Row>
                </Form>
                    
                </Container>
    </>
        );
    }
}


const mapStateToProps = state => ({
    state:state.carrinhoReducer,
});

const mapDispatchToProps = dispatch => ({

})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Checkout);