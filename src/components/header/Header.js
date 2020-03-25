import React, { useState , Component} from "react";
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
import { MdAccountCircle, MdSearch } from 'react-icons/md';



import Badge from 'react-bootstrap/Badge'
import CarrinhoBadge from "../CarrinhoBadge/CarrinhoBadge";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);


    const toggle = () => setIsOpen(!isOpen);

  
      

    return (
        <>
            <header>
                {/* INICIO TOPO */}
                {/* Para Merge */}
                <Container fluid={true} id="container">
                    <Row className="topo">
                        <Col className="logo" sm={12} md={3} lg={3}>
                            <NavbarBrand href="/">
                                <Logo className="logo" title="Milvus Artis" />
                            </NavbarBrand>
                        </Col>

                        <Col className="search ml-5 " sm={8} md={3} lg={4}>
                            <InputGroup>
                                <Input placeholder="Busque por produtos" />
                                <InputGroupAddon addonType="append">
                                    <InputGroupText>
                                        <MdSearch />
                                    </InputGroupText>

                                </InputGroupAddon>
                            </InputGroup>
                        </Col>

                        <Col className="target" sm={6} md={3} lg={4}>
                            <Link title="Olá, faça o seu login" to="/login"><Badge pill variant="" className="badge login"><MdAccountCircle /></Badge>{' '}</Link><span className="user">Olá, faça o seu login</span>
                             <CarrinhoBadge/>
                        </Col>                      
                       
                       

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

            </header>
        </>
    );
}
export default Header;


