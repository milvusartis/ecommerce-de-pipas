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







const Checkout = ({ state, geraPedido, changeFreteInfo }) => {
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




    const handdleCep = (e, endereco) => {
        const cep = e.target.value;
        // remove tudo que não for número
        const cepSemMascara = cep.replace(/[^0-9]+/g, '');
        //Valida se o cep tem 8 dígitos
        if (cepSemMascara !== "" && cepSemMascara.length === 8) {

            apiViacep.get(cepSemMascara + '/json', {

            }).then((response => {
                if (response.data.erro) {
                    toast.error("Digite um cep válido")
                }

                let novoEndereco = {

                    rua: response.data.logradouro,
                    // numero: "",
                    // complemento: response.data.complemento,
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
                        onBlur={e => { handdleCep(e, endereco); changeFreteInfo(endereco) }}

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
                        // maxLength="3"
                    />
                </FormGroup>
                <FormGroup>
                    <Input

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


    const validaCPF = (strCPF) => {
        let soma;
        let resto;
        let cpf = ""

        for (let i = 0; i < strCPF.toString().length; i++) {
            let char = strCPF.substring(i, i + 1);
            if (char !== "." && char !== "-")
                cpf += char;
        }
        soma = 0;
        if (cpf === "00000000000" || cpf === "11111111111" || cpf === "22222222222" || cpf === "33333333333" || cpf === "44444444444" || cpf === "55555555555" || cpf === "66666666666" || cpf === "77777777777" || cpf === "88888888888" || cpf === "99999999999")
            return false;

        for (let i = 1; i <= 9; i++)
            soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
        resto = (soma * 10) % 11;



        if ((resto === 10) || (resto === 11))
            resto = 0;
        if (resto !== parseInt(cpf.substring(9, 10)))
            return false;



        soma = 0;
        for (let i = 1; i <= 10; i++)
            soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
        resto = (soma * 10) % 11;

        if ((resto === 10) || (resto === 11))
            resto = 0;
        if (resto !== parseInt(cpf.substring(10, 11)))
            return false;

        return true;


    }


    const verificaCampos = (campo, qtd) => {
        const validador = campo.replace(/[^0-9]+/g, '');
        return (validador !== "" && validador.length === qtd)
    }

    const verificaCPF = (e) => {
        const campo = e.target.value
        const cpf = campo.replace(/[^0-9]+/g, '');


        if (!verificaCampos(campo, 11)) {
            e.target.focus()
            toast.warn("Por favor, digite um cpf com 11 dígitos")
        } else {
            if (!validaCPF(cpf)) {
                e.target.focus()
                toast.warn("Opa! Esse CPF não é válido")
            }
        }

    }

    
    const verificaCCV = (e) => {
        const campo = e.target.value
        if (!verificaCampos(campo, 3)) {
            e.target.focus()
            toast.warn("Por favor, digite um ccv com 3 dígitos")
        }
    }

    const verificaData = (e) => {
        const campo = e.target.value
        if (!verificaCampos(campo, 6)) {
            e.target.focus()
            toast.warn("Digita uma data com mês e ano")
        }
    }
    const verificaTelefone = (e) => {
        const campo = e.target.value
        if (!verificaCampos(campo, 10) || !verificaCampos(campo, 11)) {
            e.target.focus()
            toast.warn("Digita um telefone válido")
        }
    }

    return (
        <>


            <Container id="checkout">
                <Form
                    onSubmit={e => { toast.info("Pedido sendo processado, por favor aguarde"); geraPedido(enviarPedido(e, state)) }}
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
                                    onBlur={e => { verificaCCV (e) }}
                                    
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
                                    onBlur={e => { verificaData (e) }}
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
                                    onBlur={e => { verificaCPF(e) }}
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
                                    // onBlur={e => { verificaTelefone (e) }}
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
                                        <Button color="secondary" className="buttonCheckout2 " onClick={() => { buscar(); changeFreteInfo(endereco) }}>Dados cadastrados</Button>
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
    changeFreteInfo: (json) => dispatch(CartActions.changeFreteInfo(json))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Checkout);