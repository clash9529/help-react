import React, {useState, useEffect} from 'react';
import "./App.css"

function NewDetails(){
    const dataUrl = "https://jsonplaceholder.typicode.com/users";

    // const dataUrl = "http://localhost:5000/deceaseds";
    
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
            {deceased.map((value) => (
                <div>
                    <h5>Name: {value.name}</h5>
                    <hr/>
                </div>
            ))}
        </div>
    );
}

export default NewDetails;