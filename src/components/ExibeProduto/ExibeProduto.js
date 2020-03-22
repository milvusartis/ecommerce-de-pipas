import React from 'react';
import { connect } from 'react-redux';
import "./ExibeProduto.css";
import InputMask from "react-input-mask";
import {
    Container,
    Row,
    Col,
    FormGroup,
    Label,
    Input,
    InputGroup,
    Button
} from 'reactstrap'



import * as ProdutoActions from "../../redux/actions/action.product";
import * as CartActions from "../../redux/actions/action.cart";

const ExibeProduto = ({ produto, number, dispatch }) => (
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
                    {/* <Col sm="12">
                        <h3 title="nome do Produto" className="mt-2 mb-2">
                            {produto.nome}
                        </h3>
                        <p title="Descrição do Produto" className="mt-2 mb-2">
                            {produto.descricao}
                        </p>
                    </Col> */}
                    <div className="p-2">
                        <h3 title="nome do Produto"
                            className="mt-2 mb-2">
                            {produto.nome}
                        </h3>
                        <h3 title="nome do Produto"
                            className="mt-2 mb-2">
                            {produto.descricao}
                        </h3>
                        <h5 title="Preço do Produto"
                            className="mt-2 mb-2 precoProduto">
                            {produto.valorUnitario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </h5>
                        <Row className="mt-2 mb-2 p-2">          
                                <Button className="btnMenos" color="success" onClick={()=>dispatch(ProdutoActions.decrementQuantity(number))}>-</Button>
                                <Input
                                    type="number"
                                    className="col-2 mt-2 quantidade"
                                    value={number}
                                />
                                <Button className="btnMais" color="success" onClick={()=>dispatch(ProdutoActions.incrementQuantity(number))}>+</Button>
                        </Row>
                        {/*<div className="btn-comprar col-sm-12 col-md-6 mt-2" to="/carrinho"/>*/}
                        {/*<Link to="/carrinho " onClick={()=>dispatch(CartActions.addToCart(produto))}>Comprar</Link>*/}
                        <Button className="btn-success col-sm-12 col-md-6"onClick={()=>dispatch(CartActions.addToCart(produto,number))}>Adicionar ao Carrinho</Button>
                        {Frete()}
                    </div>
                </Col>
            </Row>
        </Container>
    </>
);

export default connect(state => ({
    produto: state.produtoReducer.produto,
    number: state.produtoReducer.number,
}))(ExibeProduto);

const Contador = (number, dispatch) => (
   <>
        <Button className="btnMenos" color="success" onClick={()=>dispatch(ProdutoActions.decrementQuantity(number))}>
            -
        </Button>
        <Input
            type="number"
            className="col-2 mt-2 quantidade"
            value={number}
         />
        <Button className="btnMais" color="success" onClick={()=>dispatch(ProdutoActions.incrementQuantity(number))}>
            +
        </Button>
    </>
);


const Frete = (cep, deliveryCost, date, day) => (
    <>
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
                value={cep}
                // onChange={this.handleCepValeu}
                maskPlaceholder={null}
                />
    {/*------------------------------aqui esta o InputMask*-----------------------------------------------*/}
            <Button
                color="success"
                >{/*onClick={this.sendCep}*/}
                Calcular Frete
            </Button>
         </InputGroup>
                <p className="mt-2 mb-2"
                    title="Valor do Frete">
                    Valor do Frete: R$ {deliveryCost}
                </p>
                <p className="mt-2 mb-2">
                    Prazo de Entrega: {date} {day}
                </p>
            </FormGroup>
    </>
);



const sendCep = (cep) => {
    
}