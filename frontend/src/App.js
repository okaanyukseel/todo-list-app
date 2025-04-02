import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import TodoFilter from './components/TodoFilter';
import TodoService from './services/TodoService';

function App() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadTodos();
  }, []);

  useEffect(() => {
    filterTodos();
  }, [todos, filter]);

  const loadTodos = async () => {
    try {
      setLoading(true);
      const response = await TodoService.getAllTodos();
      setTodos(response.data);
      setError(null);
    } catch (err) {
      console.error('Görevler yüklenirken hata oluştu:', err);
      setError('Görevler yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  const filterTodos = () => {
    switch (filter) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed));
        break;
      case 'active':
        setFilteredTodos(todos.filter(todo => !todo.completed));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const addTodo = async (todo) => {
    try {
      const response = await TodoService.createTodo(todo);
      setTodos([...todos, response.data]);
    } catch (err) {
      console.error('Görev eklenirken hata oluştu:', err);
      setError('Görev eklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
    }
  };

  const toggleTodo = async (id) => {
    try {
      const todoToToggle = todos.find(todo => todo.id === id);
      const updatedTodo = { ...todoToToggle, completed: !todoToToggle.completed };
      
      const response = await TodoService.updateTodo(id, updatedTodo);
      setTodos(todos.map(todo => todo.id === id ? response.data : todo));
    } catch (err) {
      console.error('Görev güncellenirken hata oluştu:', err);
      setError('Görev güncellenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
    }
  };

  const deleteTodo = async (id) => {
    try {
      await TodoService.deleteTodo(id);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (err) {
      console.error('Görev silinirken hata oluştu:', err);
      setError('Görev silinirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
    }
  };

  const updateTodo = async (id, updatedTodo) => {
    try {
      const response = await TodoService.updateTodo(id, updatedTodo);
      setTodos(todos.map(todo => todo.id === id ? response.data : todo));
    } catch (err) {
      console.error('Görev güncellenirken hata oluştu:', err);
      setError('Görev güncellenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
    }
  };

  return (
    <Container className="app-container">
      <Row className="justify-content-center">
        <Col md={10} lg={8} xl={7}>
          <div className="card shadow-lg">
            <div className="card-body">
              <h1 className="app-title">Yapılacaklar Listesi</h1>
              <TodoForm addTodo={addTodo} />
              {error && <div className="alert alert-danger mt-3">{error}</div>}
              <TodoFilter filter={filter} onFilterChange={handleFilterChange} />
              <TodoList 
                todos={filteredTodos} 
                toggleTodo={toggleTodo} 
                deleteTodo={deleteTodo} 
                updateTodo={updateTodo}
                loading={loading} 
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
