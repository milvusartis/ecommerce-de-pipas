import React, { Component } from 'react';
import "./prodcompleto.css";
import fotoMaior from "./img-mockup-menor.png";
import fotoMenor from "./img-mockup-menor-2.png";
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
        numero:1
    };

    validaQtd =()=> {
        if ( this.state.numero<0) {
            this.setState({numero:0})
        }
        if (this.state.numero>5) {
            this.setState({numero:5})
        }
    }
    subtrai=()=>{
        if (this.state.numero>0&&this.state.numero<=5) {
            this.setState({numero:this.state.numero-1})
            console.log(this.state.numero)

        }
    }
    soma=()=>{
        if (this.state.numero>=0&&this.state.numero<5){
            this.setState({numero:this.state.numero+1})
            console.log(this.state.numero)
        }
    }

    handleInputChange(event){
        event.value=this.state.numero;
    }

    // addEventListener=()=>{
    //     validarCampo(inputCEP, 9);
    // }

    // validarCampo=(input,i)=>{
    //     if (input.value.length >= i) {
    //         input.value = input.value.substring(0, i);
    //     }
    // }

    // mascara=(el, masc)=>{
    //     el.value=masc(el.value);
    // };
    // soNumeros=(d)=>{
    //     return d.replace(/\D/g, "");
    // };
    // cep=(d)=>{
    //     d=soNumeros(d);
    //     d=d.replace(/^(\d{5})(\d)/, "$1-$2");
    //     return d;
    // };
    // addEventListener = () => {
    //     let cep = inputCEP.value.replace([/[-]+/g, '']);
    //     let a = "https://viacep.com.br/ws/" + cep + "/json";
    //     let resposta = fetch(a);
    //         .then((resposta) => {
    //             return resposta.json();
    //         })
    //         .then((json) => {
    //             if (json.erro == true) {
    //             }
    //             else {
    //                 if (json.uf == "SP") {
    //                     vFrete.innerText = "Valor do Frete:R$4,00";
    //                 }
    //                 else {
    //                     vFrete.innerText = "Valor do Frete:R$8,00";
    //                 }
    //             }
    //         })
    // }

render() {
    return (
        <>
            <Container>
                <Row>
                    <Col sm="12" md="5">
                        <img src={fotoMaior} className="img-fluid mt-2 mb-2" alt="imagemProduto" title="imagemProduto" />
                    </Col>
                    <Col sm="12" md="7">
                        <div className="p-2">
                            <h3 title="Nome do Produto" className="mt-2 mb-2">
                                Pipa para Festival
                            </h3>
                            <h5 title="Preço do Produto" className="mt-2 mb-2">
                                R$ 20,00
                            </h5>
                            <p title="Quantidade disponivel" className="mt-2 mb-2">
                                5 unidades restante
                            </p>
                            <Row className="mt-2 mb-2 p-2">
                                <Button onClick={this.subtrai}>-</Button>
                                <Input type="number" className="col-2" name="qtdProduto"
                                value={this.state.numero} onChange={this.handleInputChange} onInput={this.validaQtd}/>
                                <Button onClick={this.soma}>+</Button>
                            </Row>
                            <Button color="success" className="btn-lg col-sm-12 col-md-6 mt-2">Comprar</Button>
                        </div>
                        <FormGroup className="mt-5 mb-2 p-2 border border-dark">
                            <Label for="enderecoUsuario">Informe seu CEP para calcular o frete</Label>
                            <InputGroup>
                                <Input type="text" name="cepUsuario" placeholder="00000-000" maxLength="9"
                                /*onKeyPress={this.mascara(this,cep)} onkeyUp={this.mascara(this,cep)}*/ className="col-4"></Input>
                                <Button id="btnFrete" color="success">Calcular Frete</Button>
                            </InputGroup>
                            <p className="mt-2 mb-2" title="Valor do Frete" id="vFrete">Valor do Frete:</p>
                        </FormGroup>
                    </Col>
                    <Col sm="12" /*border border-dark"*/>
                        <h3 title="Nome do Produto" className="mt-2 mb-2">
                            Pipa para Festival
                        </h3>
                        <p title="Descrição do Produto" className="mt-2 mb-2">
                            Lorem ipsum adipiscing sed ligula vivamus litora conubia scelerisque,
                            malesuada platea suscipit dolor blandit est dictum metus, tortor praesent
                            nulla malesuada conubia aptent ullamcorper. velit nisl nostra gravida felis
                            in porttitor massa pellentesque aliquam mollis aliquam, maecenas accumsan
                            ante magna turpis venenatis aliquam sem tincidunt ad praesent posuere,
                            proin dui turpis iaculis cras rhoncus maecenas sem convallis suspendisse.
                            praesent sodales orci mattis orci sem nisi posuere ut eleifend himenaeos
                            varius id, consequat fringilla quis ligula est quam lorem molestie aenean
                            hac. tempor dapibus turpis curabitur justo per blandit purus ante aenean,
                            sodales nisl nisi diam blandit eu iaculis aliquam dui, sed a venenatis orci
                            tempus sapien nam purus.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Navbar className="navbar-dark bg-secondary text-light mt-2 mb-2">
                Voce tambem pode gostar
            </Navbar>
            <Container>
                <Row>
                    <Col sm="5" md="3" className="carde">
                        <div>
                            <img src={fotoMenor} className="mt-2 mb-2 img-fluid" alt="imagemProduto" title="imagemProduto" />
                            <h5 title="Titulo Produto 1">Pipa Linda!</h5>
                        </div>
                    </Col>
                    <Col sm="5" md="3" className="carde">
                        <div>
                            <img src={fotoMenor} className="mt-2 mb-2 img-fluid" alt="imagemProduto" title="imagemProduto" />
                            <h5 title="Titulo Produto 1">Pipa Bonita!</h5>
                        </div>
                    </Col>
                    <Col sm="5" md="3" className="carde">
                        <div>
                            <img src={fotoMenor} className="mt-2 mb-2 img-fluid" alt="imagemProduto" title="imagemProduto" />
                            <h5 title="Titulo Produto 1">Pipa Formosa!</h5>
                        </div>
                    </Col>
                    <Col sm="5" md="3" className="carde">
                        <div>
                            <img src={fotoMenor} className="mt-2 mb-2 img-fluid" alt="imagemProduto" title="imagemProduto" />
                            <h5 title="Titulo Produto 1">Pipa Maravilhosa!</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
}
export default ProdCompleto;