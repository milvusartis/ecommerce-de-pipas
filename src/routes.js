import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Redirect,} from "react-router-dom"
import Produtos from './components/Produtos/Produtos';
import Pipas from './components/Produtos/Pipas';
import Linhas from './components/Produtos/Linhas';
import Latas from './components/Produtos/Latas';
import Home from './pages/home/page-home';
import ProdCompleto from './components/ProdutoCompleto';
import Login from './components/login/Cadastro';
import Contato from './components/contato/Contato';
import Header from './components/header';
import Footer from './components/footer';
import Checkout from './components/Checkout/checkout';
import Carrinho from './components/carrinho/Carrinho';
import Sucesso from './pages/sucesso/page-sucesso';






export default class Routes extends Component {
  render() {
    return (
        <BrowserRouter>
                  <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path ="/produtos" component={Produtos}/>
          <Route path="/contato" component={Contato}/>
          <Route path="/login"  component={Login}/>
          <Route path="/produto"  component={ProdCompleto}/>
          {/* <Route path="/produto"  component={ProdCompleto}/> */}
          <Route path="/pipas" component ={Pipas}/>
          <Route path="/linhas" component={Linhas}/>
          <Route path="/latas" component={Latas}/>
          <Route path="/carrinho" component={Carrinho}/>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/sucesso" component={Sucesso}/>
        </Switch>
        <Footer/>
        
        </BrowserRouter>
        
    )
    
  }
}