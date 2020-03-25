import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./ExibeProduto.css";
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap'


import * as ProdutoActions from "../../redux/actions/action.product";
import * as CartActions from "../../redux/actions/action.cart";
import CalculaFrete from '../CalculaFrete/CalculaFrete';
import ControlaQtd from "../ControlaQtd/ControlaQtd";


class ExibeProduto extends Component {
  render() {
    const {produto, number, addToCart} = this.props;
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
                        <h3 title="nome do Produto"
                            className="mt-2 mb-2">
                            {produto.descricao}
                        </h3>
                        <h5 title="Preço do Produto"
                            className="mt-2 mb-2 precoProduto">
                            {produto.valorUnitario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </h5>
                        <ControlaQtd/>
                        {/* ---------- Input com botão + e - ------*/}
                        {/* <Row className="mt-2 mb-2 p-2">          
                                <Button className="btnMenos" color="success" onClick={()=>decrementQuantity(number)}>-</Button>
                                <Input
                                    type="number"
                                    className="col-2 mt-2 quantidade"
                                    value={number}
                                />
                                <Button className="btnMais" color="success" onClick={()=>incrementQuantity(number)}>+</Button>
                        </Row>     */}
                        {/* ---------- Input com botão + e - ------*/}
                        <Button className="btn-success col-sm-12 col-md-6"onClick={()=>addToCart(produto,number)}>Adicionar ao Carrinho</Button>
                        <CalculaFrete/>
                    </div>
                </Col>
            </Row>
        </Container>
    </>

    );
  }
}

const mapStateToProps = state => ({

    produto: state.produtoReducer.produto,
    number: state.produtoReducer.number,
 
});

const mapDispatchToProps = dispatch =>({
    addToCart: (produto, number) => dispatch(CartActions.addToCart(produto,number)),
    incrementQuantity: (number)=> dispatch(ProdutoActions.incrementQuantity(number)),
    decrementQuantity: (number) => dispatch(ProdutoActions.decrementQuantity(number)),

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExibeProduto);
// const Frete = (cep, deliveryCost, date, day) => (
//     <>
//         <FormGroup className="mt-5 mb-2 p-2 border border-dark">
//             <Label>
//                 Informe seu CEP para calcular o frete
//             </Label>
//         <InputGroup>
//         {/*------------------------------aqui esta o InputMask*-----------------------------------------------*/}
//             <InputMask
//                 placeholder="00000-000"
//                 mask="99999-999"
//                 className="col-7 col-md-4"
//                 value={cep}
//                 // onChange={this.handleCepValeu}
//                 maskplaceholder={null}
//                 />
//     {/*------------------------------aqui esta o InputMask*-----------------------------------------------*/}
//             <Button
//                 color="success"
//                 >{/*onClick={this.sendCep}*/}
//                 Calcular Frete
//             </Button>
//          </InputGroup>
//                 <p className="mt-2 mb-2"
//                     title="Valor do Frete">
//                     Valor do Frete: R$ {deliveryCost}
//                 </p>
//                 <p className="mt-2 mb-2">
//                     Prazo de Entrega: {date} {day}
//                 </p>
//             </FormGroup>
//     </>
// );