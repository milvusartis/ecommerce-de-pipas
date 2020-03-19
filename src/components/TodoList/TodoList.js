import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as TodoActions from '../../redux/actions/actions-github';

const TodoList = ({ repositorys, requestTodoList }) => (
  <div>
    <ul>
      { repositorys.data.map(todo => (
        <li key={todo.id}>{todo.name}</li>
      )) }
    </ul>
    <button onClick={() => requestTodoList()}>Carregar repositorys</button>
    { repositorys.loading && <p>Carregando...</p> }
  </div>
);

const mapStateToProps = state => ({
  repositorys: state.reducer.github,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
