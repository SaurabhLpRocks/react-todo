import './TodoScreen.css';

import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';

import ListRow from '../components/ListRow';
import ListView from '../components/ListView';
import * as todoActions from '../store/Todo/actions';
import * as todoSelectors from '../store/Todo/reducer';

class TodoScreen extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  componentDidMount() {
    this.props.dispatch(todoActions.getTodo());
  }

  render() {
    // if (!this.props.topicsByUrl) return this.renderLoading();
    return (
      <div className="TodoScreen">
        <h3>TODO:List</h3>
        <ListView
          rowsIdArray={this.props.todoIds}
          rowsById={this.props.todosById}
          renderRow={this.renderRow}
        />
      </div>
    );
  }

  renderLoading() {
    return <p>Loading...</p>;
  }

  renderRow(todoId, todo) {
    return (
      <ListRow rowId={todoId} rowItem={todo} visibility={this.props.visibility} onChange={this.onRowClick} />
    );
  }

  onRowClick(todoId) {
    this.props.dispatch(todoActions.toggleTodo(todoId));
  }
}

// which props do we want to inject, given the global store state?
// always use selectors here and avoid accessing the state directly
function mapStateToProps(state) {
  const [todosById, todoIds] = todoSelectors.getTodos(state);
  const visibility = todoSelectors.getVisibility(state);
  return {
    todosById,
    todoIds,
    visibility
  };
}

export default connect(mapStateToProps)(TodoScreen);
