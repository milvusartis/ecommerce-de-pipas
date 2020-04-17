import React from 'react';
import '../../scss/global.scss'
import './Checkout.scss';

import InputMask from 'react-input-mask';

import { connect } from 'react-redux';
import { Col, Row, Button, Form, FormGroup, Container, Input, ListGroup, ListGroupItem } from 'reactstrap';

import * as CartActions from "../../redux/actions/action.cart";
import api from '../../services/api';
import { toast } from 'react-toastify';

import apiViacep from '../../services/api-cep';



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







const Checkout = ({ state, geraPedido }) => {
    const [showCol2, setShowCol2] = React.useState(false);
    const [cliente, setCliente] = React.useState({
        usuario: {},
        // endereco: {
        // }
    });
    const [endereco, setEndereco] = React.useState({});



    const toggleComponent = () => {
        setShowCol2(!showCol2)
    }


    async function buscar() {
        const response = await api.get(`/perfilusuario`);
        setCliente(response.data);
        setEndereco(response.data.endereco)
        toggleComponent();
    }



    // const handdleEndereco = (cep) => {

    //     // .catch((error) => {



    //     // });
    // }

    const handdleCep = (e, endereco) => {
        const cep = e.target.value;
        // remove tudo que não for número
        const cepSemMascara = cep.replace(/[^0-9]+/g, '');

        console.log(cepSemMascara)
        //Valida se o cep tem 8 dígitos
        if (cepSemMascara !== "" && cepSemMascara.length === 8) {

            apiViacep.get(cepSemMascara + '/json', {

            }).then((response => {
                if (response.data.erro) {
                    toast.error("Digite um cep válido")
                }

                let novoEndereco = {

                    rua: response.data.logradouro,
                    numero: "",
                    complemento: response.data.complemento,
                    bairro: response.data.bairro,
                    cidade: response.data.localidade,
                    uf: response.data.uf,

                }
                setEndereco(novoEndereco);
      
            }))

        }
        else {

            toast.warn("Cep não preenchido completamente");
        }

    }


    const handdler = {

        col1: (usuario, endereco) => (
            <>
                <FormGroup>
                    <Input
                        required
                        className="Input"
                        type="text"
                        name="nomeEntrega"
                        id="nomeEntrega"
                        value={usuario.nome}
                        placeholder="Nome"
                    />
                </FormGroup>
                <FormGroup >
                    <InputMask
                        required
                        className="Input"
                        mask="99999-999"
                        name="cepEntrega"
                        // onClick={()=>{getCep()}}
                        id="cepEntrega"
                        value={endereco.cep}
                        placeholder="CEP"
                        onBlur={e => handdleCep(e, endereco)}
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        required
                        className="Input"
                        type="text"
                        name="enderecoEntrega"
                        id="enderecoEntrega"
                        value={endereco.rua}
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
                        value={endereco.numero}
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
                        value={endereco.complemento}
                        placeholder="Complemento"
                    />
                </FormGroup>
                <FormGroup >
                    <Input
                        required
                        className="Input"
                        type="text"
                        name="bairro"
                        value={endereco.bairro}
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
                        value={endereco.cidade}
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
                        value={endereco.uf}
                        placeholder="UF"
                        maxLength="2"
                    />
                </FormGroup>

            </>
        )
    };

    const showHanddler = (group, usuario, endereco) => {
        const handler = handdler[group]
        return handler(usuario, endereco);
    };




    return (
        <>


            <Container id="checkout">
                <Form
                    onSubmit={e => { geraPedido(enviarPedido(e, state)) }}
                >

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
                                    name="nomeCartao"
                                    id="nomeCartao"

                                    placeholder="Nome impresso no cartão"
                                >

                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <InputMask
                                    mask="999"
                                    required
                                    className="Input"
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
                                />
                            </FormGroup>

                        </Col>
                        <Col xs="12" md="4">
                            {/* <button onClick={this.buscar()}>Usar dados cadastrados</button>
                            <button>Cadastrar novos dados</button> */}
                            <h3 className="titulos">Dados da entrega</h3>

                            {showCol2 ?
                                (
                                    <>
                                        {(showHanddler("col1", cliente.usuario, endereco))}
                                    </>
                                )
                                :
                                (
                                    <>
                                        <Button color="secondary" className="buttonCheckout2 " onClick={buscar}>Dados cadastrados</Button>
                                        <Button color="secondary" className="buttonCheckout2 " onClick={toggleComponent}>Novos dados</Button>
                                    </>
                                )
                            }




                        </Col>
                        <Col xs="12" md="4">
                            <ListGroup>
                                <h3 className="titulos">Resumo da compra</h3>
                                <ListGroupItem className="listaResumo">Quantidade de Produto:<br className="ajusta" />{state.quantityItems}</ListGroupItem>

                                <ListGroupItem className="listaResumo">Valor:<br />{state.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</ListGroupItem>
                                <ListGroupItem className="listaResumo">
                                    Frete:<br />{state.valorFrete.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </ListGroupItem>
                                <ListGroupItem className="listaResumo">
                                    Prazo de Entrega:<br />{state.diasEntrega} Dias
                             </ListGroupItem>
                                <ListGroupItem className="listaResumo">
                                    Valor total:<br />{(state.total + state.valorFrete).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                    {console.log(state.valorFrete)}
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
    geraPedido: (pedido) => dispatch(CartActions.geraPedido(pedido)),
    getCep: (cep) => dispatch(CartActions.getCep(cep))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Checkout);