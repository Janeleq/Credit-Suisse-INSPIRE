// import React from 'react'
import Navbar from "../components/NavBarLogin.tsx";
import "../styles/_roleplay.css";
import ageism from "../assets/ageism.jpg";
import haloeffect from "../assets/haloeffect.jpg";
import sexism from "../assets/genderBackground.png";
import beautybias from "../assets/beauty-bias.jpg";
import Chatbot from "../components/Chatbot.tsx";
import Footer from "../components/Footer.tsx";
import { useNavigate, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import background from "../assets/roleplayBg.png";
import backgroundTwo from "../assets/roleplayBg2.png";
import AOS from "aos";
import "aos/dist/aos.css";

function RoleplayPage() {
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

  function ageismGo() {
    if (
      confirm("Embark on the path to discover the unconscious bias: ageism?")
    ) {
      navigate("/bias/ageism");
    }
  }

  function haloEffectGo() {
    if (
      confirm(
        "Embark on the path to discover the unconscious bias: Halo Effect?"
      )
    ) {
      navigate("/bias/haloeffect");
    }
  }

  function sexismGo() {
    if (
      confirm(
        "Embark on the path to discover the unconscious bias: Sexism / Gender bias?"
      )
    ) {
      navigate("/bias/gender");
    }
  }

  function beautyGo() {
    if (
      confirm(
        "Embark on the path to discover the unconscious bias: Beauty bias?"
      )
    ) {
      navigate("/bias/beauty");
    }
  }

  return (
    <div className="container-fluid p-0" style={{ overflow: "hidden" }}>
      <Navbar></Navbar>
      <Chatbot />
      <div
        className=""
        style={{ marginTop: "5vh", overflow: "hidden", height: "" }}
      >
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            height: "95vh",
            width: "100vw",
            backgroundSize: "cover",
            borderBottom: "solid 1px lightgrey",
          }}
        >
          <p
            className="lead w-50 float-left"
            style={{
              marginLeft: "44vw",
              marginTop: "35vh",
              fontSize: "28px",
              fontWeight: "300",
            }}
          >
            Engage in role-playing scenarios and take on different characters
            and act out various situations. This activity largely aims to{" "}
            <b style={{ fontWeight: "500" }}>develop awareness</b> towards
            unconscious bias.
          </p>
        </div>
        <div
          style={{
            backgroundImage: `url(${backgroundTwo})`,
            backgroundPosition: "center",
            height: "100vh",
            width: "100vw",
            backgroundSize: "cover",
          }}
        >
          <p
            className="lead w-75 float-left text-uppercase"
            style={{
              marginLeft: "10vw",
              marginTop: "18vh",
              fontSize: "36px",
              fontWeight: "800",
              letterSpacing: "2px",
            }}
          >
            Navigate through the various roleplays
          </p>
          <div
            className="container mb-5"
            style={{ marginTop: "125vh", left: "-22vw" }}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="icon-image" onClick={ageismGo}>
              <div className="icon">
                <img src={ageism} alt="ageism" />
              </div>

              <div className="hover-image one">
                <div className="img">
                  <img src={ageism} alt="" />
                </div>
                <div className="content">
                  <div className="details">
                    <div className="name">Ageism</div>
                    <div className="job">Path 1</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="icon-image" onClick={sexismGo}>
              <div className="icon">
                <img src={sexism} alt="sexism" />
              </div>
              <div className="hover-image one">
                <div className="img">
                  <img src={sexism} alt="sexism" />
                </div>
                <div className="content">
                  <div className="details">
                    <div className="name">Gender/Sexism</div>
                    <div className="job">Path 2</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="icon-image" onClick={haloEffectGo}>
              <div className="icon">
                <img src={haloeffect} alt="haloeffect" />
              </div>
              <div className="hover-image one">
                <div className="img">
                  <img src={haloeffect} alt="haloeffect" />
                </div>
                <div className="content">
                  <div className="details">
                    <div className="name">Halo Effect</div>
                    <div className="job">Path 3</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="icon-image" onClick={beautyGo}>
              <div className="icon">
                <img src={beautybias} alt="beautybias" />
              </div>
              <div className="hover-image one">
                <div className="img">
                  <img src={beautybias} alt="beautybias" />
                </div>
                <div className="content">
                  <div className="details">
                    <div className="name">Beauty Bias</div>
                    <div className="job">Path 4</div>
                  </div>
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

export default RoleplayPage;
