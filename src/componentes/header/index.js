import React, { useState } from "react";
import { ReactComponent as Logo } from "./image/kite.svg"
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
                                <Logo title="Milvus Artis"/>
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
                            <Link to={`/login`}>Entrar
                            <span><MdPerson /></span>
                            </Link>
                        </Col>


                        <Col className="cart" sm="12" md="1" lg="1">
                            <span>1 Item</span>
                            <span><MdShoppingCart /></span>
                        </Col>

                    </Row>
                    <Row>

                        <Navbar id="navHome"className="mb-3" light expand="md">
                            <NavbarToggler onClick={toggle} />
                            <Collapse isOpen={isOpen} navbar>
                                <Nav className="mr-auto" navbar>
                                    <NavItem active>
                                        <NavLink href="/">Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/produtos">Produtos</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/pipas">Pipas</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/linhas">Linhas</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/latas">Latas</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/contato">Contato</NavLink>
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
