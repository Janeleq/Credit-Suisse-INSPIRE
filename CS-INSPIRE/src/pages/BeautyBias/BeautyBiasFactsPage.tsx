import'../../styles/_ageism.css'
import React, {useState, useEffect} from 'react';
import NavigationBar from '../../components/NavBarLogin.tsx'
import Footer from '../../components/Footer.tsx';
import background from '../../assets/genderBackground.png'
import qrcode from '../../assets/beautyBias/qrcode_platform.who.int.png'

function BeautyBiasFacts() {
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
        <div className="container-fluid bootdey p-0" style={{backgroundImage: `url(${background})`, overflow: 'hidden'}}>
            <NavigationBar/>

            <div className='' style={{backgroundImage: `url(${background})`, borderRadius: '4px', height: '50vh'}}>
              <div className='row bg-light' style={{marginTop: '18vh'}}>
                  <figure className="text-center mb-0">
                    <blockquote className="blockquote">
                      {/* <img className='img-fluid w-50 h-50' style={{borderRadius: '50%'}} src="" alt=""/> */}
                      <p className="pb-2">
                        <i className="fas fa-quote-left fa-xs text-primary"></i>
                        <span className="p-3 lead font-italic" style={{opacity: '1.2'}}>Globally, the employment rate for men is 75%, while women stands at around 50%.</span>
                        <br/><span style={{fontSize: '0.875rem'}}>Seems like some unconscious bias going on in the workforce?</span>
                        <i className="fas fa-quote-right fa-xs text-primary"></i>
                      </p>
                    </blockquote>
                    <figcaption className="blockquote-footer mb-0">
                        World Bank (2018)
                    </figcaption>
                  </figure>
              </div>
            
              <div className="mt-5 row">
                <div className='col-6 text-center'>
                <img src={qrcode}/>
                  <h4>Do you ever associate a name to a specific gender?</h4>
                  <p>Enter a name that comes to your mind and the gender you associate it with (engilsh names only please!): &nbsp; 
                    <br/> Then, see if it is the same as to what you think!
                    <br/><input type="text" id="name" onChange={handleChange}></input> <br/>
                    <button type="submit" className='m-1' onClick={fetchData}>See Results</button>
                  </p>
                  
                </div>
                <div className='col-6'>
                    <p>
                      Name: {name} <br/>
                      Gender: {gender} <br/>
                      Probability: {probability} <br/>
                    </p>
                </div>
              </div>


              <div className='row bg-light'>
                <div className='col text-left'>
                  <p className='w-50 text-center lead'>
                  <figure className="text-center mb-0">
                    <blockquote className="blockquote">
                      {/* <img className='img-fluid w-50 h-50' style={{borderRadius: '50%'}} src="" alt=""/> */}
                      <p className="pb-2">
                        <i className="fas fa-quote-left fa-xs text-primary"></i>
                        <span className="p-3 lead font-italic" style={{opacity: '1.2'}}> There are no countries in the world with gender equality, the study found.</span>
                        <br/><span style={{fontSize: '0.875rem'}}>Zimbabwe had the highest amount of bias with only 0.27% of people reporting no gender bias at all. At the other end of the scale was Andorra where 72% of people reported no bias.</span>
                        <i className="fas fa-quote-right fa-xs text-primary"></i>
                      </p>
                    </blockquote>
                    <figcaption className="blockquote-footer mb-0">
                        BBC News (2020)
                    </figcaption>
                  </figure>
                 
                  </p>
                
                </div>
               
              </div>
             
            </div>
            <Footer/>
       </div>
        
    )
}

export default BeautyBiasFacts