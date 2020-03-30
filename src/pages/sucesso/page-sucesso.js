import React, { Component } from 'react';
import './page-sucesso.css';
import { Button } from 'reactstrap'


class Sucesso extends Component{
render(){
  return ( 
    <div className="containerSucesso">
      <div className="contentSucesso">
        <section>
        <h1>Compra realizada com sucesso</h1>
       
        <form>
          <input className="Input" disabled="disabled" placeholder="Numero do pedido:"></input>
          <input className="Input" disabled="disabled" placeholder="Produto:"></input>
          <input className="Input" disabled="disabled" placeholder="Prazo de entrega:"></input>
        </form>
        <Button href="/" className="buttonSucesso" color="danger">Finalizar</Button> 
        </section>
      </div>
    </div>
  );
};
}

export default Sucesso;