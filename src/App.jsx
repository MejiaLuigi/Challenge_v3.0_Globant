import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { getDataApi } from "./services/getDataApi";
import { postDataApi } from "./services/postDataApi";
import { FormRegister } from "./components/FormUser";
import { CardUser } from "./components/CardUser";
import { deleteUser } from "./services/deleteUser";
import { editUser } from "./services/editUser";

function App() {
  const [usersData, setUsersData] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    getDataApi()
      .then((dataApi) => {
        setUsersData(dataApi);
      })
      .catch((error) => {
        return error;
      });
  }, []);

  const addData = (formData) => {
    postDataApi(formData).then((newUser) => {
      setUsersData([...usersData, newUser]);
    });
  };

  const deleteData = (id) => {
    deleteUser(id);
    setUsersData(usersData.filter((userData) => userData.id !== id));
  };

  const editUserHandler = (formData) => {
    console.log("editing", formData);
    editUser(formData.id, formData)
      .then((editedUser) => {
        const updatedUsers = usersData.map((user) => {
          if (user.id === formData.id) {
            return editedUser;
          } else {
            return user;
          }
        });
        setUsersData(updatedUsers);
      })
      .catch((error) => console.error("Error editing user:", error));
  };

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
    <nav onToggleForm={handleToggleForm}>
      <div>NAVBAR</div>
      <ul>
        <li> 
            <button className="btn-formNew" onClick={handleToggleForm}>+ NEW</button> 
        </li>
      </ul>
    </nav>
    {showForm && <FormRegister onFormSubmit={addData} />}
      
      {usersData && usersData.length && (
        <CardUser
          users={usersData}
          deleteData={deleteData}
          editUserHandler={editUserHandler}
        />
      )}
    </>
  );
}

export default App;
