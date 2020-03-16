import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Redirect,} from "react-router-dom"
import Produtos from './componentes/Produtos/Produtos';
import Pipas from './componentes/Produtos/Pipas';
import Linhas from './componentes/Produtos/Linhas';
import Latas from './componentes/Produtos/Latas';
import Home from './pages/home/index';
import ProdCompleto from './componentes/ProdutoCompleto';
import Login from './componentes/login/Cadastro';
import Contato from './componentes/contato/Contato';
import Header from './componentes/header';
import Footer from './componentes/footer';
import Checkout from './componentes/Checkout/checkout';
import Carrinho from './componentes/carrinho/Carrinho';
import Sucesso from './componentes/Pagina-Sucesso/Sucesso';






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
          <Redirect path="/carrinho" component={Carrinho}/>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/sucesso" component={Sucesso}/>
        </Switch>
        <Footer/>
        
        </BrowserRouter>
        
    )
    
  }
}