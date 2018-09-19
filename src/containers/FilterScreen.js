import './FilterScreen.css';

import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';

import FilterTodo from '../components/FilterTodo';
import * as filerTodoActions from '../store/FilterTodo/actions';
import * as filterTodoSelectors from '../store/FilterTodo/reducer';

class FilterScreen extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  componentDidMount() {
    this.props.dispatch(filerTodoActions.changeFilter("all"));
  }

  render() {
    // if (!this.props.topicsByUrl) return this.renderLoading();
    return (
      <div className="FilterScreen">
        <h3>Filter:List</h3>
        <FilterTodo
          filters={this.props.filters}
          currentFilter={this.props.currentFilter}
          onFilterClick={this.onFilterClick}
        />
      </div>
    );
  }

  onFilterClick(filterId) {
    this.props.dispatch(filerTodoActions.changeFilter(filterId));
  }
}

// which props do we want to inject, given the global store state?
// always use selectors here and avoid accessing the state directly
function mapStateToProps(state) {
  const { filters, currentFilter } = filterTodoSelectors.getState(state);
  return {
    filters,
    currentFilter
  };
}

export default connect(mapStateToProps)(FilterScreen);
