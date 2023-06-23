import { useState, useEffect, useCallback } from "react";
import NavigationBar from "../components/NavBarLogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import podcast from '../assets/podcast.jpg'
import ageism from "../assets/BreakBias.png";
import podcast from "../assets/podcast.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import Chatbot from "../components/Chatbot.tsx";
import Footer from "../components/Footer.tsx";

export default () => {
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

  const [isLoading, setLoading] = useState(true);

  function someRequest() {
    //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise((resolve) => setTimeout(() => resolve(), 0));
  }

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    AOS.init();
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loader-container");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });

  return (
    <div className="h-100 w-100 container-fluid p-0">
      <Chatbot />
      <NavigationBar />

      {/* <a href="https://anchor.fm/s/8555dcc0/podcast/play/70412616/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2023-4-15%2F329618118-44100-2-bfe128b41ba35.m4a">

            </a> */}

      <div
        className="text-center h-100 w-100"
        style={{
          overflow: "hidden",
          marginTop: "",
          backgroundImage: `url(${podcast})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}
        data-aos="fade"
        data-stellar-background-ratio="0.5"
      ></div>
      <div className="row align-items-center justify-content-center text-center">
        <div
          className="text-end col-8 shadow"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h3 className="mt-4 text-light font-weight-light mb-2 display-4">
            Episode 01: Hearing about Podcasts relating to Unconscious Biases
          </h3>
          <div className="text-light mb-4">
            <span className="text-white-opacity-05">
              <small>A mix by Perception Pause | 31 May 2023 | 1:30:20</small>
            </span>
          </div>
          <p>
            <a
              href="single-post.tml"
              className="btn btn-primary btn-sm py-3 px-4 small"
            >
              Read The Transcript
            </a>
          </p>
          <iframe
            width="100%"
            height="300"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1503563596&color=%23303d28&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
          <div className="player">
            <audio
              id="player2"
              preload="none"
              controls
              style={{ maxWidth: "100%" }}
            >
              <source
                src="https://cdn.conferencesforwomen.org/2018/tiffany-jana-teleclass-ma.mp3"
                type="audio/mp3"
              />
            </audio>
          </div>
        </div>
      </div>

      <div className="row mb-5 aos-init aos-animate" data-aos="fade-up">
        <div className="col-md-12 text-center">
          <h2 className="font-weight-bold text-black">Hear from Soundcloud</h2>
        </div>
      </div>
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/543981285&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
      <div
        className="d-block d-md-flex podcast-entry bg-white mb-5 aos-init aos-animate"
        data-aos="fade-up"
      >
        <div className="image" style={{ backgroundImage: "" }}></div>
        <div className="text">
          <h3 className="font-weight-light">
            <a href="single-post.html">Episode 08:</a>
          </h3>
          <div className="text-white mb-3">
            <span className="text-black-opacity-05">
              <small>
                By null <span className="sep">/</span> 16 September 2017{" "}
                <span className="sep">/</span> 1:30:20
              </small>
            </span>
          </div>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            repellat mollitia consequatur, optio nesciunt placeat. Iste
            voluptates excepturi tenetur, nesciunt.
          </p>

       
        </div>
      </div>

      <div
        className="d-block d-md-flex podcast-entry bg-white mb-5 aos-init aos-animate"
        data-aos="fade-up"
      >
        <div
          className="image"
          style={{ backgroundImage: "url('images/img_1.jpg');" }}
        ></div>
        <div className="text">
          <h3 className="font-weight-light">
            <a href="single-post.html">Episode 08:</a>
          </h3>
          <div className="text-white mb-3">
            <span className="text-black-opacity-05">
              <small>
                By null <span className="sep">/</span> 16 September 2017{" "}
                <span className="sep">/</span> 1:30:20
              </small>
            </span>
          </div>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            repellat mollitia consequatur, optio nesciunt placeat. Iste
            voluptates excepturi tenetur, nesciunt.
          </p>

  
        </div>
      </div>
    </div>
  );
};
