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
    state={
        contador: 0
    }

    onBlur = e => {
        const telefone = e.target;
        // const label = telefone.parentElement.children[0];

        if(telefone.value.match(/_/) || telefone.value.length === 0) {
            telefone.setAttribute('class', 'form-control is-invalid Input');
            // label.setAttribute('class', 'invalida');
        } else {
            telefone.setAttribute('class', 'form-control Input');
            // label.setAttribute('class', 'valida');
        }
    }

    onClick = e => {
        const telefone = e.target;
        // const label = telefone.parentElement.children[0];
        const contador = this.state.contador;
        
        if(contador == 0) {
            telefone.setAttribute('class', 'form-control valid Input');
            // label.setAttribute('class', 'valida');
            this.setState({contador: contador+1})
        }
    }

    onSubmit = e => {
        const telefone = e.target.parentElement.parentElement.children[3].children[0];
        // const label = telefone.parentElement.children[0];
 
        if(telefone.value.match(/_/) || telefone.value.length === 0) {
            telefone.setAttribute('class', 'form-control is-invalid');
            // label.setAttribute('class', 'invalida');
        } else {
            telefone.setAttribute('class', 'form-control');
            // label.setAttribute('class', 'valida');  
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
                                <InputMask className="Input"
                                    type="tel"
                                    name="telefone"
                                    placeholder="Digite seu telefone"
                                    required="required"
                                    mask="+55 (99) 9999-9999"
                                    onBlur={this.onBlur}
                                    onClick={this.onClick}
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
                                    disabled selected className="placehoder">
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
                                onSubmit={this.onSubmit}
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