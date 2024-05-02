export async function postDataApi (dataReceived){
    // const urlApiPost = "http://localhost:3000/users";
    // const urlApiPost = "https://my-json-server.typicode.com/MejiaLuigi/Challenge_v3.0_Globant/users";
    const urlApiPost = "https://challenge-wgie.onrender.com/api/save";
    
    console.log("see data", dataReceived)

    const peticonPost = {
        method : "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(dataReceived)

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
