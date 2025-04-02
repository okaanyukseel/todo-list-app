import React from 'react';
import { ListGroup, Spinner } from 'react-bootstrap';
import TodoItem from './TodoItem';
import { FaClipboardList } from 'react-icons/fa';

const TodoList = ({ todos, toggleTodo, deleteTodo, updateTodo, loading }) => {
  if (loading) {
    return (
      <div className="loading-spinner">
        <Spinner animation="border" role="status" variant="primary" style={{ width: '3rem', height: '3rem' }}>
          <span className="visually-hidden">Yükleniyor...</span>
        </Spinner>
        <p className="loading-text">Görevler yükleniyor...</p>
      </div>
    );
  }

  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <FaClipboardList size={50} color="#4361ee" className="mb-3" />
        <h5>Görev Bulunamadı</h5>
        <p>Gösterilecek görev bulunmamaktadır. Yeni bir görev ekleyebilirsiniz.</p>
      </div>
    );
  }

  return (
    <div className="mt-4">
      <h5 className="mb-3">Görevleriniz ({todos.length})</h5>
      <ListGroup className="shadow-sm">
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
    </div>
  );
};

export default TodoList;
