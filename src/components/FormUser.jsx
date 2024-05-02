import { useState } from "react";
// import iconUser from '../assets/img/iconContacts.png'
// import iconUser from 'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'
// import iconUser from 'Challenge_v3.0_Globant/assets/iconContacts-DVeruorY.png'

const generateRandomId = () => {
    const randomId = Math.random().toString(36).substring(2);
    return randomId.substring(0, 5); // Truncar el ID a 5 caracteres
  };

export function FormRegister({onFormSubmit}) {

    const [name, setName] = useState ('');
    const [surName, setSurName] = useState ('');
    const [email, setEmail] = useState ('');
    // const [idCounter, setIdCounter] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            img: 'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png',
            firstName: name,
            surname: surName,
            email: email
        }
        
        console.log("look this data: ", formData)
        // setIdCounter(generateRandomId);
        onFormSubmit(formData)
    }

    return(
        <form className="form-content" onSubmit={handleSubmit}>
            <h3>Add New Contact</h3>
        <div className="form-content-input">
                <input
                className="name-content"
                type="text"
                name="name"
                placeholder="Enter First Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                className="surName-content"
                type="text"
                name="surName"
                placeholder="Enter Second Name"
                value={surName}
                onChange={(e) => setSurName(e.target.value)}
                required
            />
            <input
                className="email-content"
                type="text"
                name="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
        </div>
        <div className="button-content">
            <button className="button-form" type="submit">Send
            <span className="material-symbols-outlined">done</span></button>
        </div>
    </form>
    )
}
