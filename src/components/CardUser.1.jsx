import React, { useState } from "react";
import { ModalEditUsers } from "./ModalEditUser";

export function CardUser(props) {
  const 
  const [show, setShow] = useState(false);
  const [userToEdit, setUserToEdit] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = (userCard) => {
    setShow(true);
    setUserToEdit(userCard);
  };
  return (
    <>
      <div className="content-main">
        <h1>My Contacts</h1>
        <div className="content-container">
          {users.map((userCard) => (
            <div className="card-container-main" key={userCard.id}>
              <img
                src={userCard.avatar}
                alt="avatar user"
                className="imgCard"
              />
              <h2>{`${userCard.name} ${userCard.surName}`}</h2>
              <p>{userCard.email}</p>
              <hr />
              <div className="content-buttons">
                <button onClick={handleShow(userCard)}>Edit</button>
                <button onClick={() => deleteData(userCard.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ModalEditUsers
        show={show}
        handleClose={handleClose}
        editData={editData}
        user={userToEdit}
      />
    </>
  );
}