import React, {Component} from 'react';
import "./Cadastro.css";
import InputMask from "react-input-mask";


import {
    Button,
    Card,
    Container,
    Form,
    FormGroup,
    Row,
    FormText,
    Col
} from 'reactstrap';
 
(function() {
    'use strict';
    window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
    if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
    }
    form.classList.add('was-validated');
    }, false);
    });
    }, false);
    })();

class Login extends Component {

    render() {
        return ( 
         <>

        <Container>  
            <Card className="bg-light">
             <Row id="corpo">
             <div className="cardLogin" >
                    <div className="cardCorpo">
                        <div className="card-title mt-3 text-center">
                            <h3>Entrar </h3>
                        </div>
                        <div className="card-body">
                            <Form>
                                <Col sm="12">
                                <FormGroup className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <InputMask className="input-group-text bg-white" type="text" placeholder="Usuario"class="form-control"></InputMask>
                                </FormGroup>
                                <FormGroup className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-key"></i></span>
                                    </div>
                                    <InputMask className="input-group-text bg-white" type="password" placeholder="Senha"class="form-control"></InputMask>
                                </FormGroup>
                                <FormGroup>
                                <Button id="btnLogin"color="success" type="submit"> Login </Button>
                                </FormGroup>
                                </Col>
                            </Form>
                        </div>
                        </div>
                            <p className="divider-text">
                                <span className="bg-light" >OU </span>
                            </p>
                            <div>
                               <p id="fraseLogin">Nao tem uma conta?
                               Cadastre-se ao lado</p>
                            </div>
                        </div> 
                 <div className="card-body col-sm-4">
                        <h4 className="card-title mt-3 text-center">Cadastro</h4>
                            <p className="text-center">Se registre aqui para comprar nossas pipas</p>
                            <p className="divider-text">
                                <span className="bg-light">Ou</span>
                            </p>
                            <Form className="needs-validation" novalidate>
                                <FormGroup className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class="fa fa-user" aria-hidden="true"></i>  </span>
                                    </div>
                                <InputMask className="input-group-text bg-white" placeholder="Nome completo"class="form-control" id="validationCustom01"required></InputMask>
                            </FormGroup>
                        <FormGroup className="input-group"novalidate>
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                            </div>
                            <InputMask className="input-group-text bg-white" placeholder="Nome de Usuario"class="form-control" type="text" mask="********" id="validationCustom02"required></InputMask>
                            <FormText>*Seu nome de usuario precisa ter 8 caracteres Alfa numericos apenas.</FormText>
                        </FormGroup>
                        <FormGroup className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                            </div>
                            <InputMask className="input-group-text bg-white" placeholder="Email" class="form-control" type="email" required></InputMask>
                        </FormGroup>
                        <FormGroup className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-phone"></i> </span>
                            </div>
                            <InputMask className="input-group-text bg-white" placeholder="Telefone" mask="+55(99)99999-9999"class="form-control" id="validationCustom03"required></InputMask>
                        </FormGroup>
                        <FormGroup className="input-group">
                            <FormGroup className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                </div>
                                <InputMask className="input-group-text bg-white" placeholder="Coloque sua senha" type="password"class="form-control" id="validationCustom04"required></InputMask>
                            </FormGroup>
                            <FormGroup className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                </div>
                                <InputMask className="input-group-text bg-white" placeholder="Repita sua senha" type="password"class="form-control" id="validationCustom04"required></InputMask>
                            </FormGroup>                                
                        <FormGroup>
                                <Button id="btnCadastro" color="success" > Criar conta. </Button>
                        </FormGroup>
                        <p className="text-center"> Ja e cadastrado? Efetue o login ao lado </p>
                    </FormGroup>
                </Form>
                </div>
                    </Row>
                </Card>
            </Container>          
            </>
        )
    }
}
export default Login;