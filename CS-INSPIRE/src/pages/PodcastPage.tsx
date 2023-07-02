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
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
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
        className="text-center h-100 w-100 bg-light"
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
      <div className="text-dark row align-items-center justify-content-center text-center">
        <div
          className="text-end col-8 shadow"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h3 className="mt-4 text-light font-weight-light mb-2 display-4">
            Hear a curated mix of podcasts relating to Unconscious Biases
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
          <div className="col-md-12 text-center">
            <h2 className="font-weight-bold text-light p-3">
              Hear from Soundcloud
            </h2>
          </div>
        </div>
      </div>

      <div
        className="d-block d-md-flex podcast-entry bg-light mb-5 p-2 aos-init aos-animate"
        data-aos="fade-up"
      >
        <div className="image" style={{ backgroundImage: "" }}></div>
        <div className="text">
          <h3 className="font-weight-light">
            <a href="single-post.html" className="text-black">
              Sexist, racist or ageist?
            </a>
          </h3>
          <div className="text-white mb-3">
            <span className="text-black text-muted">
              <small>By WSThe​Why​Factor</small>
            </span>
          </div>
          <p className="mb-4">
            Are you sexist, racist or ageist? Even if you think you are
            open-minded, the chances are, you will be judging people and
            situations without even realising. These hidden biases – which are
            different from conscious prejudice – lurk within our minds. Science
            clearly shows that almost all of us have at least one of these
            tendencies - an implicit preference for one race over another, for
            men over women, for young over old or vice versa. Our unconscious
            biases are influenced by our background, our personal experiences
            and the culture in which we live. And, they can affect the way we
            behave, the decisions we make - whether it is who we hire, who we
            promote or even – in the case of jurors – who we believe is guilty
            or not guilty.
          </p>
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/298610819&color=%233d4146&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </div>
      </div>

      <div
        className="d-block d-md-flex podcast-entry bg-light p-2 mb-5 aos-init aos-animate"
        data-aos="fade-up"
      >
        <div
          className="image"
          style={{ backgroundImage: "url('images/img_1.jpg');" }}
        ></div>
        <div className="text">
          <h3 className="font-weight-light">
            <a href="single-post.html" className="text-black">
              <span>Unconscious Bias in Schools</span>
            </a>
          </h3>
          <div className="text-white mb-3">
            <span className="text-black-opacity-05 text-muted">
              <small>
                By Harvard Edcast 
              </small>
            </span>
          </div>
          <p className="mb-4">
            Many educators struggle with unconscious bias in their roles at
            school -- often in ways that can unknowingly perpetuate racism and
            negatively affect students. In this episode of the EdCast, Tracey
            Benson and Sarah Fiarman offer ways to address these issues directly
            and outline how educators can start this work in their schools.
            Benson, an assistant professor at University of North Carolina at
            Charlotte, and Fiarman, director of leadership development at EL
            Education, are authors of the new book, Unconscious Bias in Schools.
          </p>
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/715910035&color=%233d4146&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </div>
      </div>

      <div
        className="d-block d-md-flex podcast-entry bg-light p-2 mb-5 aos-init aos-animate"
        data-aos="fade-up"
      >
        <div
          className="image"
          style={{ backgroundImage: "url('images/img_1.jpg');" }}
        ></div>
        <div className="text">
          <h3 className="font-weight-light">
            <a href="single-post.html" className="text-black">
              <span>Combating Unconscious Bias in Workplaces</span>
            </a>
          </h3>
          <div className="text-white mb-3">
            <span className="text-black-opacity-05 text-muted">
              <small>
                By Patricia Pope 
              </small>
            </span>
          </div>
          <p className="mb-4">
            While most workplaces have clear anti-discrimination and
            anti-harassment policies in place, unconscious bias can nonetheless
            creep in and damage workplace culture, productivity, and even
            retention. How does this happen? And what can HR do about it? Here
            to provide some insights is Patricia Pope, a recognized subject
            matter expert with over four decades of knowledge and experience in
            diversity, inclusion, and culture change.
          </p>
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/466723926&color=%233d4146&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
};
