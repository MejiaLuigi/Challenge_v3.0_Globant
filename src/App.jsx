import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { getDataApi } from "./services/getDataApi";
import { postDataApi } from "./services/postDataApi";
import { FormRegister } from "./components/FormUser";
import { CardUser } from "./components/CardUser";
import { deleteUser } from "./services/deleteUser";
import { editUser } from "./services/editUser";
import { getContact } from "./services/getContact";
import { SearchBar } from "./components/SearchBar";


function App() {
  const [usersData, setUsersData] = useState([]);
  const [originalUserData, setOriginalUserData] = useState([]);
  const [showForm, setShowForm] = useState(false);


  useEffect(() => {
    getDataApi()
      .then((dataApi) => {
        setUsersData(dataApi);
        setOriginalUserData(dataApi);
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

  const onSearchHandler = (contact) =>{        
        if (contact.trim() === "") {
          // Si el campo de búsqueda está vacío, restaurar los datos originales
          setUsersData(originalUserData);
        } else {
          getContact(contact)
            .then((dataContacts) => {
              console.log(dataContacts);
              setUsersData(usersData.filter((userData) => userData.firstName === contact));
            })
            .catch((error) => console.error("Error finding user:", error));
        }
    }

  return (
    <>
   
      <div className="contentSearch">
        
          <SearchBar onSearch={onSearchHandler}/>
          <div> 
              <button className="btn-formNew" onClick={handleToggleForm}><span className="material-symbols-outlined">person_add</span> NEW</button> 
          </div>
        
      </div>


    <div className="content-mainForm">
      {showForm && <FormRegister onFormSubmit={addData} />}
    </div>


      
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
