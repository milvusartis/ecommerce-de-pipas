import React, { useState, useEffect } from 'react';
// import '../../css/global.scss'
import './Checkout.scss';

import InputMask from 'react-input-mask';

import { connect } from 'react-redux';
import { Col, Row, Button, Form, FormGroup, Container, Input, ListGroup, ListGroupItem } from 'reactstrap';

import * as CartActions from "../../redux/actions/action.cart";
import { Link } from 'react-router-dom';


const enviarPedido = (event, state) => {
    event.preventDefault()

    let nomeCartao = event.target.nomeCartao.value
    let telefoneTitular = event.target.telefoneTitular.value
    telefoneTitular = telefoneTitular.replace('(', '')
    telefoneTitular = telefoneTitular.replace(')', '')
    telefoneTitular = telefoneTitular.replace('-', '')
    telefoneTitular = telefoneTitular.replace('-', '')
    let cpfTitular = event.target.cpfTitular.value
    cpfTitular = cpfTitular.replace('.', '')
    cpfTitular = cpfTitular.replace('.', '')
    cpfTitular = cpfTitular.replace('-', '')
    let nCartao = event.target.cartao.value
    nCartao = nCartao.replace(/\s+/g, '')
    let dataValiade = event.target.dataValiade.value
    let separa = dataValiade.split("/")
    let data = new Date("01/" + separa[0] + "/" + separa[1]);
    dataValiade = data.toLocaleDateString()
    let ccv = event.target.ccv.value

    let nomeEntrega = event.target.nomeEntrega.value
    let cep = state.cep
    let enderecoEntrega = event.target.enderecoEntrega.value
    let numero = event.target.numero.value
    let complemento = event.target.complementoEntrega.value
    let bairro = event.target.bairro.value
    let cidadeEntrega = event.target.cidadeEntrega.value
    let ufEntrega = event.target.ufEntrega.value

    let idUser = JSON.parse(sessionStorage.getItem("usuario"))
    let usuario = {
        idUsuario: idUser.idUsuario
    }

    let pagamento = {
        titularPagamento: nomeCartao,
        telefoneTitular: telefoneTitular,
        cpfTitular: cpfTitular,
        formaPagamento: "cartão",
    }

    let cartao = {
        numeroCartao: nCartao,
        dataValidade: dataValiade,
        ccv: ccv,
    }
    let pedidoItens = state.addedItems.map((state) => (
        {
            quantidade: state.quantity,
            precoVendido: state.valorUnitario,
            produto: {
                idProduto: state.idProduto
            }
        }
    ))
    let pedido = {
        valorFrete: state.valorFrete,
        diasParaEntrega: state.diasEntrega,
        pedidoItens: pedidoItens,
    }
    let json = {
        pedido: pedido,
        usuario: usuario,
        pagamento: pagamento,
        cartao: cartao,
        nomeEntrega: nomeEntrega,
        enderecoEntrega: {
            rua: enderecoEntrega,
            numero: numero,
            complemento: complemento,
            bairro: bairro,
            cidade: cidadeEntrega,
            uf: ufEntrega,
            cep: cep,
        }
    }
    return json
}






const Checkout = (state, geraPedido) => {
    const [cliente, setCliente] = useState({});
    const [showCol1, setShowCol1] = React.useState(false);




    const handdler = {

        col1: cliente => (
            <>
            {console.log(cliente)}
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
                        name="nomeCartao"
                        id="nomeCartao"
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
                        className="date"
                        mask="99/9999"
                        name="dataValiade"
                        id="dataVagit lidade"
                        placeholder="Data de validade"
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
                        value={cliente.cpf}
                        
                
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
                        value={cliente.telefone}
                    />
                </FormGroup>
            </>
        ),
        col2: cliente => (
            <>
            {console.log(cliente)}
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
                            <FormGroup >
                                <InputMask
                                    required
                                    className="Input"
                                    mask="99999-999"
                                    name="cepEntrega"
                                    id="cepEntrega"
                                    placeholder="CEP"
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
                                    id="numero"
                                    placeholder="numero"
                                    maxLength="3"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    required
                                    className="Input"
                                    type="text"
                                    name="complementoEntrega"
                                    id="complementoEntrega"
                                    placeholder="Complemento"
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
                            <FormGroup>
                                <Input
                                    required
                                    className="Input"
                                    type="text"
                                    name="cidadeEntrega"
                                    id="cidadeEntrega"
                                    placeholder="Cidade"
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
                                    maxLength="2"
                                />
                            </FormGroup>
            </>
        ),
    };
    
    const showHanddler = (group, cliente) => {
        const handler = handdler[group]
        return handler(cliente);
    };

    useEffect(() => {

        setCliente(
            {
                "idCliente": 1,
                "cpf": "04205595310",
                "rg": "2003034096537",
                "telefone": "11964367824",
                "usuario": {
                  "idUsuario": 1,
                  "nome": "Diógenes Bezerra Pereira",
                  "email": "ads.diogenes@gmail.com",
                  "perfis": [
                    "ADMIN",
                    "CLIENTE"
                  ]
                },
                "endereco": {
                  "idEndereco": 2,
                  "rua": "Rua Eugênia de Carvalho",
                  "numero": 525,
                  "complemento": "Casa A",
                  "bairro": "Vila Matilde",
                  "cidade": "São Paulo",
                  "uf": "SP",
                  "cep": "03516000"
                }
              }
        )

    
    }, []);
    
    return (
        
        <>

            <Container id="checkout">
                <Form
                    onSubmit={e => { geraPedido(this.enviarPedido(e, cliente)) }}
                >
                    <Row>
                        <Col xs="12" md="4">


                            {showCol1 ?
                                (

                                    <>
                                        {(showHanddler("col1", {}))}
                                        <Button color="secondary" className="buttonCheckout">Atualizar dados</Button>
                                    </>

                                )

                                :
                                (
                                    <>
                                        {(showHanddler("col1",cliente))}
                                        <Button color="secondary" className="buttonCheckout">Utilizar dados cadastrados</Button>
                                    </>
                                )
                            }


                        </Col>
                        <Col xs="12" md="4">
                        {showCol1 ?
                                (

                                    <>
                                        {(showHanddler("col2", cliente.usuario))}
                                        <Button color="secondary" className="buttonCheckout">Atualizar dados</Button>
                                    </>

                                )

                                :
                                (
                                    <>
                                        {(showHanddler("col2", cliente.usuario))}
                                        <Button color="secondary" className="buttonCheckout">Utilizar dados cadastrados</Button>
                                    </>
                                )
                            }

                        </Col>
                        <Col xs="12" md="4">
                            <ListGroup>
                                <h3 className="titulos">Resumo da compra</h3>
                                <ListGroupItem className="listaResumo">Quantidade de Produto:<br className="ajusta" />{state.quantityItems}</ListGroupItem>

                                {/* <ListGroupItem className="listaResumo">Valor:<br/>{state.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</ListGroupItem> */}
                                <ListGroupItem className="listaResumo">
                                    {/* Frete:<br/>{state.valorFrete.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} */}
                                </ListGroupItem>
                                <ListGroupItem className="listaResumo">
                                    Prazo de Entrega:<br />{state.diasEntrega} Dias
                        </ListGroupItem>
                                <ListGroupItem className="listaResumo">
                                    {/* Valor total:<br/>{(state.total+state.diasEntrega).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} */}
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

const mapStateToProps = state => ({
    state: state.carrinhoReducer,
});

const mapDispatchToProps = dispatch => ({
    geraPedido: (pedido) => dispatch(CartActions.geraPedido(pedido))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Checkout);