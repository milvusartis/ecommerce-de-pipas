import React, { useState } from "react";
import logo from "./image/kite.svg"
import { Link } from "react-router-dom";

import {
    Container,
    Row,
    Col,
    InputGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    NavbarBrand,
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,

} from 'reactstrap';
import { MdSearch, MdPerson, MdShoppingCart } from 'react-icons/md';

import './styles.css';

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
                        <Col className="logo" sm="12" md="3" lg="3">
                            <NavbarBrand href="/">
                                <img src={logo} alt="Milvus Artis" />
                                Milvus Artis
                                </NavbarBrand>
                        </Col>

                        <Col className="search" sm="12" md="6" lg="6">
                            <InputGroup>
                                <Input placeholder="Busque por produtos" />
                                <InputGroupAddon addonType="append">
                                    <InputGroupText>
                                        <MdSearch />
                                    </InputGroupText>

                                </InputGroupAddon>
                            </InputGroup>
                        </Col>

                        <Col className="login" sm="12" md="2" lg="2">
                            <Link to={`/`}>Logar
                            <span><MdPerson /></span>
                            </Link>
                        </Col>


                        <Col className="cart" sm="12" md="1" lg="1">
                            <span>1 Item</span>
                            <span><MdShoppingCart /></span>
                        </Col>

                    </Row>
                    <Row>

                        <Navbar color="light" light expand="md">
                            <NavbarToggler onClick={toggle} />
                            <Collapse isOpen={isOpen} navbar>
                                <Nav className="mr-auto" navbar>
                                    <NavItem active>
                                        <NavLink href="/components/">Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/components/">Produtos</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/components/">Contato</NavLink>
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