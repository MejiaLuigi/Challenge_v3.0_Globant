export async function getContact(contact){
    if(contact === '') return null;
    try{

        // const url_Contacts = `http://localhost:3000/users/?name=${encodeURIComponent(contact)}`
        // const url_Contacts = `https://my-json-server.typicode.com/MejiaLuigi/Challenge_v3.0_Globant/users/?name=${encodeURIComponent(contact)}`
        const url_Contacts = `https://challenge-wgie.onrender.com/api/name?firstName=${contact}`
        let Contacts = await fetch (url_Contacts)
        let dataContacts= await Contacts.json();


        // console.log(dataCharacteres)
        return dataContacts
    }catch(error){
        throw new Error('debes ingresar un nombre');
    }
}
