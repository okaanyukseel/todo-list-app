import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const TodoFilter = ({ filter, onFilterChange }) => {
  return (
    <div className="d-flex justify-content-center mt-4">
      <ButtonGroup>
        <Button 
          variant={filter === 'all' ? 'primary' : 'outline-primary'} 
          onClick={() => onFilterChange('all')}
        >
          Tümü
        </Button>
        <Button 
          variant={filter === 'active' ? 'primary' : 'outline-primary'} 
          onClick={() => onFilterChange('active')}
        >
          Aktif
        </Button>
        <Button 
          variant={filter === 'completed' ? 'primary' : 'outline-primary'} 
          onClick={() => onFilterChange('completed')}
        >
          Tamamlanan
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default TodoFilter;
