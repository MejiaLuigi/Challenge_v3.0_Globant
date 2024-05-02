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
                src='https://avatar.iran.liara.run/public'
                alt="avatar user"
                className="imgCard"
              />
              <div className="card-content-text">
                <h2>{`${userCard.firstName} ${userCard.surname}`}</h2>
                <p>{userCard.email}</p>
                <hr />
                <div className="content-buttons">
                  <button title="Edit"  className="btn-edit"onClick={() => handleShow(userCard)}><span className="edit material-symbols-outlined">edit</span></button>
                  <button title="Delete" className="btn-delete" onClick={() => deleteData(userCard.id)}><span className="delete material-symbols-outlined">delete</span></button>
                </div>
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
