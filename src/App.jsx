import { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css"
import "./App.css";
import { getDataApi } from "./services/getDataApi";
import { postDataApi } from "./services/postDataApi";
import { FormRegister } from "./components/FormUser";
import { CardUser } from "./components/CardUser";
import { deleteUser } from "./services/deleteUser";
import { editUser } from "./services/editUser";



function App() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    getDataApi()
      .then((dataApi) => {
        setUsersData(dataApi);
      })
      .catch((error) => {return error});
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

  const editData = (id, formData) => {
    console.log("editing", id);
    editUser(id, formData)
    .then((editedUser) => {
      const updatedUsers = usersData.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            name: editedUser.name,
            surName: editedUser.surName,
            email: editedUser.email
          };
        } else {
          return user;
        }
      });
      setUsersData(updatedUsers);
    }).catch(error => console.error("Error editing user:", error));
  };
  return (
    <>
      <FormRegister onFormSubmit={addData} />
      <CardUser users={usersData} deleteData={deleteData} editData={editData} />
    </>
  );
}

export default App;
