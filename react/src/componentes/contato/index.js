import React, { Component } from 'react';
import './contato.css';
import {
    Container,
    Col,
    FormGroup,
    Navbar,
    Label,
    Button
 } from 'reactstrap'
 import {
    AvForm,
    AvGroup,
    AvInput
 } from 'availity-reactstrap-validation';
 import InputMask from "react-input-mask";

class Contato extends Component {

    onChange = e => {
        const telefone = e.target;
        const label = telefone.parentElement.children[0];

        if(telefone.value.match(/_/) || telefone.value.length === 0) {
            telefone.setAttribute('class', 'form-control is-invalid');
            label.setAttribute('class', 'invalida');
        } else {
            telefone.setAttribute('class', 'form-control');
            label.setAttribute('class', 'valida');
        }
    }

    render() {
        return (
            <>
                <Container>                
                    <AvForm
                    id="contato"
                    className="d-flex justify-content-center p-2 mt-5">  
                        <Col lg="6" md="9" sm="12">
                            <FormGroup>
                                <Navbar className="bg-success text-light">
                                    Fale com a gente!
                                </Navbar>
                            </FormGroup>
                            <AvGroup>
                                <Label for="nomeCompleto">
                                    Nome completo:
                                </Label>
                                <AvInput
                                type="text"
                                name="nomeCompleto"
                                maxLength="50"
                                placeholder="Digite seu nome"
                                required="required"
                                //className="form-control"
                                />
                            </AvGroup>
                            <AvGroup>
                                <Label for="email">
                                    Email:
                                </Label>
                                <AvInput
                                type="email"
                                name="email"
                                placeholder="Digite seu email"
                                required="required"
                                //className="form-control"
                                />
                            </AvGroup>
                            <FormGroup>
                                <Label for="telefone">
                                    Telefone:
                                </Label>
                                <InputMask
                                    type="tel"
                                    name="telefone"
                                    placeholder="Digite seu telefone"
                                    required="required"
                                    className="form-control"
                                    mask="+55 (99) 99999-9999"
                                    onChange={this.onChange}
                                    >
                                </InputMask>
                            </FormGroup>
                            <AvGroup>
                                <Label for="assunto">
                                    Assunto:
                                </Label>
                                <AvInput
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
                                </AvInput>

                            </AvGroup>
                            <AvGroup>
                                <Label for="mensagem">
                                    Mensagem:
                                </Label>
                                <AvInput
                                type="textarea"
                                name="mensagem"
                                rows="3"
                                maxLength="200"
                                placeholder="Escreva sua mensagem aqui"
                                required="required"
                                //className="form-control"
                                />
                            </AvGroup>
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
                    </AvForm>
                </Container>    
            </>
        )
    }   
}

export default Contato;