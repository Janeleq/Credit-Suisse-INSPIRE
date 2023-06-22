import stats1 from "../../assets/ageismStats.png";
import "../../styles/_ageism.css";
import { useState, useEffect } from "react";
import NavigationBar from "../../components/NavBarLogin.tsx";
import Footer from "../../components/Footer.tsx";
import statisticOne from "../../assets/ageism/ageismStats.png";
import statisticTwo from "../../assets/ageism/ageismStatsTwo.png"
import pastelgreyBg from "../../assets/pastelGreyBg.png";
import ageismIntroIcon from "../../assets/ageism/ageismFactsIntro.svg";

function HaloEffectFacts() {
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
    <div className="container-fluid p-0" style={{ overflow: "hidden" }}>
      <NavigationBar />

      <div className="row" style={{ marginTop: "8vh" }}>
        <div
          style={{ backgroundImage: `url(${pastelgreyBg})`, height: "80vh" }}
        >
          <img
            src={ageismIntroIcon}
            style={{
              float: "right",
              width: "",
              zIndex: 2,
              marginTop: "20vh",
              paddingRight: "2vw",
            }}
          />
          {/* <h2 className="lead" style={{ marginTop: '20vh', paddingLeft:'5vw'}}>Some statistics and facts about Ageism!</h2> */}
          <h3
            style={{
              marginTop: "18vh",
              paddingLeft: "5vw",
              fontSize: "90px",
              fontWeight: "700",
              fontFamily: "Concert One, cursive",
            }}
          >
            Halo Effect:
            <br />
            <span
              className="lead"
              style={{
                fontFamily: "Concert One, cursive",
                fontWeight: "200",
                fontSize: "60px",
              }}
            >
              statistics & facts
            </span>
          </h3>
        </div>

        {/* <figure className="text-center mb-0">
          <blockquote className="blockquote">
            <p className="pb-2">
              <span className="lead font-italic">
                Globally, the employment rate for men is 75%, while women stands
                at around 50%.
              </span>
              <br />
              <span style={{ fontSize: "0.875rem" }}>
                Seems like some unconscious bias going on in the workforce?
              </span>
            </p>
          </blockquote>
          <figcaption className="blockquote-footer mb-0">
            World Bank (2018)
          </figcaption>
        </figure> */}
      </div>
      <div className="row">
        <div className="col-12 mx-auto text-center bg-light" style={{height: '100vh'}}>
          <img src={statisticOne} alt="Statistic One" style={{width: '100vw', height: '95vh'}} />
          <span className="text-center mx-auto" style={{width: '100vw', height: '5vh', backgroundColor: 'lightgray'}}>Credits:  National Poll of Healthy Aging</span>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mx-auto text-center bg-light" style={{height: '100vh'}}>
          <img src={statisticTwo} alt="Statistic Two" style={{width: '100vw', height: '95vh'}} />
          <span className="text-center mx-auto" style={{width: '100vw', height: '5vh', backgroundColor: 'lightgray'}}>Credits:  National Poll of Healthy Aging</span>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HaloEffectFacts;
