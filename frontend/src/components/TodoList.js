import React from 'react';
import { ListGroup, Spinner } from 'react-bootstrap';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo, deleteTodo, updateTodo, loading }) => {
  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Yükleniyor...</span>
        </Spinner>
        <p className="mt-2">Görevler yükleniyor...</p>
      </div>
    );
  }

  if (todos.length === 0) {
    return (
      <div className="text-center my-4 p-4 bg-light rounded">
        <p className="mb-0">Gösterilecek görev bulunmamaktadır.</p>
      </div>
    );
  }

  return (
    <ListGroup className="mt-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </ListGroup>
  );
};

export default TodoList;
