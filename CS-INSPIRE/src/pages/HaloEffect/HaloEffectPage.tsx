import "../../styles/_ageism.css";
import React, { useState, useEffect } from "react";
import NavigationBar from "../../components/NavBarLogin";
import Footer from "../../components/Footer";
import background from "../../assets/haloEffect/haloeffectBg.jpg";
import actionIcon from "../../assets/action.png";
import outcomeIcon from "../../assets/outcomeIcon.png";
import reflectionIcon from "../../assets/reflectionIcon.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function HaloEffect() {
  const [isLoading, setLoading] = useState(true);
  // const [email, setEmail] = useState('')
  const navigate = useNavigate();
  // const {state} = useLocation();
  function someRequest() {
    //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise((resolve) => setTimeout(() => resolve(), 1000));
  }

  useEffect(() => {
    // if (state.email) {
    //   setEmail(state.email)
    // }
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loader-container");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });

  function HaloEffectRoleplay() {
    console.log("Heading to roleplay page!");
    navigate("/bias/haloEffectRoleplay");
  }

  function HaloEffectFacts() {
    console.log("Heading to facts page");
    navigate("/bias/haloEffectFacts", { state: { } });
  }

  return (
    <div className="container-fluid bootdey p-0" style={{ overflow: "hidden" }}>
      <NavigationBar />
      <div className="row" style={{ marginTop: "5vh" }}>
        <div
          className="col-sm-12 col-md-4 col-lg-6"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition:'center',
            height: "140vh",
          }}
        ></div>
        <div
          className="col-sm-12 col-md-8 col-lg-6 text-center bg-white"
          style={{ height: "140vh" }}
        >
          <div className="section-title mt-5">
            <h4>
              <mark>Halo Effect</mark>
            </h4>
            <p className="text-muted para-desc mx-auto mb-0">
              One common bias that can come into play is known as the 'halo
              effect.' It occurs when we attribute positive qualities or
              attributes to someone or something based on an initial positive
              impression.
              <br />
              <br />
              In the context of our website, it means that you may be inclined
              to view our articles more favorably or perceive them as more
              valuable simply because you had a positive first encounter with
              our website or one specific article.
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
                  Take up a roleplay to learn and explore more about Halo
                  Effect!
                </p>

                <small className="">
                  There are a few prompts that will appear in the roleplay.
                </small>

                <div className="guide mx-auto text-muted mt-3">
                  <div className="row w-100">
                    <div className="col w-50">
                      <img
                        src={actionIcon}
                        alt="action"
                        style={{ width: "20%" }}
                      />
                      <br />
                      <small className="">carry out an action</small>
                    </div>
                    <div className="col w-50">
                      <img
                        src={reflectionIcon}
                        alt="reflection"
                        style={{ width: "20%" }}
                      />
                      <br />
                      <small className="">write down your thoughts</small>
                    </div>
                    <div className="col w-50">
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
                    onClick={HaloEffectRoleplay}
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
                  <p>Get to know some statistics regarding Halo Effect!</p>

                  <button type="" onClick={HaloEffectFacts}>
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

export default HaloEffect;
