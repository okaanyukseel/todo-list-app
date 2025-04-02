import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { FaList, FaCheck, FaHourglass } from 'react-icons/fa';

const TodoFilter = ({ filter, onFilterChange }) => {
  return (
    <div className="filter-container text-center">
      <h5 className="mb-3">Görevleri Filtrele</h5>
      <ButtonGroup className="filter-btn-group">
        <Button 
          variant={filter === 'all' ? 'primary' : 'outline-primary'} 
          onClick={() => onFilterChange('all')}
          className="d-flex align-items-center justify-content-center"
        >
          <FaList className="me-2" /> Tümü
        </Button>
        <Button 
          variant={filter === 'active' ? 'primary' : 'outline-primary'} 
          onClick={() => onFilterChange('active')}
          className="d-flex align-items-center justify-content-center"
        >
          <FaHourglass className="me-2" /> Aktif
        </Button>
        <Button 
          variant={filter === 'completed' ? 'primary' : 'outline-primary'} 
          onClick={() => onFilterChange('completed')}
          className="d-flex align-items-center justify-content-center"
        >
          <FaCheck className="me-2" /> Tamamlanan
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default TodoFilter;
