import stats1 from "../../assets/ageismStats.png";
import "../../styles/_ageism.css";
import { useState, useEffect } from "react";
import NavigationBar from "../../components/NavBarLogin.tsx";
import Footer from "../../components/Footer.tsx";
import statisticOne from "../../assets/ageismStats.png";

function AgeismFacts() {
  const [isLoading, setLoading] = useState(true);
  const [isNewName, setNewName] = useState(false);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [probability, setProbability] = useState("");

  function handleChange(event) {
    // alert("change detected")
    event.preventDefault();
    setName(event.target.value);
  }

  const fetchData = async () => {
    name.replace(/ /g, "");
    console.log(name);
    const URL = `https://api.genderize.io?name=${name}`;
    console.log(URL);

    const result = await fetch(URL);
    console.log(result);
    result.json().then((json) => {
      console.log(json);
      setGender(json.gender);
      setProbability(json.probability);
    });
  };

  function someRequest() {
    //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise((resolve) => setTimeout(() => resolve(), 1000));
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
    <div className="container-fluid bootdey p-0" style={{ overflow: "hidden" }}>
      <NavigationBar />

      <div className="row" style={{ marginTop: "18vh" }}>
        <figure className="text-center mb-0">
          <blockquote className="blockquote">
            {/* <img className='img-fluid w-50 h-50' style={{borderRadius: '50%'}} src="" alt=""/> */}
            <p className="pb-2">
              <i className="fas fa-quote-left fa-xs text-primary"></i>
              <span className="lead font-italic">
                Globally, the employment rate for men is 75%, while women stands
                at around 50%.
              </span>
              <br />
              <span style={{ fontSize: "0.875rem" }}>
                Seems like some unconscious bias going on in the workforce?
              </span>
              <i className="fas fa-quote-right fa-xs text-primary"></i>
            </p>
          </blockquote>
          <figcaption className="blockquote-footer mb-0">
            World Bank (2018)
          </figcaption>
        </figure>
      </div>
      <div className="row">
        <div className="col">
          <img src={statisticOne} alt="Statistic One" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AgeismFacts;
