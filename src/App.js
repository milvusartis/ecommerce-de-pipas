import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { } from "module";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import "bootstrap/dist/css/bootstrap.min.css";

import './scss/global.scss';
import Routes from './routes';
import store from './store/store';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
        <ToastContainer autoClose={3000} />
      </Provider>
    );
  }
}

export default App;