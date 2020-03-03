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
    Button,
    Modal
 } from 'reactstrap'

class Contato extends Component {
    state = {
        show: false
    }
        

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

    handleClose = () => this.setState({show: false});
    handleShow = () => this.setState({show: true});

    modal = e => {
        e.preventDefault();

        const botao = e.target;
        const form = botao.parentElement.parentElement.parentElement;
        const nomeCompleto = form.children[0].children[1].children[1];
        const email = form.children[0].children[2].children[1];
        const telefone = form.children[0].children[3].children[1];
        const assunto = form.children[0].children[4].children[1];
        const mensagem = form.children[0].children[5].children[1];

        if(nomeCompleto.value.length > 0 && email.value.length > 0 && email.className == "form-control is-valid" && telefone.value.length > 0 && telefone.className == "form-control is-valid" && assunto.value.length > 0 && mensagem.value.length > 0) {
            this.handleShow();
        } else {
            alert("Preencha corretamente todos os campos para enviar esta mensagem.");
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
                                />
                            </FormGroup>
                            <FormGroup className="d-flex justify-content-end">
                                <Button
                                type="submit"
                                name="botao"        
                                className="btn-success"
                                onClick={this.modal}
                                >
                                    Enviar
                                </Button>
                            </FormGroup>
                        </Col>
                    </Form>
                    <Modal isOpen={this.state.show}>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                Mensagem enviada com sucesso!
                            </Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <p>Entraremos em contato em até 48h.</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button oncliCk={this.handleClose}>
                                Fechar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Container>    
            </>
        )
    }   
}

export default Contato;