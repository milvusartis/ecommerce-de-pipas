import React, { Component } from 'react';
import { Jumbotron, Button,Container, } from 'reactstrap';
import './Sucesso.css';


class Sucesso extends Component{
  /*constructor(props) {
    super(props)
    // const{url} = this.props.match.url
    // const{pathname} = this.props.location.pathname
    const produto = props.location.state.produto;
    const cep = props.location.state.cep;
    const date = props.location.state.date;
    const number = props.location.state.number;
    const deliveryCost = props.location.state.deliveryCost;
    const total  = props.location.state.total;
    const cidade = props.location.state.cidade;
		const estado = props.location.state.estado;

    this.state = {
        produto: produto,
        cep:cep,
        date:date,
        number:number,
        deliveryCost:deliveryCost,
        total:total,
        cidade:cidade,
			  estado:estado,
        npedido:"numero do pedido fake"
      }
}*/
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
        <p className="lead">Numero do pedido: {/*{this.state.npedido}*/}</p>
        <hr className="my-2" />
        <p className="lead">Produto: {/*{this.state.produto.nome}*/}</p>
        <p className="lead">
        <hr className="my-2" />
          <p>Prazo de entrega: {/*{this.state.date}*/} Dias</p>
        </p>
        <Button href="/"color="success">Finalizar</Button> 
      </Jumbotron>
    </div>
</Container>
    </>
  );
};
}

export default Sucesso;