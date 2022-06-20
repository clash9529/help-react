import React, {useState, useEffect} from 'react';
import "./App.css"
import Moment from 'moment';

function ViewDetails(){
    // const dataUrl = "https://jsonplaceholder.typicode.com/users";

    const dataUrl = "http://localhost:5000//deceased_posts/1";
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
            <h1>{deceased.name}, {deceased.age}</h1>
            <div>
                <h5>Date of Birth: {Moment(deceased.created_at).format('Do MMMM YYYY')}</h5>
                <h5>Description: {deceased.description}</h5>
                <hr/>
            </div>
        </div>
    );
}

export default ViewDetails;