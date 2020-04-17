import React, { Component } from 'react';
import './Contato.scss';
import {
    Container,
    Col,
    Form,
    FormGroup,
    Button
} from 'reactstrap'
import {
    AvForm,
    AvGroup,
    AvInput
} from 'availity-reactstrap-validation';
import InputMask from "react-input-mask";
import api from '../../services/api'

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
        const formulario = e.target.parentElement.parentElement
        const telefone = formulario.children[3].children[0];
        // const label = telefone.parentElement.children[0];
 
        if(telefone.value.match(/_/) || telefone.value.length === 0) {
            telefone.setAttribute('class', 'form-control is-invalid');
            // label.setAttribute('class', 'invalida');
        } else {
            telefone.setAttribute('class', 'form-control');
            // label.setAttribute('class', 'valida');  
        }
    }

    submeterContato = async (event) => {
        event.preventDefault();

        let nome = event.target.nomeCompleto.value
        let email = event.target.email.value
        let telefone = event.target.telefone.value
        let assunto = event.target.assunto.value
        let mensagem = event.target.mensagem.value

        api.post("/enviarcontato", {
            nome: nome,
            email: email,
            telefone: telefone,
            assunto: assunto,
            mensagem: mensagem
        })
        .then(resposta => console.log(resposta.data))
        .catch(erro => console.log(erro.data))
    }

    render() {
        return (
            <>
                <Container className="container">                 
                    <AvForm className="content">  
                        <Col lg="6" md="9" sm="12">
                            <Form onSubmit={this.submeterContato}>
                                <FormGroup>
                                    <h1 id="title">
                                        Fale com a gente!
                                    </h1>
                                </FormGroup>
                                <AvGroup>
                                    <AvInput className="Input"
                                    type="text"
                                    name="nomeCompleto"
                                    id="nomeCompleto"
                                    placeholder="Digite seu nome"
                                    required="required"
                                    //className="form-control"
                                    />
                                </AvGroup>
                                <AvGroup>
                                    <AvInput className="Input"
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Digite seu email"
                                    required="required"
                                    //className="form-control"
                                    />
                                </AvGroup>
                                <FormGroup>
                                    <InputMask className="Input"
                                        type="tel"
                                        name="telefone"
                                        id="telefone"
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
                                    id="assunto"
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
                                    id="mensagem"
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
                                    id="botao"        
                                    className="button"
                                    required="required"
                                    onClick={this.onSubmit}
                                    >
                                        Enviar
                                    </Button>
                                </FormGroup>
                            </Form>
                        </Col>
                    </AvForm>
                </Container>    
            </>
        )
    }   
}

export default Contato;