import Immutable from 'seamless-immutable';

import * as types from './actionTypes';

// import _ from 'lodash';
const initialState = Immutable({
  filters: [
    { id: "all", name: "All" },
    { id: "completed", name: "Completed" },
    { id: "active", name: "Active" }
  ],
  currentFilter: "all"
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.CHANGE_FILTER:
      return state.merge({
        currentFilter: action.filter
      });
    default:
      return state;
  }
}

export function getState(state) {
  return state.filterTodo;
}
