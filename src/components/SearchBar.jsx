import React, { useState } from "react";


export function SearchBar({onSearch}){
    const [contact, setContact] = useState('');

    //Aqui pasamos la función onSearchHandles como un props
    const onSearchSubmit = (event) => {

        event.preventDefault();

        console.log('Searching for:', contact);
        onSearch(contact);
      }; //Ayuda la legibilidad del codigo

    return(
        <>

        <div className='searchBar'>
                <form className="formSearch" onSubmit={onSearchSubmit}>
                    <input
                    type="text"
                    className="input-search"
                    placeholder="Search"
                    value={contact}
                    onChange={e => setContact(e.target.value)}
                    />
                    <button type="submit" className="btnSearch">
                        <span>
                            <svg role="img" alt="Rock Content blog search" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <title>Search Icon</title>
                            <path d="M18.9062 18.9062C19.3723 18.4402 19.3723 17.6847 18.9063 17.2187L13.9338 12.2453C14.8711 10.9572 15.3753 9.40488 15.3738 7.81188C15.3738 3.64234 11.9814 0.25 7.81188 0.25C3.64234 0.25 0.25 3.64234 0.25 7.81188C0.25 11.9814 3.64234 15.3738 7.81188 15.3738C9.40488 15.3753 10.9572 14.8711 12.2453 13.9338L17.2187 18.9063C17.6847 19.3723 18.4402 19.3723 18.9062 18.9062ZM7.81188 12.9855C6.7885 12.9856 5.78809 12.6822 4.93714 12.1137C4.0862 11.5452 3.42296 10.7371 3.03129 9.79165C2.63961 8.8462 2.53711 7.80583 2.73674 6.80211C2.93637 5.7984 3.42916 4.87643 4.15279 4.15279C4.87643 3.42916 5.7984 2.93637 6.80211 2.73674C7.80583 2.53711 8.8462 2.63961 9.79165 3.03129C10.7371 3.42296 11.5452 4.0862 12.1137 4.93714C12.6822 5.78809 12.9856 6.7885 12.9855 7.81188C12.9839 9.1835 12.4383 10.4985 11.4684 11.4684C10.4985 12.4383 9.1835 12.9839 7.81188 12.9855Z" fill="#A0ABC0"></path>
                            </svg>
                        </span>
                    </button>
                </form>
          </div>
        </>
    )
}
