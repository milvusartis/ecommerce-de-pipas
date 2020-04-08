import React, { Component } from 'react';
import './page-sucesso.scss';
import { Button } from 'reactstrap'
import { connect } from 'react-redux';

class Sucesso extends Component{
render(){
  const {state} = this.props
  return ( 
    <div className="containerSucesso">
      <div className="contentSucesso">
        <section>
        <h1>Compra realizada com sucesso</h1>
       
        <form>
          <input className="Input" disabled="disabled" placeholder={"Numero do pedido: "+state.idPedido}></input>
          <input className="Input" disabled="disabled" placeholder={"Quantidade comprada: "+state.quantityItems+" Produtos"}></input>
          <input className="Input" disabled="disabled" placeholder={"Prazo de entrega: "+state.diasEntrega+" dias"}></input>
          <input className="Input" disabled="disabled" placeholder={"Valor total da compra: "+(state.total+state.diasEntrega).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}></input>
        </form>
        <Button href="/" className="buttonSucesso" color="danger" onClick={()=>localStorage.clear()}>Finalizar</Button> 
        </section>
      </div>
    </div>
  );
};
}
const mapStateToProps = state => ({
  state:state.carrinhoReducer,
});

const mapDispatchToProps = dispatch => ({
  
})

export default connect(
mapStateToProps,
mapDispatchToProps
)(Sucesso);