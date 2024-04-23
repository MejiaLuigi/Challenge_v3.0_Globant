import "../App.css";
import React, {useState} from "react";
import { ModalEditUsers } from "./ModalEditUser";


export function CardUser({ users, deleteData, editData }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <div className="content-main">
        <h1>My Contacts</h1>
        <div className="content-container">
          {
            users.map((userCard, position) => (
              <div className="card-container-main" key={position}>
                <img
                  src={userCard.avatar}
                  alt="avatar user"
                  className="imgCard"
                />
                <h2>{`${userCard.name} ${userCard.surName}`}</h2>
                <p>{userCard.email}</p>
                <hr />
                <div className="content-buttons">
                  <button onClick={handleShow, users.id}>Edit</button>
                  <button onClick={() => deleteData(userCard.id)}>Delete</button>
                </div>
              </div>
            ))}
        </div>
      </div>
      <ModalEditUsers show={show} handleClose={handleClose} editData={editData} users={users}/>
    </>
  );
}
