import React, {useState, useEffect} from 'react';
import "./App.css"
import Moment from 'moment';

function ViewDetails(){
    
    const dataUrl = "http://localhost:3000/deceased_posts?start=1&end=5";

    Moment.locale('en');
    
    const [deceased, setDeceased] = useState([]);

    useEffect(() => {
        getDeceased();
    }, []);

    async function getDeceased() {
        const response = await fetch(dataUrl, {
            mode:'cors'
        });
        const data = await response.json();
        
        setDeceased(data);
        console.log(data);

    }
    return(
        <div className='App-header'>
            <h1>View Deceased Info</h1>
            {deceased.map((value) => (
                <div>
                    <h2>{value.name}, {value.age}</h2>
                    <h5>Date of Birth: {Moment(value.created_at).format('Do MMMM YYYY')}</h5>
                    <h5>Description: {value.description}</h5>
                    <hr/>
                </div>
            ))}
        </div>
    );
}

export default ViewDetails;