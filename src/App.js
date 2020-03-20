import React, { Component } from 'react';
import { Provider } from 'react-redux';

import "bootstrap/dist/css/bootstrap.min.css";
import './css/global.css';
import Routes from './routes';

import store from './store/store';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />;
      </Provider>
    );
  }
}

export default App;