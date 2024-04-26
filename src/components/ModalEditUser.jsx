
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export function ModalEditUsers({ show, handleClose, user, editUserHandler }) {
  const [formData, setFormData] = useState({
    id: user.id,
    name: user.name,
    surName: user.surName,
    email: user.email,
  });

  const handleSaveChanges = () => {
    editUserHandler(formData);
    handleClose();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Users</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Form.Group className="mb-3" controlId={`formUser${user.id}`}>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter First Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <Form.Control
              type="text"
              name="surName"
              placeholder="Enter Last Name"
              value={formData.surName}
              onChange={handleInputChange}
              required
            />
            <Form.Control
              type="text"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
