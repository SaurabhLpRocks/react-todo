import todoService from '../../services/todo';
import * as types from './actionTypes';
import * as todoSelectors from './reducer';

export function getTodo() {
  return async (dispatch, getState) => {
    try {
      const { todosById, todoIds } = await todoService.getAllTodos();

      dispatch({
        type: types.TODO_FETCH,
        todosById,
        todoIds
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function toggleTodo(todoId) {
  return async (dispatch, getState) => {
    let todo = todoSelectors.getTodoById(todoId, getState());
    try {
      todo = {
        ...todo,
        completed: !todo.completed
      };
      const { todosById, todoIds } = await todoService.toggleTodo(todo);

      dispatch({
        type: types.TODO_TOGGLE,
        todosById,
        todoIds
      });
    } catch (error) {
      console.error(error);
    }
  };
}
