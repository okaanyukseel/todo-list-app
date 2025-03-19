import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/todos';

const TodoService = {
  getAllTodos: () => {
    return axios.get(API_BASE_URL);
  },

  getTodoById: (id) => {
    return axios.get(`${API_BASE_URL}/${id}`);
  },

  getCompletedTodos: () => {
    return axios.get(`${API_BASE_URL}/completed`);
  },

  getIncompleteTodos: () => {
    return axios.get(`${API_BASE_URL}/incomplete`);
  },

  createTodo: (todo) => {
    return axios.post(API_BASE_URL, todo);
  },

  updateTodo: (id, todo) => {
    return axios.put(`${API_BASE_URL}/${id}`, todo);
  },

  markTodoAsCompleted: (id) => {
    return axios.patch(`${API_BASE_URL}/${id}/complete`);
  },

  deleteTodo: (id) => {
    return axios.delete(`${API_BASE_URL}/${id}`);
  }
};

export default TodoService;
