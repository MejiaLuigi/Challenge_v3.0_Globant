export async function getDataApi(){
    // const endPoint = "http://localhost:3000/users";
    // const endPoint = "https://my-json-server.typicode.com/MejiaLuigi/Challenge_v3.0_Globant/users";
    // const endPoint = "https://challenge-wgie.onrender.com/api/search";
    const endPoint = "https://challenge-wgie.onrender.com/api/users";
    try{
        
        const responseDataApi = await fetch (endPoint);
        const dataApi = await responseDataApi.json();
        console.log(dataApi);
        return dataApi;

    }catch(error){
        console.log("not found by: ", error)
        throw error
    }
}
