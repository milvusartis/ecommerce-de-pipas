import React, { Component } from 'react';
import { Jumbotron, Button,Container, } from 'reactstrap';
import './page-sucesso.css';


class Sucesso extends Component{
render(){
  return (
      <>
      <Container>    
    <div>
      <Jumbotron>
        <h1 className="display-3">Compra realizada com sucesso</h1>
        <br></br>
        <br></br>
        <br></br>
        <p className="lead">Numero do pedido: </p>
        <hr className="my-2" />
        <p className="lead">Produto:</p>
        <p className="lead">
        <hr className="my-2" />
        <p>Prazo de entrega:</p>
        </p>
        <Button href="/" className="buttonSucesso" color="danger">Finalizar</Button> 
      </Jumbotron>
    </div>
</Container>
    </>
  );
};
}

export default Sucesso;