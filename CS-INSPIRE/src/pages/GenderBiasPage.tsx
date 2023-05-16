import { useState, useEffect, useCallback } from 'react';


export default () => {
    const [isNewName, setNewName] = useState(false)
    const [name, setName] = useState('');
    const [gender, setGender] = useState("");
    const [probability, setProbability] = useState(0);

    const URL = `https://api.genderize.io?name=${name}`
    console.log(URL)
    
    function handleChange (event) {
        // alert("change detected")
        event.preventDefault();
        setName(event.target.value);
    }

    const fetchData = async() => {
        console.log(URL)
        const result = await fetch(URL)
        console.log(result)
        result.json().then(json => {
            console.log(json);
            setGender(json.gender)
            setProbability(json.probability)
        })
    }
    
    return (
        <div className=''>
            Name: &nbsp;<input type="text" id="name" onChange={handleChange}></input>
            <br/>
            {name}
            Gender: {gender} <br/>
            Probability: {probability} <br/>
            <button type="submit" onClick={fetchData}>See Results</button>
        </div>
    );
}
