import { useState } from "react";
import iconUser from '../assets/img/icon_first.png'

export function FormRegister({onFormSubmit}) {

    const [name, setName] = useState ('');
    const [surName, setSurName] = useState ('');
    const [email, setEmail] = useState ('');
    const [idCounter, setIdCounter] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            id: `${idCounter}`,
            avatar: iconUser,
            name: name,
            surName: surName,
            email: email
        }
        
        console.log("look this data: ", formData)
        setIdCounter(prevCounter => prevCounter + 1);
        onFormSubmit(formData)
    }

    return(
        <form className="form-content" onSubmit={handleSubmit}>
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
                className="lastName-content"
                type="text"
                name="surName"
                placeholder="Enter Last Name"
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
        <button className="button-form" type="submit">
            Send
        </button>
        </div>
    </form>
    )
}
