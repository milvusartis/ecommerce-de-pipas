import React, { Component } from 'react';
import { connect } from 'react-redux';



import CarouselResponive from '../../components/CarrouselResponive/CarrouselResponive';
import ListaDeProdutos from '../../components/ListaDeProdutos/ListaDeProdutos';
import ExibeProduto from '../../components/ExibeProduto/ExibeProduto';


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

const mudaComponente = (produtoAtivo) => produtoAtivo ? <ExibeProduto /> : <CarouselResponive />;

const mapStateToProps = state => ({
  produtoAtivo: !state.produtoReducer.produtoAtivo
});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Home);


