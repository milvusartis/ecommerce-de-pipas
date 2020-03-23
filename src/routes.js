import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Redirect,} from "react-router-dom"
import Produtos from './components/ProdutosPorCategoria/ProdutosPorCategoria';
import Pipas from './components/ProdutosPorCategoria/Pipas';
import Linhas from './components/ProdutosPorCategoria/Linhas';
import Latas from './components/ProdutosPorCategoria/Latas';
import Home from './pages/home/page-home';
import ProdCompleto from './components/ExibirProduto/ProdutoCompleto';
import Login from './components/Cadastro/Login';
import Cadastro from './components/Cadastro/Cadastro'
import Contato from './components/Contato/Contato';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Checkout from './components/Checkout/Checkout';
import Carrinho from './components/Carrinho/Carrinho';
import Sucesso from './pages/sucesso/page-sucesso';
import PrivateRoute from './auth';
import Logout from './components/Logout/logout';






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
          <Route path="/cadastro" component={Cadastro} />
          <Route path="/produto"  component={ProdCompleto}/>
          {/* <Route path="/produto"  component={ProdCompleto}/> */}
          <Route path="/pipas" component ={Pipas}/>
          <Route path="/linhas" component={Linhas}/>
          <Route path="/latas" component={Latas}/>
          <Route path="/carrinho" component={Carrinho}/>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/sucesso" component={Sucesso}/>
          <Route exact path="/logout" component={Logout} />
        </Switch>
        <Footer/>
        
        </BrowserRouter>
        
    )
    
  }
}