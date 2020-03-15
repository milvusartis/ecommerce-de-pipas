import React, { Component } from 'react';
import "./ProdCompleto.css";
import InputMask from "react-input-mask";
import {
    Container,
    Row,
    Col,
    FormGroup,
    Navbar,
    Label,
    Input,
    InputGroup,
    Button
} from 'reactstrap'

import api from '../../services/api';
import ListaDeProdutos from '../ListaDeProdutos';
import { Link } from 'react-router-dom';



class ProdCompleto extends Component {




    constructor(props) {
        super(props)
        // const{url} = this.props.match.url
        // const{pathname} = this.props.location.pathname
        console.log(props)
        const produto = props.location.state.produto;


        this.state = {
            produto: produto,
            date: " ",
            day: " ",
            maxNumber: 5,//->quantidade de itens disponivel
            number: 1,//////////////////////////
            cep: "",////////////////////////////
            deliveryCost: " ",//////////////////

        };



    }

    // state = {

    //     produto:
    //     {
    //         "codigo": 1,
    //         "nome": "Pipa Grande Colorida",
    //         "descricao": "Pipa elegante",
    //         "imagem": "https://img.pngio.com/kites-png-vector-psd-and-clipart-with-transparent-background-pipa-png-260_412.png",
    //         "valor": 40.5,
    //         "disponibilidade": false
    //     },
    //     date: " ",
    //     day: " ",
    //     maxNumber: 5,//->quantidade de itens disponivel
    //     number: 1,//////////////////////////
    //     cep: "",////////////////////////////
    //     deliveryCost: " ",//////////////////

    //     recommendedProducts: []
    // }

    // async componentDidMount() {
    //     this.load();
    // }


    // load = async () => {

    //     const { id } = this.props.match.params;

    //     // const response = 

    //     await api.get(`/produto/${id}`).then((response) => {
    //         this.setState({ produto: response.data });
    //         // Success 🎉
    //         // console.log(response);
    //     })
    //         .catch((error) => {
    //             // Error 😨
    //             if (error.response) {
    //                 /*
    //                  * The request was made and the server responded with a
    //                  * status code that falls out of the range of 2xx
    //                  */
    //                 console.log(error.response.data);
    //                 console.log(error.response.status);
    //                 console.log(error.response.headers);
    //             } else if (error.request) {
    //                 /*
    //                  * The request was made but no response was received, `error.request`
    //                  * is an instance of XMLHttpRequest in the browser and an instance
    //                  * of http.ClientRequest in Node.js
    //                  */
    //                 console.log(error.request);
    //             } else {
    //                 // Something happened in setting up the request and triggered an Error
    //                 console.log('Error', error.message);
    //             }
    //             console.log(error.config);
    //         });


    // }




    validateInput = () => {
        if (this.state.number < 0) {
            this.setState({ number: 0 })
        }
        if (this.state.number > this.state.maxNumber) {
            this.setState({ number: this.state.maxNumber })
        }
    }

    decrement = () => {
        if (this.state.number > 0 && this.state.number <= this.state.maxNumber) {
            this.setState({ number: this.state.number - 1 })
            console.log(this.state.number)

        }
    }

    increment = () => {
        if (this.state.number >= 0 && this.state.number < this.state.maxNumber) {
            this.setState({ number: this.state.number + 1 })
            console.log(this.state.number)
        }
    }

    handleNumberValeu = (event) => {
        event.value = this.state.number;
    }

    handleCepValeu = (event) => {
        this.setState({ cep: event.target.value })
    }

    sendCep = () => {
        if (this.state.cep.replace(/-/, "").length === 8) {
            fetch("https://viacep.com.br/ws/" + this.state.cep.replace(/-/, "") + "/json")
                .then(response => response.json())
                .then(
                    (json) => {
                        if (json.erro === true) {
                            this.setState({ deliveryCost: " " })
                            this.setState({ date: " " })
                            this.setState({ day: " " })
                        }
                        else {
                            if (json.uf === "SP") {
                                this.setState({ deliveryCost: "R$4,00" })
                                this.setState({ date: "3" })
                                this.setState({ day: "dias" })

                                return json;
                            }
                            else {
                                this.setState({ deliveryCost: "R$8,00" })
                                this.setState({ date: "6" })
                                this.setState({ day: "dias" })

                                return json;
                            }
                        }
                    })
        } else {
            this.setState({ deliveryCost: " " })
            this.setState({ date: " " })
            this.setState({ day: " " })
        }


    }

    formataMoeda = (valor) => {
        return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }



    render() {
        const { produto } = this.state;
        return (
            <>
                <Container>
                    <Row>
                        <Col sm="12" md="5">
                            <img src={produto.imagem}
                                className="img-fluid mt-2 mb-2"
                                alt="imagem"
                                title="imagem" />
                        </Col>
                        <Col sm="12" md="7">
                            <div className="p-2">
                                <h3 title="nome do Produto"
                                    className="mt-2 mb-2">
                                    {produto.nome}
                                </h3>
                                <h5 title="Preço do Produto"
                                    className="mt-2 mb-2 precoProduto">
                                    {this.formataMoeda(produto.valor)}
                                </h5>
                                {/* <p title="Quantidade disponivel" 
                            className="mt-2 mb-2">
                                {this.state.maxNumber} unidades restante
                            </p> */}
                                <Row className="mt-2 mb-2 p-2">
                                    <Button className="btnMenos" color="success" onClick={this.decrement}>
                                        -
                                </Button>
                                    <Input
                                        type="number"
                                        className="col-2 mt-2 quantidade"
                                        value={this.state.number}
                                        onChange={this.handleNumberValeu}
                                        onInput={this.validateInput} />
                                    <Button className="btnMais" color="success" onClick={this.increment}>
                                        +
                                </Button>
                                </Row>

                                {/* <Button to="/carrinho"
                                    color="danger"
                                    className="btn-lg col-sm-12 col-md-6 mt-2">
                                    Comprar
                                </Button> */}
                                <div className="btn-comprar col-sm-12 col-md-6 mt-2" to="/carrinho">
                                    <Link to="/carrinho">Comprar</Link>
                                </div>

                            </div>
                            <FormGroup className="mt-5 mb-2 p-2 border border-dark">
                                <Label>
                                    Informe seu CEP para calcular o frete
                            </Label>
                                <InputGroup>
                                    {/*------------------------------aqui esta o InputMask*-----------------------------------------------*/}
                                    <InputMask
                                        placeholder="00000-000"
                                        mask="99999-999"
                                        className="col-7 col-md-4"
                                        //value={this.state.cep}
                                        onChange={this.handleCepValeu}
                                        maskPlaceholder={null}
                                    />
                                    {/*------------------------------aqui esta o InputMask*-----------------------------------------------*/}
                                    <Button
                                        color="success"
                                        onClick={this.sendCep}>
                                        Calcular Frete
                                    </Button>
                                </InputGroup>
                                <p className="mt-2 mb-2"
                                    title="Valor do Frete">
                                    Valor do Frete: {this.state.deliveryCost}
                                </p>
                                <p className="mt-2 mb-2">
                                    Prazo de Entrega: {this.state.date} {this.state.day}
                                </p>
                            </FormGroup>
                        </Col>
                        <Col sm="12" /*border border-dark"*/>
                            <h3 title="nome do Produto" className="mt-2 mb-2">
                                {this.state.nome}
                            </h3>
                            <p title="Descrição do Produto" className="mt-2 mb-2">
                                {this.state.descricao}
                            </p>
                        </Col>
                    </Row>
                    {/* <Navbar className="navbar-dark bg-secondary text-light mt-2 mb-2">
                        Voce tambem pode gostar
            </Navbar> */}

                    {/* <ListaDeProdutos /> */}

                </Container>

            </>
        )
    }
}
export default ProdCompleto;