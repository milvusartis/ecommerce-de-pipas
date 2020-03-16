import React from 'react';
import CarouselResponive from '../../componentes/CarrouselResponive';
// import ListaDeProdutos from '../../componentes/ListaDeProdutos';
import { connect } from 'react-redux';
import ProdutoCompleto from '../../componentes/ProdutoCompleto';

// const mudaComponente = (produtoAtivo) => produtoAtivo ? <ProdutoCompleto/> : <CarouselResponive/> ;

const mudaComponente = (produtoAtivo) => produtoAtivo ? <h1>Produto Aqui</h1> : <CarouselResponive/> ;

const Home = ({ produtoAtivo }) => ( 
   <>
    {/* {mudaComponente(produtoAtivo)} */}
    {/* <ListaDeProdutos /> */}
    <ProdutoCompleto/>
  </>

);

export default connect(state => ({ produtoAtivo: state.produtoAtivo}))(Home);
