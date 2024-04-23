export async function postDataApi (formData){
    const urlApiPost = "http://localhost:3000/users";
    console.log("see data", formData)

    const peticonPost = {
        method : "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(formData)

    }

    try{
        const postResponseApi = await fetch(urlApiPost, peticonPost);
        const newUser = await postResponseApi.json();
        console.log(newUser)
        return newUser
    }catch(error){
        console.log("There is an error", error)
    }
}
