import "../App.css";
import React, { useState } from "react";
import { ModalEditUsers } from "./ModalEditUser";

export function CardUser({ users, deleteData, editUserHandler }) {
  const [show, setShow] = useState(false);
  const [userToEdit, setUserToEdit] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (userCard) => {
    setShow(true);
    setUserToEdit(userCard);
  };
  return (
    <>
      <div className="content-main">
        <h1>Contacts</h1>
        <hr/>
        <div className="content-container">
          {users.map((userCard, index) => (
            <div className="card-container-main" key={index}>
              <img
                src={userCard.avatar}
                alt="avatar user"
                className="imgCard"
              />
              <h2>{`${userCard.name} ${userCard.surName}`}</h2>
              <p>{userCard.email}</p>
              <hr />
              <div className="content-buttons">
                <button  className="btn-edit"onClick={() => handleShow(userCard)}><span class="edit material-symbols-outlined">edit</span></button>
                <button className="btn-delete" onClick={() => deleteData(userCard.id)}><span className="delete material-symbols-outlined">delete</span></button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {show && (
        <ModalEditUsers
          show={show}
          handleClose={handleClose}
          editUserHandler={editUserHandler}
          user={userToEdit}
        />
      )}
    </>
  );
}
