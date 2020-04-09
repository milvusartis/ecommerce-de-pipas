import React, { Component } from 'react';
import './Contato.scss';
import {
    Container,
    Col,
    FormGroup,
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

    onClick = e => {
        const telefone = e.target.parentElement.parentElement.children[3].children[1];
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
                <Container className="container">                 
                    <AvForm className="content">  
                        <Col lg="6" md="9" sm="12">
                            <FormGroup>
                                <h1 id="title">
                                    Fale com a gente!
                                </h1>
                            </FormGroup>
                            <AvGroup>
                                <AvInput className="Input"
                                type="text"
                                name="nomeCompleto input"
                                placeholder="Digite seu nome"
                                required="required"
                                //className="form-control"
                                />
                            </AvGroup>
                            <AvGroup>
                                <AvInput className="Input"
                                type="email"
                                name="email"
                                placeholder="Digite seu email"
                                required="required"
                                //className="form-control"
                                />
                            </AvGroup>
                            <FormGroup>
                                <InputMask
                                    type="tel"
                                    name="telefone"
                                    placeholder="Digite seu telefone"
                                    required="required"
                                    className="Input"
                                    mask="+55 (99) 9999-9999"
                                    onChange={this.onChange}
                                    >
                                </InputMask>
                            </FormGroup>
                            <AvGroup>
                                <AvInput className="Input"
                                type="select"
                                name="assunto"
                                required="required"
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
                             
                                <AvInput className="textArea"
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
                                className="button"
                                required="required"
                                onClick={this.onClick}
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