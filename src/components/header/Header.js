import React, { useState } from "react";
import { ReactComponent as Logo } from "./image/milvus_logo.svg"
import { Link } from "react-router-dom";

import './Header.scss';

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
    NavLink
} from 'reactstrap';
import { MdAccountCircle } from 'react-icons/md';

import Badge from 'react-bootstrap/Badge'
import CarrinhoBadge from "../CarrinhoBadge/CarrinhoBadge";
import LoginBadge from "../LoginBadge/LoginBadge";
import BarraDePesquisa from "../BarraDePesquisa/BarraDePesquisa";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <>
            <header>
                <Container fluid={true} id="container">
                    <Row className="topo">
                        <Col className="logo" sm={12} md={3} lg={3}>
                            <Link to="/">
                                <NavbarBrand>
                                    <Logo className="logo" title="Milvus Artis" />
                                </NavbarBrand>
                            </Link>
                        </Col>
                        <Col className="search ml-5 " sm={8} md={3} lg={4}>
                            {/* <BarraDePesquisa /> */}
                        </Col>
                        <Col className="target" sm={6} md={3} lg={4}>
                            <LoginBadge />
                            <CarrinhoBadge />
                        </Col>
                    </Row>
                    <Row>
                        <Navbar id="navHome" className="mb-3 navHome" light expand="md">
                            <NavbarToggler onClick={toggle} />
                            <Collapse isOpen={isOpen} navbar>
                                <Nav className="container mr-auto " navbar>
                                    <NavItem active >
                                        <Link to="/"><NavLink className="btn bg-yellow" href="/">Home</NavLink></Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to="/produtos"><NavLink className="btn bg-green" href="/produtos">Produtos</NavLink></Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to="/pipas"><NavLink className="btn bg-red" href="/pipas">Pipas</NavLink></Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to="/linhas"><NavLink className="btn bg-blue" href="/linhas">Linhas</NavLink></Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to="/latas"><NavLink className="btn bg-yellow" href="/latas">Latas</NavLink></Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to="/contato"><NavLink className="btn bg-red" href="/contato">Contato</NavLink></Link>
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