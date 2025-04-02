import React, { useState } from 'react';
import { ListGroup, Form, Button, Modal, Badge } from 'react-bootstrap';
import { FaTrash, FaEdit, FaCheck, FaSave, FaTimes } from 'react-icons/fa';

const TodoItem = ({ todo, toggleTodo, deleteTodo, updateTodo }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDescription, setEditDescription] = useState(todo.description || '');
  const [validated, setValidated] = useState(false);

  const handleCloseModal = () => setShowEditModal(false);
  const handleShowModal = () => {
    setEditTitle(todo.title);
    setEditDescription(todo.description || '');
    setValidated(false);
    setShowEditModal(true);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    updateTodo(todo.id, {
      ...todo,
      title: editTitle,
      description: editDescription
    });
    handleCloseModal();
  };

  return (
    <>
      <ListGroup.Item 
        className={`d-flex justify-content-between align-items-center p-3 todo-item ${todo.completed ? 'completed-todo' : ''}`}
      >
        <div className="d-flex align-items-center flex-grow-1">
          <Form.Check 
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            aria-label={`Görevi tamamlandı olarak işaretle: ${todo.title}`}
            className="me-3"
          />
          <div>
            <h5 className="todo-title">{todo.title}</h5>
            {todo.description && <p className="todo-description mb-0">{todo.description}</p>}
            <div className="mt-1">
              {todo.completed ? (
                <Badge bg="success" className="me-1">Tamamlandı</Badge>
              ) : (
                <Badge bg="warning" text="dark" className="me-1">Devam Ediyor</Badge>
              )}
            </div>
          </div>
        </div>
        <div className="todo-actions">
          <Button 
            variant="outline-primary" 
            size="sm" 
            className="me-2" 
            onClick={handleShowModal}
            aria-label="Görevi düzenle"
          >
            <FaEdit />
          </Button>
          <Button 
            variant="outline-danger" 
            size="sm" 
            onClick={() => deleteTodo(todo.id)}
            aria-label="Görevi sil"
          >
            <FaTrash />
          </Button>
        </div>
      </ListGroup.Item>

      {/* Düzenleme Modal */}
      <Modal show={showEditModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Görevi Düzenle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleEditSubmit}>
            <Form.Group className="mb-3" controlId="editTodoTitle">
              <Form.Label>Görev Başlığı</Form.Label>
              <Form.Control
                type="text"
                placeholder="Görev başlığını girin"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                required
                className="shadow-sm"
              />
              <Form.Control.Feedback type="invalid">
                Lütfen bir görev başlığı girin.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="editTodoDescription">
              <Form.Label>Açıklama</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Görev açıklamasını girin (isteğe bağlı)"
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                className="shadow-sm"
              />
            </Form.Group>

            <div className="d-flex justify-content-end">
              <Button variant="outline-secondary" className="me-2" onClick={handleCloseModal}>
                <FaTimes className="me-1" /> İptal
              </Button>
              <Button variant="primary" type="submit">
                <FaSave className="me-1" /> Kaydet
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TodoItem;
