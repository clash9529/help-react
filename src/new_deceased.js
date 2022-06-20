import React, {useState, useEffect} from 'react';
import "./App.css"

function NewDetails(){

    const dataUrl = "http://localhost:3000/images/1";
    
    const [deceased, setDeceased] = useState([]);

    useEffect(() => {
        getDeceased();
    }, []);

    async function getDeceased() {
        const response = await fetch(dataUrl);
        const data = await response.json();
        
        setDeceased(data);
        console.log(data);

    }
    return(
        <div className='App-header'>
            <h1>New deceased details</h1>
            <img src={deceased.url} alt="guy"/>
        </div>
    );
}

export default NewDetails;