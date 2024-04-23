export async function editUser(id, formEditData){

    const urlApiEdit = `http://localhost:3000/users/${id}`;

    const peticonPacth = {
        method : "PATCH",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(formEditData)
    };

    try{
        const editFormResponse = await fetch (urlApiEdit, peticonPacth);
        const dataEdit = await editFormResponse.json();
        return dataEdit
    }catch(error){
        console.log("There is an error", error)
    }



}
