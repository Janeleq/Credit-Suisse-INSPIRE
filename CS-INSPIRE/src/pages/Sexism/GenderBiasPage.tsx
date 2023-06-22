import { useState, useEffect, useCallback } from "react";
import Chatbot from "../../components/Chatbot.tsx";
import NavigationBar from "../../components/NavBarLogin.tsx";
import Footer from "../../components/Footer.tsx";
import sexismBackground from "../../assets/sexism/sexismBg.jpg";
import { useNavigate } from "react-router-dom";

function Genderbias() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);

  function someRequest() {
    //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise((resolve) => setTimeout(() => resolve(), 0));
  }

  function SexismRoleplay() {
    console.log("Heading to roleplay page!");
    navigate("/bias/gender/roleplay");
  }

  function SexismFacts() {
    console.log("Heading to facts page");
    navigate("/bias/gender/facts", { state: {  } });
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
    <div className="container-fluid p-0 w-100">
      <NavigationBar />
      <Chatbot />
      <div className="row" style={{ marginTop: "5vh" }}>
        <div
          className="col-sm-12 col-md-4 col-lg-6"
          style={{
            backgroundImage: `url(${sexismBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "140vh",
          }}
        ></div>
        <div
          className="col-sm-12 col-md-8 col-lg-6 text-center bg-white"
          style={{ height: "140vh" }}
        >
          <div className="section-title mt-5">
            <h4 className="title mb-4">
              <mark>Gender Bias / Sexism</mark>
            </h4>
            <p className="text-muted para-desc mx-auto mb-0">
              Gender Bias or also known as Sexism, is linked to beliefs around
              the fundamental nature of women and men and the roles they should
              play in society. Sexist assumptions about women and men, which
              manifest themselves as gender stereotypes, can rank one gender as
              superior to another. Such hierarchical thinking can be conscious
              and hostile, or it can be unconscious, manifesting itself as
              unconscious bias.
              <br />
              <br />
              Gender Bias / Sexism is harmful. It produces feelings of
              worthlessness, self-censorship, changes in behaviour, and a
              deterioration in health. It also lies at the root of gender
              inequality.
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
                  Take up a roleplay to learn and explore more about Gender Bias
                  / Sexism!
                </p>

                <small className="">
                  There are a few prompts that will appear in the roleplay.
                </small>

                <div className="guide mx-auto text-muted mt-3">
                  <div className="row">
                    <div className="col">
                      <img src="" alt="action" style={{ width: "20%" }} />
                      <br />
                      <small className="">carry out an action</small>
                    </div>
                    <div className="col">
                      <img src="" alt="reflection" style={{ width: "20%" }} />
                      <br />
                      <small className="">write down your thoughts</small>
                    </div>
                    <div className="col">
                      <img src="" alt="outcome" style={{ width: "20%" }} />
                      <br />
                      <small className="">
                        view the consequence of your action
                      </small>
                    </div>
                  </div>
                  <br />
                  <button
                    className="mx-auto text-center"
                    onClick={ SexismRoleplay }
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
                  <p>Get to know some statistics regarding Gender Bias / Sexism!</p>
                  <button type="" onClick={ SexismFacts }>
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

export default Genderbias;
