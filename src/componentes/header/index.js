import React, { useState } from "react";
import './styles.css';
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

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <header>
                {/* INICIO TOPO */}
                {/* Para Merge */}
                <div className="fixed-top">
                    <div className="topo bg-dark color-dark">
                        <div className="logo">
                            <NavbarBrand href="/">
                                <img src={logo} alt="Milvus Artis"/>
                                Milvus Artis
                                </NavbarBrand>
                        </div>

                        <div className="search col-md-4 my-1">
                            <InputGroup>
                                <Input placeholder="Busque por produtos" />
                                <InputGroupAddon addonType="append">
                                    <InputGroupText>
                                        <MdSearch />
                                    </InputGroupText>

                                </InputGroupAddon>
                            </InputGroup>
                        </div>

                        <div className="login">
                            <Link to={`/`}>Entre ou cadastre-se
                            <span><MdPerson /></span>
                            </Link>
                        </div>


                        <div className="cart">
                            <span>1 Item</span>
                            <MdShoppingCart />
                        </div>
                    </div>
                    {/* BARRA DE NAVEGAÇÃO */}

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

                </div>
                {/* FINAL TOPO */}
            </header>
        </>
    );
}
export default Header;
