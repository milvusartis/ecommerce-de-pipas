import React, { Component } from 'react';
import { Provider } from 'react-redux';

import "bootstrap/dist/css/bootstrap.min.css";
import './css/global.css';

import Routes from './routes';
// import store from './store/store';

import store from './store/store';
import TodoList from './components/TodoList/TodoList';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
        {/* <TodoList /> */}
      
      </Provider>
    );
  }
}

export default App;