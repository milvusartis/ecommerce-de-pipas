import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/home';
import Contato from './componentes/contato';

// import { Container } from './styles';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" exact component={Home} />
            <Route path="/contato" component={Contato} />
        </Switch>
    </BrowserRouter>
);

export default Routes;

