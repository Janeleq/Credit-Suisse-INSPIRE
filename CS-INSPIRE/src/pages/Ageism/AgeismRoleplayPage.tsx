import "../../styles/_ageism.css";
import React, { useState, useEffect } from "react";
import NavigationBar from "../../components/NavBarLogin";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import actionIcon from "../../assets/action.png";
import reflectionIcon from "../../assets/reflectionIcon.png";
import background from "../../assets/ageism/ageism.jpg";
import AgeismFacts from "./AgeismFactsPage";
import outcomeIcon from "../../assets/outcomeIcon.png";
import pastelGreyBg from "../../assets/pastelGreyBg.png";
// import { FaPerson } from 'react-icons/fa';

function Ageism() {
  const [isLoading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

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

  function AgeismRoleplay() {
    console.log("Heading to profile page!");
    navigate("/bias/ageismRoleplay", { state: { email: email } });
  }

  function AgeismFacts() {
    console.log("Heading to Ageism page");
    navigate("/bias/ageismFacts", { state: { email: email } });
  }

  return (
    <div className="container-fluid p-0" style={{ overflow: "hidden" }}>
      <NavigationBar />

      <div className="row" style={{ marginTop: "5vh" }}>
        <div
          className="col-sm-12 col-md-4 col-lg-6"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "120vh",
          }}
        ></div>
        <div
          className="col-sm-12 col-md-8 col-lg-6 text-center bg-white"
          style={{ height: "120vh" }}
        >
          <div className="section-title mt-5">
            <h4 className="title mb-4">
              <mark>Ageism</mark>
            </h4>
            <p className="text-muted para-desc mx-auto mb-0">
              Ageism refers to the stereotypes, prejudices, and discrimination
              based on a person's age. It can manifest in various ways, such as
              assumptions about capabilities, intellect, or relevance solely
              based on someone's age. Unfortunately, these biases can influence
              our perceptions and judgments without our conscious awareness.
              <br />
              <br />
              We recognize that ageism can have far-reaching consequences in
              society, affecting employment opportunities, healthcare access,
              and interpersonal relationships.
            </p>
            <br />
            <br />
            <div className="row">
              <div className="col">
                <p
                  className="lead bg-light w-25 mx-auto"
                  style={{ fontWeight: "bold" }}
                >
                  Roleplay
                </p>

                <p className="mb-0">
                  Take up a roleplay to learn and explore more about Ageism!
                </p>

                <small className="">
                  There are a few prompts that will appear in the roleplay.
                </small>

                <div className="guide mx-auto text-muted mt-3">
                  <div className="row">
                    <div className="col">
                      <img
                        src={actionIcon}
                        alt="action"
                        style={{ width: "20%" }}
                      />
                      <br />
                      <small className="">carry out an action</small>
                    </div>
                    <div className="col">
                      <img
                        src={reflectionIcon}
                        alt="reflection"
                        style={{ width: "20%" }}
                      />
                      <br />
                      <small className="">write down your thoughts</small>
                    </div>
                    <div className="col">
                      <img
                        src={outcomeIcon}
                        alt="outcome"
                        style={{ width: "20%" }}
                      />
                      <br />
                      <small className="">
                        view the consequence of your action
                      </small>
                    </div>
                  </div>
                  <br />
                  <button
                    className="mx-auto text-center"
                    onClick={AgeismRoleplay}
                  >
                    Start Roleplay
                  </button>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="row">
              <div className="col">
                <p
                  className="lead bg-light w-25 mx-auto"
                  style={{ fontWeight: "bold" }}
                >
                  Statistics
                </p>

                <div className="guide w-50 mx-auto">
                  <p>Get to know some statistics regarding Ageism!</p>
                  <i className="fa fa-male" aria-hidden="true"></i>
                  <button type="" onClick={AgeismFacts}>
                    View statistics
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Ageism;
