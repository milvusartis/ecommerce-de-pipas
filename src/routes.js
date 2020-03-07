import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Produtos from './componentes/Produtos/Produtos';
import Pipas from './componentes/Produtos/Pipas';
import Linhas from './componentes/Produtos/Linhas';
import Latas from './componentes/Produtos/Latas';


export default class Routes extends Component {
  render() {
    return (
        <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Produtos}/>
          <Route path="/pipas" component ={Pipas}/>
          <Route path="/linhas" component={Linhas}/>
          <Route path="/latas" component={Latas}/>

        </Switch>

    
        </BrowserRouter>
    )
    
  }
}