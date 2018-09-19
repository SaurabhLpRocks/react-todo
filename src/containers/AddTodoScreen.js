import './FilterScreen.css';

import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';

import AddTodo from '../components/AddTodo';
import * as addTodoActions from '../store/AddTodo/actions';
import * as addTodoSelectors from '../store/AddTodo/reducer';

class AddTodoScreen extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    componentDidMount() {
        // this.props.dispatch(filerTodoActions.changeFilter("all"));
    }

    render() {
        // if (!this.props.topicsByUrl) return this.renderLoading();
        return (
            <div className="AddTodoScreen">
                <h3>Add Todo</h3>
                <AddTodo onSubmit={this.onAddTodo} text={this.props.text} updateInputValue={this.updateInputValue} />
            </div>
        );
    }

    onAddTodo(text) {
        this.props.dispatch(addTodoActions.addTodo(text));
    }

    updateInputValue(text) {
        this.props.dispatch(addTodoActions.updateInputValue(text));
        return false;
    }
}

// which props do we want to inject, given the global store state?
// always use selectors here and avoid accessing the state directly
function mapStateToProps(state) {
    const text = addTodoSelectors.getTodoText(state);
    return {
        text
    };
}

export default connect(mapStateToProps)(AddTodoScreen);
