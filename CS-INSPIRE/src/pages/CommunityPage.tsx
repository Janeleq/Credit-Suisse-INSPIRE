import { useState, useEffect, useCallback } from "react";
import Chatbot from "../components/Chatbot.tsx";
import NavigationBar from "../components/NavBarLogin.tsx";
import Footer from "../components/Footer.tsx";
import "../styles/_community.css";
import valerie from "../assets/community/valerie.jpg";
import anurag from "../assets/community/anurag.jpg";
import jennifer from "../assets/community/jennifer.jpg";
import tim from "../assets/community/tim.jfif";
import communityBg from "../assets/community/communityBg.png";
import { useLocation } from "react-router-dom";

function Community() {
  const [isLoading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const state = useLocation();
  const [upcomingEvents, setUpcomingEvents] = useState(true);
  //   const [currentEvents, setCurrentEvents] = useState(false)

  function someRequest() {
    //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise((resolve) => setTimeout(() => resolve(), 0));
  }

  // false means show upcoming events
  function currentEventsStatus() {
    setUpcomingEvents(true);
  }
  function upcomingEventsStatus() {
    setUpcomingEvents(false);
  }

  useEffect(() => {
    console.log(state);
    console.log(upcomingEvents);
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loader-container");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });

  return (
    <div className="event container-fluid p-0" style={{ overflow: "hidden" }}>
      <NavigationBar />
      <div className="mb-5 bg-white" style={{ marginTop: "" }}>
        <div
          className=""
          style={{
            height: "75vh",
            width: "100vw",
            opacity: 0.9,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${communityBg})`,
          }}
        >
          <h4
            className="text-center text-white lead"
            style={{ paddingTop: "250px", fontSize: '35px'}}
          >
            See what is happening in the community!
          </h4>
        </div>
        {upcomingEvents ? (
          <div className="row">
            <div className="col-lg-12 ">
              <nav
                className="wow fadeInDown  animated"
                data-animation="fadeInDown animated"
                data-delay=".2s"
                style={{ visibility: "visible", animationName: "fadeInDown" }}
              >
                <div
                  className="nav nav-tabs nav-fill"
                  id="nav-tab"
                  role="tablist"
                >
                  <a
                    className="nav-item nav-link active show"
                    id="nav-home-tab"
                    data-toggle="tab"
                    role="tab"
                    aria-selected="true"
                    onClick={currentEventsStatus}
                  >
                    <div className="nav-content">
                      <strong>Happening now</strong>
                      <span>{new Date().toString().substring(0, 10)}</span>
                    </div>
                  </a>
                  <a
                    className="nav-item nav-link"
                    id="nav-profile-tab"
                    data-toggle="tab"
                    role="tab"
                    aria-selected="false"
                    onClick={upcomingEventsStatus}
                  >
                    <div className="nav-content">
                      <strong>Upcoming</strong>
                      {/* <span>{new Date().getDate().toString().substring(0,10)+1}</span> */}
                      <span>Events coming up</span>
                    </div>
                  </a>
                </div>
              </nav>
              <div
                className="tab-content py-3 px-3 px-sm-0 wow fadeInDown  animated"
                data-animation="fadeInDown animated"
                data-delay=".2s"
                id="nav-tabContent"
                style={{ visibility: "visible", animationName: "fadeInDown" }}
              >
                <div
                  className="tab-pane fade active show"
                  id="one"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div className="row mb-30">
                    <div className="col-lg-2">
                      <div className="user">
                        <div className="title">
                          <img src={valerie} alt="Valerie Alexandar   " />
                          <h5>Valerie Alexandar</h5>
                          <p>Author, speaker & CEO</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <div className="event-list-content fix">
                        <div
                          className="alert alert-secondary p-1"
                          style={{
                            display: "inline",
                            marginRight: "5px",
                            marginBottom: "8px",
                          }}
                          role="alert"
                        >
                          Online
                        </div>
                        <div
                          className="alert alert-primary p-1"
                          style={{ display: "inline" }}
                          role="alert"
                        >
                          Gender Bias Talk
                        </div>

                        <ul
                          data-animation="fadeInUp animated"
                          data-delay=".2s"
                          style={{ animationDelay: "0.2s" }}
                          className=""
                        >
                          <br />
                          <li>9.30 AM - 10.30 AM (SGT)</li>
                        </ul>
                        <h2 className="text-dark">
                          How to Outsmart Your Own Unconscious Bias
                        </h2>
                        <p>
                          The human brain is a remarkable achievement in
                          evolution. Unfortunately, the brain activity that kept
                          the human species alive for millions of years is the
                          same brain activity that keeps us from achieving
                          equality today.
                        </p>
                        <a href="#" className="btn mt-20 mr-10">
                          <i className="far fa-ticket-alt"></i> Get Ticket
                        </a>
                        <a href="#" className="btn mt-20">
                          Read More
                        </a>
                        <div className="crical">
                          <i className="fal fa-video"></i>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-30">
                    <div className="col-lg-2">
                      <div className="user">
                        <div className="title">
                          <img src={anurag} alt="Anurag Gupta" />
                          <h5>Anurag Gupta</h5>
                          <p>Entreprenaur, Mindfulness teacher</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <div className="event-list-content fix">
                        <div
                          className="alert alert-secondary p-1"
                          style={{
                            display: "inline",
                            marginRight: "5px",
                            marginBottom: "8px",
                          }}
                          role="alert"
                        >
                          Online
                        </div>
                        <div
                          className="alert alert p-1"
                          style={{
                            display: "inline",
                            backgroundColor: "#C1E1C1",
                          }}
                          role="alert"
                        >
                          Ageism Bias Talk
                        </div>
                        <ul
                          data-animation="fadeInUp animated"
                          data-delay=".2s"
                          style={{ animationDelay: "0.2s" }}
                          className=""
                        >
                          <br />
                          <li>9.30 AM - 10.30 AM (SGT)</li>
                        </ul>
                        <h2 className="text-dark">
                          What we can save by breaking unconscious bias
                        </h2>
                        <p>
                          What are the economic, social, and emotional costs of
                          unconscious bias?
                        </p>
                        <a href="#" className="btn mt-20 mr-10">
                          <i className="far fa-ticket-alt"></i> Get Ticket
                        </a>
                        <a href="#" className="btn mt-20">
                          Read More
                        </a>
                        <div className="crical">
                          <i className="fal fa-magic"></i>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-30">
                    <div className="col-lg-2">
                      <div className="user">
                        <div className="title">
                          <img src={jennifer} alt="Jennifer Witter" />
                          <h5>Jennifer Witter</h5>
                          <p>Writer </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <div className="event-list-content fix">
                        <div
                          className="alert alert-secondary p-1"
                          style={{
                            display: "inline",
                            marginRight: "5px",
                            marginBottom: "8px",
                          }}
                          role="alert"
                        >
                          In-person
                        </div>
                        <div
                          className="alert alert-primary p-1"
                          style={{ display: "inline", backgroundColor: "" }}
                          role="alert"
                        >
                          Gender Bias Talk
                        </div>
                        <ul
                          data-animation="fadeInUp animated"
                          data-delay=".2s"
                          style={{ animationDelay: "0.2s" }}
                          className=""
                        >
                          <br />
                          <li>
                            <i className="fas fa-map-marker-alt"></i> Singapore,
                            Toa Payoh
                          </li>
                          <li>
                            <i className="far fa-clock"></i> 9.30 - 10.30 AM
                          </li>
                        </ul>
                        <h2 className="text-dark">
                          How Prejudiced Are You: Recognising and Combating
                          Unconscious Bias
                        </h2>
                        <p>
                          Overt racism is easy to identify. But what about
                          unconscious bias – soft prejudices that we all have,
                          but of which we are basically unaware? In today’s
                          heated social and global climate, this lack of
                          awareness can deeply impact your professional and
                          personal life, as well as the way you unintentionally
                          communicate and think. It can even have serious
                          economic ramifications. This provocative talk will
                          take a deep dive into the subject, where you will
                          confront your own biases and see how you – regardless
                          of race, status, income or education – have been a
                          victim of unconscious bias.
                        </p>
                        <a href="#" className="btn mt-20 mr-10">
                          <i className="far fa-ticket-alt"></i> Get Ticket
                        </a>
                        <a href="#" className="btn mt-20">
                          Read More
                        </a>
                        <div className="crical">
                          <i className="far fa-cogs"></i>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-lg-12 ">
              <nav
                className="wow fadeInDown  animated"
                data-animation="fadeInDown animated"
                data-delay=".2s"
                style={{ visibility: "visible", animationName: "fadeInDown" }}
              >
                <div
                  className="nav nav-tabs nav-fill"
                  id="nav-tab"
                  role="tablist"
                >
                  <a
                    className="nav-item nav-link"
                    href="/community"
                    id="nav-home-tab"
                    data-toggle="tab"
                    role="tab"
                    aria-selected="true"
                    onClick={currentEventsStatus}
                  >
                    <div className="nav-content">
                      <strong>Happening now</strong>
                      <span>{new Date().toString().substring(0, 10)}</span>
                    </div>
                  </a>
                  <a
                    className="nav-item nav-link  active show"
                    id="nav-profile-tab"
                    data-toggle="tab"
                    role="tab"
                    aria-selected="false"
                    onClick={upcomingEventsStatus}
                  >
                    <div className="nav-content">
                      <strong>Upcoming</strong>
                      {/* <span>{new Date().getDate().toString().substring(0,10)+1}</span> */}
                      <span>Events coming up</span>
                    </div>
                  </a>
                </div>
              </nav>
              <div
                className="tab-content py-3 px-3 px-sm-0 wow fadeInDown  animated"
                data-animation="fadeInDown animated"
                data-delay=".2s"
                id="nav-tabContent"
                style={{ visibility: "visible", animationName: "fadeInDown" }}
              >
                <div
                  className="tab-pane fade active show"
                  id="one"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div className="row mb-30">
                    <div className="col-lg-2">
                      <div className="user">
                        <div className="title">
                          <img src={tim} alt="Tim Urban" />
                          <h5>Tim Urban</h5>
                          <p>TED Talk Media Speaker</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <div className="event-list-content fix">
                        <div
                          className="alert alert-secondary p-1"
                          style={{
                            display: "inline",
                            marginRight: "5px",
                            marginBottom: "8px",
                          }}
                          role="alert"
                        >
                          Online
                        </div>
                        <div
                          className="alert alert-primary p-1"
                          style={{ display: "inline", backgroundColor: "" }}
                          role="alert"
                        >
                          Gender Bias Talk
                        </div>
                        <ul
                          data-animation="fadeInUp animated"
                          data-delay=".2s"
                          style={{ animationDelay: "0.2s" }}
                          className=""
                        >
                          <br />

                          <li>
                            <i className="far fa-clock"></i> 9.30 AM - 10.30 AM
                            (SGT)
                          </li>
                        </ul>
                        <h2 className="text-dark">
                          What is Unconscious Bias and Priviledge
                        </h2>
                        <p>
                          Can we all just get along? There's hope for harmony in
                          our divided world, as long as we can shift the way we
                          think.{" "}
                        </p>
                        <a href="#" className="btn mt-20 mr-10">
                          <i className="far fa-ticket-alt"></i> Get Ticket
                        </a>
                        <a href="#" className="btn mt-20">
                          Read More
                        </a>
                        <div className="crical">
                          <i className="fal fa-ban"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
}

export default Community;
