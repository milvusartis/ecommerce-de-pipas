import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import CarouselResponive from '../../components/CarrouselResponive/CarrouselResponive';
import ListaDeProdutos from '../../components/ListaDeProdutos/ListaDeProdutos';
import ProdutoCompleto from '../../components/ProdutoCompleto/ProdutoCompleto';


class Home extends Component {
  render() {

    const { produtoAtivo } = this.props

    return (
      <>
        {mudaComponente(produtoAtivo)}
        <ListaDeProdutos />
      </>
    );
  }
}

const mudaComponente = (produtoAtivo) => produtoAtivo ? <ProdutoCompleto /> : <CarouselResponive />;

const mapStateToProps = state => ({
  produtoAtivo: !state.produtoReducer.produtoAtivo
});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Home);


