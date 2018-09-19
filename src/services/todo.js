// services are state-less
// they act as utility facades that abstract the details for complex operations
// normally, our interface to any sort of server API will be as a service
import _ from 'lodash';

const API_ENDPOINT = 'http://localhost:8080';

class TodoService {

    async getAllTodos() {
        const url = `${API_ENDPOINT}/api/todos`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`TodoService getTodos failed, HTTP status ${response.status}`);
        }

        const todoList = await response.json();
        return this.createTodoResponse(todoList);
    }

    async addTodo(text) {
        const url = `${API_ENDPOINT}/api/todos`;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify({
                text,
                completed: false
            })
        }

        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`TodoService getTodos failed, HTTP status ${response.status}`);
        }

        const todoList = await response.json();
        return this.createTodoResponse(todoList);
    }


    async toggleTodo(todo) {
        const url = `${API_ENDPOINT}/api/todos/${todo._id}`;
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify({
                completed: todo.completed
            })
        }

        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`TodoService toggleTodo failed, HTTP status ${response.status}`);
        }
        const todoList = await response.json();
        return this.createTodoResponse(todoList);
    }

    createTodoResponse(todoList) {
        const todosById = this.todoMapByIdFromList(todoList);
        const todoIds = this.todoIdsFromTodoList(todoList);
        return {
            todosById,
            todoIds
        };
    }

    todoMapByIdFromList(todoList) {
        if (!todoList || todoList.lenght <= 0) {
            return [];
        }
        return _.keyBy(todoList, '_id');
    }

    todoIdsFromTodoList(todoList) {
        if (!todoList || todoList.lenght <= 0) {
            return {};
        }
        return todoList.map((todo) => {
            return todo._id;
        })
    }
}

export default new TodoService();