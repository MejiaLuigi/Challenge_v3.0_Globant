export async function editUser(id, formEditData){
    console.log("this is my data: ", id)

    // const urlApiEdit = `http://localhost:3000/users/${id}`;
    const urlApiEdit = `https://my-json-server.typicode.com/MejiaLuigi/Challenge_v3.0_Globant/users/${id}`;

    const peticonPatch = {
        method : "PATCH",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(formEditData)
    };

    try{
        const editFormResponse = await fetch (urlApiEdit, peticonPatch);
        const dataEdit = await editFormResponse.json();
        return dataEdit
    }catch(error){
        console.log("There is an error", error)
    }



}
