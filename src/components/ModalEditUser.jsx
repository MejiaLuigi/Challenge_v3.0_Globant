// import React, {useState} from "react";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';

// export function ModalEditUsers({ show, handleClose, users, editData }) {

//     const [formData, setFormData] = useState({
//         name: users.name,
//         surName: users.surName,
//         email: users.email
//       });
      
//       const handleSaveChanges = () => {
//               editData(users.id, formData);
//               handleClose();
//           };

//           const handleInputChange = (event) => {
//             const { name, value } = event.target;
//             setFormData(prevFormData => ({
//               ...prevFormData,
//               [name]: value
//             }));
//           };

//     return(
//         <>

  
//         <Modal show={show} onHide={handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>Modal heading</Modal.Title>
//           </Modal.Header>
//           <Modal.Body >
//           {users.map(user => (
//                     <Form key={user.id}>
//                         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                             <Form.Label>Email address</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 name="name"
//                                 placeholder="Enter First Name"
//                                 value={user.name}
//                                 onChange={handleInputChange}
//                                 required
//                                 autoFocus
//                             />
//                             <Form.Control
//                                 type="text"
//                                 name="surName"
//                                 placeholder="Enter Last Name"
//                                 value={user.surName}
//                                 onChange={handleInputChange}
//                                 required
//                                 autoFocus
//                             />
//                             <Form.Control
//                                 type="text"
//                                 name="email"
//                                 placeholder="Enter Email"
//                                 value={user.email}
//                                 onChange={handleInputChange}
//                                 required
//                                 autoFocus
//                             />
//                         </Form.Group>
//                     </Form>
//                 ))}
//             </Modal.Body>
//             <Modal.Footer>
//               <Button variant="secondary" onClick={handleClose}>
//                 Close
//               </Button>
//               <Button variant="primary" onClick={handleSaveChanges}>
//                 Save Changes
//               </Button>
//             </Modal.Footer>
            
//         </Modal>
//       </>
//     )
// }

import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export function ModalEditUsers({ show, handleClose, users, editData }) {
  const [formData, setFormData] = useState({
    name: "",
    surName: "",
    email: ""
  });

  // Función para actualizar el estado del formulario con los datos del usuario seleccionado
  const handleEditUser = (id) => {
    const user = users.filter(user => user.id === id);
    if (user) {
      setFormData({
        name: user.name,
        surName: user.surName,
        email: user.email
      });
    }
  };

  // Función para guardar los cambios editados
  const handleSaveChanges = () => {
    editData(id, formData);
    handleClose();
  };

  // Función para manejar cambios en los campos del formulario
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Users</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {users.map(user => (
            <Form key={user.id} onSubmit={(e) => e.preventDefault()}>
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
              <Button variant="primary" onClick={() => handleEditUser(user.id)}>
                Edit
              </Button>
            </Form>
          ))}
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
    </>
  );
}
