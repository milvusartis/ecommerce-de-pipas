import React, {Component} from 'react';
import "./Styles.css";


import {
    Button,
    Card,
    Container,
    Form,
    FormGroup,
    Input,
    Row
} from 'reactstrap';


class Login extends Component {

    render() {
        return ( 
            <>

<Container>
        
        <Card className="bg-light">
            <Row className="cardCorpo">
                <div className="card-body col-sm-6" style={{marginRight: 120}}>
                    <h4 className="card-title mt-3 text-center">Cadastro</h4>
                    <p className="text-center">Se registre aqui para comprar nossas pipas</p>
                    <p>
                        <a href className="btn btn-block btn-twitter"> <i className="fab fa-twitter"></i> &#xA0; Login via
                            Twitter</a>
                        <a href className="btn btn-block btn-facebook"> <i className="fab fa-facebook-f"></i> &#xA0; Login via
                            facebook</a>
                    </p>
                    <p className="divider-text">
                        <span className="bg-light">OU</span>
                    </p>
                    <Form>
                        <FormGroup className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                            </div>
                            <Input name placeholder="Nome completo" type="text"></Input>
                        </FormGroup>
                        <FormGroup className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                            </div>
                            <Input name placeholder="Email " type="email"></Input>
                        </FormGroup>
                        <FormGroup className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-phone"></i> </span>
                            </div>
                            <select className="custom-select" style={{maxWidth: 70}}>
                                <option selected>+11</option>
                                <option value="1">+19</option>
                                <option value="2">+21</option>
                                <option value="3">+12</option>
                            </select>
                            <Input name placeholder="Telefone" type="text"></Input>
                        </FormGroup>
                        <FormGroup className="input-group">
                            <FormGroup className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                </div>
                                <Input placeholder="Coloque sua senha" type="password"></Input>
                            </FormGroup>
                            <FormGroup className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                </div>
                                <Input placeholder="Repita sua senha" type="password"></Input>
                            </FormGroup>
                        <FormGroup>
                                <Button color="primary" block> Criar conta. </Button>
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
                            <Form>
                                <FormGroup className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <Input type="text" placeholder="Usuario"></Input>
                                </FormGroup>
                                <FormGroup className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <Input type="password" placeholder="Senha"></Input>
                                </FormGroup>
                                <Row className="align-items-center remember">
                                    <Input type="checkbox"></Input>Lembrar meus dados
                                </Row>

                                <FormGroup>
                                    <input type="submit" value="Login" className="btn float-right login_btn"/>
                                </FormGroup>
                            </Form>
                        </div>

                            <p className="divider-text">
                                <span className="bg-light">OU</span>
                      </p>
                            <div>
                               <p>Nao tem uma conta?
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