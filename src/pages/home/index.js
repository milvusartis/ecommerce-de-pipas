import React from 'react';
import CarouselResponive from '../../components/CarrouselResponive';
import ListaDeProdutos from '../../components/ListaDeProdutos';
import { connect } from 'react-redux';
import ProdutoCompleto from '../../components/ProdutoCompleto';

// const mudaComponente = (produtoAtivo) => produtoAtivo ? <ProdutoCompleto/> : <CarouselResponive/> ;

const mudaComponente = (produtoAtivo) => produtoAtivo ? <ProdutoCompleto/> : <CarouselResponive/> ;

const Home = ({ produtoAtivo }) => ( 
   <>
    {mudaComponente(produtoAtivo)}
    <ListaDeProdutos />
  </>

);

export default connect(state => ({ produtoAtivo: !state.produto.produtoAtivo}))(Home);
