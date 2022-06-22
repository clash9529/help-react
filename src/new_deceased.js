import React, {useState, useEffect} from 'react';
import "./App.css"

function NewDetails(){

    const dataUrl = "http://10.16.33.253:3000/images";
    // const dataUrl = "http://10.16.33.253:3000/images";
    
    const [deceased, setDeceased] = useState([]);

    useEffect(() => {
        getDeceased();
    }, []);

    async function getDeceased() {
        const response = await fetch(dataUrl);
        const data = await response.json();
        
        console.log(data)
        var result = [];
        var keys = Object.keys(data);
        console.log(keys);
        keys.forEach(function(key){
            let url = `http://10.16.33.253:3000/${data[key].url.slice(19)}`
            result.push(url);
        });
        console.log(result);
        setDeceased(result);
        // const url = `http://10.16.33.253:3000/${data.url.slice(19)}`
        // setDeceased(url);
        // // console.log(data);
        // console.log(url);

    }
    return(
        // <div className='App-header'>
        //     <h1>New deceased details</h1>
        //     <img src={deceased} alt="guy"/>
        // </div>

        <div>
            {deceased.map((value) => (
                <img src={value} alt="guy"/>
            ))}
        </div>
        
        
    );
}

export default NewDetails;