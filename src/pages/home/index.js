import React, { Component } from 'react';
import Header from '../../componentes/header';
import Main from '../../componentes/main';
import Footer from '../../componentes/footer';

// import { Container } from './styles';

export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}
