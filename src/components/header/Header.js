import React, { useState } from "react";
import { ReactComponent as Logo } from "./image/milvus_logo.svg"
import { Link } from "react-router-dom";

import './Header.css';

import {
    Container,
    Row,
    Col,
    NavbarBrand,
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    InputGroup,
    Input,
    InputGroupAddon,
    InputGroupText,



} from 'reactstrap';
import { MdAccountCircle, MdShoppingCart, MdSearch } from 'react-icons/md';



import Badge from 'react-bootstrap/Badge'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <header>
                {/* INICIO TOPO */}
                {/* Para Merge */}
                <Container fluid={true}>
                    <Row className="topo">
                        <Col className="logo" sm={12} md={3} lg={3}>
                            <NavbarBrand href="/">
                                <Logo className="logo" title="Milvus Artis"/>
                            </NavbarBrand>
                        </Col>
                        <Col lg={1}>
                        </Col>

                        <Col className="search" sm={12} md={3} lg={5}>
                            <InputGroup>
                                <Input placeholder="Busque por produtos"/>
                                <InputGroupAddon addonType="append">
                                    <InputGroupText>
                                        <MdSearch/>
                                    </InputGroupText>

                                </InputGroupAddon>
                            </InputGroup>
                        </Col>
                      
                        <Col className="badges" sm={6} md={3} lg={3}>
                            <Link title="Olá, faça o seu login" to="/login"><Badge pill variant="secondary" className="badge"><MdAccountCircle /></Badge>{' '}</Link><span className="user">Olá, faça o seu login</span>
                            {/* <span class="badge badge-pill badge-light">1</span> */}
                            <Link to="/carrinho"><Badge pill variant="" className="badge cart"><MdShoppingCart /></Badge>{' '}</Link>
                        </Col>
                       
                        {/* <Col className="cart" sm={6}md={3} lg={1}> */}
                           
                            {/* <Link to="/carrinho"><Badge pill variant="danger" className="badge"><MdShoppingCart /></Badge>{' '}</Link> */}
                        {/* </Col> */}

                    </Row>

                    <Row>

                        <Navbar id="navHome" className="mb-3 navHome" light expand="md">
                            <NavbarToggler onClick={toggle} />
                            <Collapse isOpen={isOpen} navbar>
                                <Nav className="container mr-auto " navbar>
                                    <NavItem active >
                                        <NavLink className="btn bg-yellow" href="/">Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="btn bg-green" href="/produtos">Produtos</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="btn bg-red" href="/pipas">Pipas</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="btn bg-blue" href="/linhas">Linhas</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="btn bg-yellow" href="/latas">Latas</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="btn bg-red" href="/contato">Contato</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>

                    </Row>

                </Container>
                {/* BARRA DE NAVEGAÇÃO */}




                {/* FINAL TOPO */}
            </header>
        </>
    );
}
export default Header;
