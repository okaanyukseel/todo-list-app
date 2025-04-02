import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    addTodo({
      title,
      description,
      completed: false
    });

    // Form alanlarını sıfırla
    setTitle('');
    setDescription('');
    setValidated(false);
  };

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <h5 className="card-title mb-3">Yeni Görev Ekle</h5>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="todoTitle">
            <Form.Label>Görev Başlığı</Form.Label>
            <Form.Control
              type="text"
              placeholder="Görev başlığını girin"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="shadow-sm"
            />
            <Form.Control.Feedback type="invalid">
              Lütfen bir görev başlığı girin.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="todoDescription">
            <Form.Label>Açıklama</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              placeholder="Görev açıklamasını girin (isteğe bağlı)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="shadow-sm"
            />
          </Form.Group>

          <div className="d-grid">
            <Button variant="primary" type="submit" className="d-flex align-items-center justify-content-center">
              <FaPlus className="me-2" /> Görev Ekle
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default TodoForm;
