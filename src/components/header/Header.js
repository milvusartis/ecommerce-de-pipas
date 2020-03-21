import React, { useState } from "react";
import { ReactComponent as Logo } from "./image/milvus_logo.svg"
import { Link } from "react-router-dom";

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

} from 'reactstrap';
import { MdAccountCircle, MdShoppingCart } from 'react-icons/md';

import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <header>
                {/* INICIO TOPO */}
                {/* Para Merge */}
                <Container fluid={true}>
                    <Row className="topo bg-dark-grey color-dark">
                        <Col className="logo" sm="12" md="8" lg="8">
                            <NavbarBrand href="/">
                            <Logo className="logo" title="Milvus Artis"/>
                                </NavbarBrand>
                        </Col>

                        {/* <Col className="search" sm="12" md="4" lg="4">
                            <InputGroup>
                                <Input placeholder="Busque por produtos" />
                                <InputGroupAddon addonType="append">
                                    <InputGroupText>
                                        <MdSearch />
                                    </InputGroupText>

                                </InputGroupAddon>
                            </InputGroup>
                        </Col> */}

                        {/* <Col className="cart" sm="12" md="1" lg="1">
                            <span></span>
                            <span><Link to="/login">Login</Link></span>
                        </Col> */}

                        <Col className="cart" sm="12" md="2" lg="2">
                            <span></span>
                            <span className="icons"><Link title="Olá, faça o seu login" to="/login"><MdAccountCircle/></Link></span>
                            <span></span>
                            <span className="icons"><Link to="/carrinho"><MdShoppingCart /></Link></span>
                        </Col>

                    </Row>
                    <Row>

                        <Navbar id="navHome"className="mb-3 navHome" light expand="md">
                            <NavbarToggler onClick={toggle} />
                            <Collapse isOpen={isOpen} navbar>
                                <Nav className="container mr-auto " navbar>
                                    <NavItem active >
                                        <NavLink  className="btn bg-yellow btnMargin" href="/">Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink  className="btn bg-green btnMargin" href="/produtos">Produtos</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink  className="btn bg-red btnMargin" href="/pipas">Pipas</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink  className="btn bg-blue btnMargin " href="/linhas">Linhas</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink  className="btn bg-yellow btnMargin " href="/latas">Latas</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink  className="btn bg-red btnMargin "  href="/contato">Contato</NavLink>
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
