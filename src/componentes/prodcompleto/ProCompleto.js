import React, { Component } from 'react';
import "./ProdCompleto.css";
import fotoMaior from "./img-mockup-menor.png";
import fotoMenor from "./img-mockup-menor-2.png";
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

class ProdCompleto extends Component {
    
    state={
        productName:"Pipa para Festival",
        productImage:fotoMaior,
        productDescription:
        `Lorem ipsum adipiscing sed ligula vivamus litora conubia scelerisque,
        malesuada platea suscipit dolor blandit est dictum metus, tortor praesent
        nulla malesuada conubia aptent ullamcorper. velit nisl nostra gravida felis
        in porttitor massa pellentesque aliquam mollis aliquam, maecenas accumsan
        ante magna turpis venenatis aliquam sem tincidunt ad praesent posuere,
        proin dui turpis iaculis cras rhoncus maecenas sem convallis suspendisse.
        praesent sodales orci mattis orci sem nisi posuere ut eleifend himenaeos
        varius id, consequat fringilla quis ligula est quam lorem molestie aenean
        hac. tempor dapibus turpis curabitur justo per blandit purus ante aenean,
        sodales nisl nisi diam blandit eu iaculis aliquam dui, sed a venenatis orci
        tempus sapien nam purus.`,
        productValeu:20.00,
        maxNumber:5,
        number:1,
        cep:"",
        deliveryCost:" ",
        recommendedProducts:[
        {
            title:"Pipa Linda!",
            image:fotoMenor,
            value:20.00
        },
        {
            title:"Pipa Bonita!",
            image:fotoMenor,
            value:20.00
        },
        {
            title:"Pipa Formosa!",
            image:fotoMenor,
            value:20.00
        },
        {
            title:"Pipa Maravilhosa!",
            image:fotoMenor,
            value:20.00
        }   
        ]
    }

    validateInput=()=>{
        if (this.state.number<0) {
            this.setState({number:0})
        }
        if (this.state.number>this.state.maxNumber) {
            this.setState({number:this.state.maxNumber})
        }
    }

    decrement=()=>{
        if (this.state.number>0&&this.state.number<=this.state.maxNumber) {
            this.setState({number:this.state.number-1})
            console.log(this.state.number)

        }
    }

    increment=()=>{
        if (this.state.number>=0&&this.state.number<this.state.maxNumber){
            this.setState({number:this.state.number+1})
            console.log(this.state.number)
        }
    }

    handleNumberValeu=(event)=>{
        event.value=this.state.number;
    }

    handleCepValeu=(event)=>{
        this.setState({cep:event.target.value})
    }

    sendCep=()=>{
        if(this.state.cep.replace(/-/,"").length===8){
            fetch("https://viacep.com.br/ws/"+this.state.cep.replace(/-/,"")+"/json")
            .then(response=>response.json())
            .then(
            (json)=>{
            if(json.erro===true){
                this.setState({deliveryCost:" "})
            }
            else{
                if(json.uf==="SP"){
                    this.setState({deliveryCost:"R$4,00"})
                }
                else{
                    this.setState({deliveryCost:"R$8,00"})
                }
            }
        })
        }else{
            this.setState({deliveryCost:" "})
        }
    }

render() {
    return (
        <>
            <Container>
                <Row>
                    <Col sm="12" md="5">
                        <img src={this.state.productImage} 
                        className="img-fluid mt-2 mb-2" 
                        alt="imagemProduto" 
                        title="imagemProduto"/>
                    </Col>
                    <Col sm="12" md="7">
                        <div className="p-2">
                            <h3 title="Nome do Produto" 
                            className="mt-2 mb-2">
                                {this.state.productName}
                            </h3>
                            <h5 title="Preço do Produto" 
                            className="mt-2 mb-2">
                                R$ {this.state.productValeu}
                            </h5>
                            <p title="Quantidade disponivel" 
                            className="mt-2 mb-2">
                                {this.state.maxNumber} unidades restante
                            </p>
                            <Row className="mt-2 mb-2 p-2">
                                <Button color ="success"onClick={this.decrement}>
                                    -
                                </Button>
                                <Input 
                                type="number" 
                                className="col-2 mt-2"
                                value={this.state.number} 
                                onChange={this.handleNumberValeu} 
                                onInput={this.validateInput}/>
                                <Button color="success" onClick={this.increment}>
                                    +
                                </Button>
                            </Row>
                            <Button href="http://localhost:3000/checkout"
                            color="success" 
                            className="btn-lg col-sm-12 col-md-6 mt-2">
                                Comprar
                            </Button>
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
                        </FormGroup>
                    </Col>
                    <Col sm="12" /*border border-dark"*/>
                        <h3 title="Nome do Produto" className="mt-2 mb-2">
                            {this.state.productName}
                        </h3>
                        <p title="Descrição do Produto" className="mt-2 mb-2">
                            {this.state.productDescription}
                        </p>
                    </Col>
                </Row>
                <Navbar className="navbar-dark bg-success text-light mt-2 mb-2">
                Voce tambem pode gostar
            </Navbar>
            <Container>
                <Row>
                    <Col sm="5" md="3">
                        <div>
                            <img src={this.state.recommendedProducts[0].image} 
                            className="mt-2 mb-2 img-fluid" 
                            alt="imagemProduto" 
                            title="imagemProduto" />
                            <h5 title="Titulo Produto 1">{this.state.recommendedProducts[0].title}</h5>
                            <label>R${this.state.recommendedProducts[0].value}</label>
                        </div>
                    </Col>
                    <Col sm="5" md="3">
                        <div>
                            <img src={this.state.recommendedProducts[1].image} 
                            className="mt-2 mb-2 img-fluid" 
                            alt="imagemProduto" 
                            title="imagemProduto" />
                            <h5 title="Titulo Produto 2">{this.state.recommendedProducts[1].title}</h5>
                            <label>R${this.state.recommendedProducts[1].value}</label>
                        </div>
                    </Col>
                    <Col sm="5" md="3">
                        <div>
                            <img src={this.state.recommendedProducts[2].image} 
                            className="mt-2 mb-2 img-fluid" 
                            alt="imagemProduto" 
                            title="imagemProduto" />
                            <h5 title="Titulo Produto 3">{this.state.recommendedProducts[2].title}</h5>
                            <label>R${this.state.recommendedProducts[2].value}</label>
                        </div>
                    </Col>
                    <Col sm="5" md="3">
                        <div>
                            <img src={this.state.recommendedProducts[3].image} 
                            className="mt-2 mb-2 img-fluid" 
                            alt="imagemProduto" 
                            title="imagemProduto" />
                            <h5 title="Titulo Produto 4">{this.state.recommendedProducts[3].title}</h5>
                            <label>R${this.state.recommendedProducts[3].value}</label>
                        </div>
                    </Col>
                </Row>
            </Container>
            </Container>
            
        </>
    )
}
}
export default ProdCompleto;