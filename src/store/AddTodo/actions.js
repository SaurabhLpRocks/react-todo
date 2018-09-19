// import todoService from '../../services/todo';
import todoService from '../../services/todo';
import * as todoTypes from '../Todo/actionTypes';
import * as types from './actionTypes';
import * as addTodoSelectors from './reducer';

export function addTodo() {
    return async (dispatch, getState) => {
        try {
            const todoText = addTodoSelectors.getTodoText(getState());
            const {
                todosById,
                todoIds
            } = await todoService.addTodo(todoText);
            dispatch({
                type: types.TODO_ADD,
                text: ''
            });
            dispatch({
                type: todoTypes.TODO_FETCH,
                todosById,
                todoIds
            });
        } catch (error) {
            console.error(error);
        }
    };
}

export function updateInputValue(text) {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: types.TODO_UPDATE_VALUE,
                text
            });
        } catch (error) {
            console.error(error);
        }
    };
}