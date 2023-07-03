import "../../styles/_ageism.css";
import { useState, useEffect } from "react";
import NavigationBar from "../../components/NavBarLogin";
import { useNavigate } from "react-router-dom";

function GenderRoleplay() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);

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
    <div className="container-fluid">
      <NavigationBar />
      <div className="row" style={{ marginTop: "18vh" }}>
        <div className="col-12 text-center">
          <div className="section-title mb-4 pb-2">
            <h4 className="title mb-4">Roleplaying</h4>
            <p className="text-muted para-desc mx-auto mb-0">
              Welcome to our Unconscious Bias Roleplay on{" "}
              <mark style={{ fontWeight: "bold" }}>Gender bias/Sexism</mark>
              <br />
              You will be given a set of role and you are to play it through
              describing the set of actions you will carry out.
              <br />
              <br />
              <br />
              <span className="mx-auto text-dark" style={{ lineHeight: "2px" }}>
                In this roleplaying exercise, we aim to raise awareness about
                unconscious biases and their impact on our thoughts, actions,
                and decision-making processes. By simulating real-life
                scenarios, we can better understand and challenge our own biases
                while fostering empathy and promoting inclusivity.
              </span>
              <br />
              <br />
              <button className="">Start</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenderRoleplay;
