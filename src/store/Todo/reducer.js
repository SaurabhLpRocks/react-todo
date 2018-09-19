import Immutable from 'seamless-immutable';

import * as types from './actionTypes';

const initialState = Immutable({
  todosById: undefined,
  todoIds: [],
  visibility: "all"
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.TODO_FETCH:
      return state.merge({
        text: action.text,
        todosById: action.todosById,
        todoIds: action.todoIds
      });
    case types.TODO_TOGGLE:
      return state.merge({
        todosById: action.todosById,
        todoIds: action.todoIds
      });
    case types.FILTER_CHANGED:
      return state.merge({
        visibility: action.filter
      });
    default:
      return state;
  }
}

export function getTodos(state) {
  return [state.todo.todosById, state.todo.todoIds];
}

export function getVisibility(state) {
  return state.todo.visibility;
}

export function getTodoById(todoId, state) {
  return state.todo.todosById[todoId];
}
