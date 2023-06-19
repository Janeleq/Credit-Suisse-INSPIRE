import { useState, useEffect, useRef } from "react";
// import emailjs from '@emailjs/browser';
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavBarLogin";
import Chatbot from "../components/Chatbot";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { useNavigate } from "react-router-dom";
import background from "../assets/faqBg.png";
import background2 from "../assets/pastelGreyBg.png"

function HelpPage() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);

  function someRequest() {
    //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise((resolve) => setTimeout(() => resolve(), 0));
  }

  useEffect(() => {
    AOS.init();
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loader-container");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });

  const form = useRef();

  const sendEmail = (e) => {
    navigate("/contact");
  };

  return (
    <div className="container-fluid p-0" style={{ overflow: "hidden" }}>
      <Chatbot />
      <NavigationBar />
      <div
        style={{
          height: "80vh",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderBottom: 'solid 1px lightgrey'
        }}
      >
        <p
          className="lead w-50 float-left"
          style={{
            marginLeft: "10vw",
            marginTop: "33vh",
            fontSize: "28px",
            fontWeight: "300",
          }}
        >
          <h3 style={{ fontSize: "90px", fontWeight: "800" }}>FAQ</h3>
          <p className="">Check out some of the FAQs below that are commonly answered</p>
          
          <p className="mt-2 text-muted" style={{fontSize: '16px'}}>
                        You can utilise the chatbot on the bottom right of the
                        page to ask some questions as well.
                      </p>
        </p>
        
      </div>
      <section style={{ marginTop: "", height: '90vh', width: '100vw' }} className="section">
        <div className="row">
          <div className="col-sm-12 col-lx-12 p-0">
            <div className="card" style={{ border: "none",    backgroundImage: `url(${background2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "90vh" }}>
              <div
                className="card-body"
                style ={{
                 
                }}
              >
                <div className="row justify-content-center mt-4">
                  <div className="col-xl-5 col-lg-8">
                    <div className="text-center">
                    <button className= "p-3" onClick={sendEmail} style={{ fontSize: "20px", fontWeight: "500" }}>Email Us</button>
              
          
         
                    </div>
                  </div>
                </div>
                <div className="m-3 row justify-content-center mt-5">
                  <div className="col-9">
                    <ul
                      className="nav nav-tabs  nav-tabs-custom nav-justified justify-content-center faq-tab-box"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-genarel-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-genarel"
                          type="button"
                          role="tab"
                          aria-controls="pills-genarel"
                          aria-selected="true"
                        >
                          <span className="font-size-16">
                            General Questions
                          </span>
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-privacy_policy-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-privacy_policy"
                          type="button"
                          role="tab"
                          aria-controls="pills-privacy_policy"
                          aria-selected="false"
                        >
                          <span className="font-size-16">Privacy Policy</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="col-lg-9"
                    data-aos="flip-up"
                    data-aos-delay="300"
                  >
                    <div className="tab-content pt-3" id="pills-tabContent">
                      <div
                        className="tab-pane fade active show"
                        id="pills-genarel"
                        role="tabpanel"
                        aria-labelledby="pills-genarel-tab"
                      >
                        <div className="row g-4 mt-2">
                          <div className="col-lg-6">
                            <h5 className="text-dark">
                              What is this platform about?
                            </h5>
                            <p className="text-muted">
                              Perception Pause is a platform that spreads
                              awareness regarding to unconscious bias.
                            </p>
                          </div>
                          <div className="col-lg-6">
                            <h5 className="text-dark">Why do we use it ?</h5>
                            <p className="text-muted">
                              Utilise the provided resources so gain insights
                              towards today's various unconscious bias and
                              potentially counter them.
                            </p>
                          </div>
                          <div className="col-lg-6">
                            <h5 className="text-dark">
                              Where does it come from ?
                            </h5>
                            <p className="text-muted">-</p>
                          </div>
                          <div className="col-lg-6">
                            <h5 className="text-dark">Where can I get some?</h5>
                            <p className="lg-base">- </p>
                          </div>
                        </div>
                      </div>

                      <div
                        className="tab-pane fade"
                        id="pills-privacy_policy"
                        role="tabpanel"
                        aria-labelledby="pills-privacy_policy-tab"
                      >
                        <div className="row g-4 mt-2">
                          <div className="col-lg-6">
                            <h5>Where does it come from ?</h5>
                            <p className="lg-base">-</p>
                          </div>
                          <div className="col-lg-6">
                            <h5>What is Perception Pause privacy policy</h5>
                            <p className="lg-base">
                              Perception Pause do not hold any data and all user
                              records remains strictly confidential.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default HelpPage;
