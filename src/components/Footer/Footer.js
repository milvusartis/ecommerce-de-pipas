import React from "react";
import { Link } from "react-router-dom";


import {
    Container,
    Row,
    Col,
    Breadcrumb,
    BreadcrumbItem,

} from 'reactstrap';

import './Footer.css';

const Footer = () => {

    return (
        <>
            {/* INICIO FOOTER */}
            <footer>
                <Container fluid={true} className="footer">
                    <Row sm="12" md="12" lg="12">
                        <Col>
                            <Breadcrumb>
                                <BreadcrumbItem active><a href="http://localhost:3000/">Home</a></BreadcrumbItem>
                                <BreadcrumbItem active><a href="http://localhost:3000/login">Login</a></BreadcrumbItem>
                                
                            </Breadcrumb>
                        </Col>
                    </Row>
                    <Row sm="12" md="12" lg="12">
                        <Col>
                            <p> © Copyright 2020 Todos os direitos reservados a Milvus Artis</p>
                        </Col>
                    </Row>
                    <Row sm="12" md="12" lg="12">
                        <Col>
                        <span></span>
                            <p>
                                Somos loucos por pipas. Milvus Artis nasceu de uma bricadeira com as palavras em latim: Milvus (Pipa) e
                                Artis (Comércio).
                            </p>
                            <p>
                                Não vendemos pipas. Vendemos inovação. Trabalhamos com produtos de qualidade e estampas incríveis.
                             </p>
                        </Col>
                    </Row>

                    <Row className="info" sm="12" md="12" lg="12">
                        <Col sm="12" md="6" lg="6">
                            <h4 className="title">Central de atendimento:</h4>
                            <h6>(11)4002-4002</h6>
                        </Col>
                        <Col sm="12" md="6" lg="6">
                            <h4 className="title" >Email comercial:</h4>
                            <h6><Link to="mailto: milvusartis@gmail.com">milvusartis@gmail.com</Link></h6>
                        </Col>
                        
                    </Row>
                </Container>
            </footer>
            {/* FIM FOOTER */}
        </>
    );
}
export default Footer;
