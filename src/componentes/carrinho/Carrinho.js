import React, {Component} from 'react';
import "./Carrinho.css";
import { Link } from "react-router-dom";
import {
    Container,
	Row,
	Col,
	ListGroupItem,
	ListGroup,
	Button,
} from 'reactstrap';
class Carrinho extends Component {

	constructor(props) {
        super(props)
        // const{url} = this.props.match.url
        // const{pathname} = this.props.location.pathname
        const produto = props.location.state.produto;
		const cep = props.location.state.cep;
		const date = props.location.state.date;
		const number = props.location.state.number;
		const deliveryCost = props.location.state.deliveryCost;
		const cidade = props.location.state.cidade;
		const estado = props.location.state.estado;

        this.state = {
			produto: produto,
			cep:cep,
			date:date,
            number:number,
			deliveryCost:deliveryCost,
			total:produto.valor*number,
			cidade:cidade,
			estado:estado
		}
	}


    render() {
        return ( 
        <>
		<Container>
			<Row>
			<Col>
				<Row>
					<p>Produto</p>
					<p>Quantidade</p>
					<p>Entrega</p>
					<p>Preço</p>
				</Row>
				<Row>
					<p>{this.state.produto.nome}</p>
					<p>{this.state.number}</p>
					<p>{this.state.date} Dias</p>
					<p>{this.state.produto.valor}</p>
				</Row>
					<hr className="my-2" />
			</Col>
						<Col xs="12" md="4">
							<ListGroup>
								<h3 className="titulos">Resumo da compra</h3>
								<ListGroupItem className="listaResumo">
									Produto:{this.state.produto.nome}
								</ListGroupItem>
								<ListGroupItem className="listaResumo">
									Valor:R$ {this.state.produto.valor}
								</ListGroupItem>
								<ListGroupItem className="listaResumo">
									Frete:R$ {this.state.deliveryCost}
								</ListGroupItem>
								<ListGroupItem className="listaResumo">
									Valor total:R$ {this.state.total}
								</ListGroupItem>
							</ListGroup>
							<Link className="" to={{
                                pathname:`/checkout`,
                                state: {
								produto: this.state.produto,
								cep:this.state.cep,
								date:this.state.date,
            					number:this.state.number,
								deliveryCost:this.state.deliveryCost,
								total:this.state.total,
								cidade:this.state.cidade,
                                estado:this.state.estado
                                    }
                                    }}>
									<Button  href="/checkout"className="btnFinalizar"color="danger">Finalizar Compra</Button>
							</Link>
						</Col>
				</Row>
		</Container>
       
        </>
        )
    }
}
export default Carrinho;


