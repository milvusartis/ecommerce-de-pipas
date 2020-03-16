import React from 'react';
import { connect } from 'react-redux';

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






const ProdutoCompleto = ({produto, number, deliveryCost,date, day, nome, descricao}) => (
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
                            {produto.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </h5>
                        {/* <p title="Quantidade disponivel" 
                className="mt-2 mb-2">
                    {this.state.maxNumber} unidades restante
                </p> */}


                        <Row className="mt-2 mb-2 p-2">
                            {/* <Button className="btnMenos" color="success" onClick={this.decrement}>
                                -
                    </Button> */}
                            <Input
                                type="number"
                                className="col-2 mt-2 quantidade"
                                value={number}
                                // onChange={this.handleNumberValeu}
                                // onInput={this.validateInput} 
                                />
                            <Button className="btnMais" color="success"
                            // onClick={this.increment}
                            >
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
                              
                                // onChange={this.handleCepValeu}
                                maskPlaceholder={null}
                            />
                            {/*------------------------------aqui esta o InputMask*-----------------------------------------------*/}
                            <Button
                                color="success"
                                // onClick={this.sendCep}
                                >
                                Calcular Frete
                        </Button>
                        </InputGroup>
                        <p className="mt-2 mb-2"
                            title="Valor do Frete">
                            Valor do Frete: {deliveryCost}
                        </p>
                        <p className="mt-2 mb-2">
                            Prazo de Entrega: {date} {day}
                        </p>
                    </FormGroup>
                </Col>
                <Col sm="12" /*border border-dark"*/>
                    <h3 title="nome do Produto" className="mt-2 mb-2">
                        {nome}
                    </h3>
                    <p title="Descrição do Produto" className="mt-2 mb-2">
                        {descricao}
                    </p>
                </Col>
            </Row>

            
            {/* <Navbar className="navbar-dark bg-secondary text-light mt-2 mb-2">
            Voce tambem pode gostar
            </Navbar> */}

            {/* <ListaDeProdutos /> */}

        </Container>

    </>

);

export default connect(state=>({
    produto:state.produto,
    number:state.number,
    deliveryCost:state.deliveryCost,
    date:state.date,
    day:state.day,
    nome:state.nome,
    descricao:state.descricao,

})) (ProdutoCompleto);


