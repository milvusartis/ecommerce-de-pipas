import React, { Component } from 'react';
import './contato.css';
import {
    Container,
    Form,
    Col,
    FormGroup,
    Navbar,
    Label,
    Input,
    Button
 } from 'reactstrap'

class Contato extends Component {

    valEmail = e => {
        e.preventDefault();

        const email = e.target;

        var regra1 = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.[a-z]+?$/i;
        var regra2 = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+?$/i;
        if(!email.value.match(regra1)) {
            if(!email.value.match(regra2)) {
                email.setAttribute("class", "form-control is-invalid");
            } else {
                email.setAttribute("class", "form-control is-valid");
            }
        }
    }
    
    valTelefone1 = e => {
        e.preventDefault();

        const telefone = e.target;

        if(isNaN(telefone.value)) {
            telefone.value = telefone.value.substring(0, (telefone.value.length - 1));
        } else {
            if(telefone.value.substring(0,1) === 0) {
                telefone.value = telefone.value.substring(0, (telefone.value.length - 1));
            } else {
                telefone.value = telefone.value.substring(0, 11);
            }
        }
    }

    valTelefone2 = e => {
        e.preventDefault();

        const telefone = e.target;

        const regraP1 = /^(\d{2})?(\d{4,5})?(\d{4})/g;
        const regraP2 = "($1) $2-$3"

        if(telefone.value.length === 10 || telefone.value.length === 11) {
            telefone.value = telefone.value.replace(regraP1, regraP2);
            telefone.setAttribute("class", "form-control is-valid");
        } else {
            telefone.setAttribute("class", "form-control is-invalid");
        }
    }

    render() {
        return (
            <>
                <Container>                
                    <Form
                    id="contato"
                    className="row mt-5 d-flex justify-content-center p-2">  
                        <Col lg="6" md="9" sm="12">
                            <FormGroup>
                                <Navbar className="bg-success text-light">
                                    Fale com a gente!
                                </Navbar>
                            </FormGroup>
                            <FormGroup>
                                <Label for="nomeCompleto">
                                    Nome completo:
                                </Label>
                                <Input
                                type="text"
                                name="nomeCompleto"
                                maxLength="50"
                                placeholder="Digite seu email"
                                required="required"
                                //className="form-control"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">
                                    Email:
                                </Label>
                                <Input
                                type="email"
                                name="email"
                                placeholder="Digite seu email"
                                onBlur={this.valEmail}
                                required="required"
                                //className="form-control"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="telefone">
                                    Telefone:
                                </Label>
                                <Input
                                type="tel"
                                name="telefone"
                                placeholder="Digite seu telefone"
                                onKeyUp={this.valTelefone1}
                                onBlur={this.valTelefone2}
                                required="required"
                                //className="form-control"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="assunto">
                                    Assunto:
                                </Label>
                                <Input
                                type="select"
                                name="assunto"
                                required="required"
                                //className="form-control"
                                >
                                    <option value=""
                                    disabled selected>
                                        Selecione um assunto
                                    </option>
                                    <option value="elogios">
                                        Elogios
                                    </option>
                                    <option value="sugestoes">
                                        Sugestões
                                    </option>
                                    <option value="reclamacoes">
                                        Reclamações
                                    </option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="mensagem">
                                    Mensagem:
                                </Label>
                                <Input
                                type="textarea"
                                name="mensagem"
                                rows="3"
                                maxLength="200"
                                placeholder="Escreva sua mensagem aqui"
                                required="required"
                                //className="form-control"
                                />
                                />
                            </FormGroup>
                            <FormGroup className="d-flex justify-content-end">
                                <Button
                                type="submit"
                                name="botao"        
                                className="btn-success"
                                required="required"
                                //className="form-control"
                                >
                                    Enviar
                                </Button>
                            </FormGroup>
                        </Col>
                    </Form>
                </Container>    
            </>
        )
    }   
}

export default Contato;