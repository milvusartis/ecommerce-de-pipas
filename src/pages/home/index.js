import React from 'react';
import Main from '../../componentes/main';
import CarouselResponive from '../../componentes/CarrouselResponive';
import ListaDeProdutos from '../../componentes/ListaDeProdutos';
import { connect } from 'react-redux';

// import { Container } from './styles';

const mudaComponente = (produtoAtivo) =>  produtoAtivo ? <CarouselResponive/> : <ListaDeProdutos/>;



const Home = ({ produtoAtivo }) => (
  <>
  {mudaComponente(produtoAtivo)}

  </> 
   
  );

export default connect(state => ({ produtoAtivo: state.others.produtoAtivo }))(Home);
