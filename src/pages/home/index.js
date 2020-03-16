import React from 'react';
import CarouselResponive from '../../componentes/CarrouselResponive';
import ListaDeProdutos from '../../componentes/ListaDeProdutos';
import { connect } from 'react-redux';
import ProdutoCompleto from '../../componentes/ProdutoCompleto';

// const mudaComponente = (produtoAtivo) => produtoAtivo ? <ProdutoCompleto/> : <CarouselResponive/> ;

const mudaComponente = (produtoAtivo) => produtoAtivo ? <ProdutoCompleto/> : <CarouselResponive/> ;

const Home = ({ produtoAtivo }) => ( 
   <>
    {mudaComponente(produtoAtivo)}
    <ListaDeProdutos/>
  </>

);

export default connect(state => ({ produtoAtivo: !state.produto.produtoAtivo}))(Home);
