export async function getDataApi(){
    const endPoint = "http://localhost:3000/users";
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
