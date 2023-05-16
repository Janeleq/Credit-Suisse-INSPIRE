import { useState, useEffect, useCallback } from 'react';


export default () => {
    const [isNewName, setNewName] = useState(false)
    const [name, setName] = useState('');
    const [gender, setGender] = useState("");
    const [probability, setProbability] = useState("");

    function handleChange (event) {
        // alert("change detected")
        event.preventDefault();
        setName(event.target.value);
    }

    const fetchData = async() => {
        
        name.replace(/ /g, "")
        console.log(name)
        const URL = `https://api.genderize.io?name=${name}`
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
            Enter a name that comes to your mind and the gender you associate it with (engilsh names only please!): &nbsp;<input type="text" id="name" onChange={handleChange}></input>
            <br/>
            Name: {name} <br/>
            Gender: {gender} <br/>
            Probability: {probability} <br/>
            <button type="submit" onClick={fetchData}>See Results</button>
        </div>
    );
}
