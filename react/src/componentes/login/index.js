import React, {Component} from 'react';
import "./Styles.css";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import InputMask from "react-input-mask";


import {
    Button,
    Card,
    Container,
    Form,
    FormGroup,
    Input,
    Row,
    FormText

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
            <Row className="cardCorpo">
                <div className="card-body col-sm-4" style={{marginRight: 120}}>
                    <h4 className="card-title mt-3 text-center">Cadastro</h4>
                    <p className="text-center">Se registre aqui para comprar nossas pipas</p>
                    <p>
                    </p>
                    <p className="divider-text">
                        <span className="bg-light">Ou</span>
                    </p>
                    <Form className="needs-validation" novalidate>
                        <FormGroup className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                            </div>
                            <InputMask className="input-group-text bg-white" placeholder="Nome completo"class="form-control" id="validationCustom01"required></InputMask>
                        </FormGroup>
                        <FormGroup className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                            </div>
                            <InputMask className="input-group-text bg-white" placeholder="Nome de Usuario" mask="********" id="validationCustom02"required></InputMask>
                            <FormText>*Seu nome de usuario precisa ter 8 caracteres Alfa numericos apenas.</FormText>
                        </FormGroup>
                        <FormGroup className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                            </div>
                            <InputMask className="input-group-text bg-white" placeholder="Email" type="email" required></InputMask>
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
                                <Button color="primary" > Criar conta. </Button>
                        </FormGroup>
                        <p className="text-center"> Ja e cadastrado? Efetue o login ao lado </p>
                    </FormGroup>
                </Form>
                </div>
                <div className="cardLogin" style={{paddingTop: 20}}>
                    <div className="cardCorpo">
                        <div className="card-title mt-3 text-center">
                            <h3>Entrar </h3>
                        </div>
                        <div className="card-body"/>
                            <Form style={{marginLeft:20}}>
                                <FormGroup className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <InputMask className="input-group-text bg-white" type="text" placeholder="Usuario"></InputMask>
                                </FormGroup>
                                <FormGroup className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <InputMask className="input-group-text bg-white" type="password" placeholder="Senha"></InputMask>
                                </FormGroup>
                                <FormGroup style={{marginLeft:30}}>
                               <Input type="checkbox"> </Input> Lembrar meus dados
                                </FormGroup>
                                <Button color="primary" type="submit"style={{marginLeft:100}}> Login </Button>
                            </Form>
                        </div>

                            <p className="divider-text"style={{marginLeft:20}}>
                                <span className="bg-light" >OU </span>
                            </p>
                            <div>
                               <p style={{marginLeft:40}}>Nao tem uma conta?
                               Cadastre-se ao lado</p>
                            </div>
                            <div className="d-flex justify-content-center">
                                <a>Esqueceu a senha</a>
                            
                            </div>
                      
                    </div>

                
                </Row>
</Card>
        </Container>





            
            </>
        )
    }
}

export default Login;