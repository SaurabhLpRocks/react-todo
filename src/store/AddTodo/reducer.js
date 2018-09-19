import Immutable from 'seamless-immutable';

import * as types from './actionTypes';

// import _ from 'lodash';
const initialState = Immutable({
    text: ''
});

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.TODO_ADD:
            return state.merge({
                text: action.text
            });
        case types.TODO_UPDATE_VALUE:
            return state.merge({
                text: action.text
            });
        default:
            return state;
    }
}

export function getTodoText(state) {
    return state.addTodo.text;
}