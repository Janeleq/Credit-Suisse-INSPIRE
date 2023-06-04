import'../styles/_ageism.css'
import React, {useState, useEffect} from 'react';
import NavigationBar from '../components/NavBarLogin'
import Footer from '../components/Footer.tsx';


function GenderFacts() {
    const [isLoading, setLoading] = useState(true)
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
  
    function someRequest() { //Simulates a request; makes a "promise" that'll run for 2.5 seconds
      return new Promise(resolve => setTimeout(() => resolve(), 1000));
    } 

    useEffect(() => {
      someRequest().then(() => {
        const loaderElement = document.querySelector(".loader-container");
        if (loaderElement) {
          loaderElement.remove();
          setLoading(!isLoading);
        }
      });
    });

    return (
        <div className="container-fluid bootdey p-0">
            <NavigationBar/>
        <div className="row" style={{marginTop: '10%'}}>
           
        Enter a name that comes to your mind and the gender you associate it with (engilsh names only please!): &nbsp;<input type="text" id="name" onChange={handleChange}></input>
            <br/>
            Name: {name} <br/>
            Gender: {gender} <br/>
            Probability: {probability} <br/>
            <button type="submit" onClick={fetchData}>See Results</button>
        </div>
        <Footer/>
       </div>
        
    )
}

export default GenderFacts