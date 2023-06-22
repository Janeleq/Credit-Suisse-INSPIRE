import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.js";
import { NavLink, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NavigationBarLogin from "../components/NavBarLogin.tsx";
import Chatbot from "../components/Chatbot.tsx";
import Footer from "../components/Footer.tsx";
import affinityBias from "../assets/affinityBias.png";
import haloBias from "../assets/haloBias.png";
import ageismBias from "../assets/ageism.jpg";
import sheryl from "../assets/homepageLogin/sherylsandberg.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import introBg from "../assets/homepageLogin/intro.png";
import variousBias from "../assets/homepageLogin/variousBias.png";
import pastelBg from "../assets/pastelGreyBg.png";
import mitigatingBg from "../assets/homepageLogin/mitigatingBias.png"
import historyScienceBg from "../assets/homepageLogin/historyScienceBg.png"

export const HomePageLogin = () => {
  console.log("rendering lifecycle");
  const navigate = useNavigate();

  const location = useLocation();
  const [email, setEmail] = useState("");
  // const [sound] = useSound(music);

  // useEffect(() => {
  //   sound()
  // }, [sound]);

  useEffect(() => {
    AOS.init();
    if (location.state != null) {
      setEmail(location.state.email);
    }
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loader-container");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  }, []);

  const [isLoading, setLoading] = useState(true);

  function someRequest() {
    //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise((resolve) => setTimeout(() => resolve(), 0));
  }

  const handleLogout = () => {
    console.log("function handlelogout called");
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        if (confirm("Are you sure you want to sign out?") == true) {
          navigate("/login");
          alert("Signed out successfully!");
        }
      })
      .catch((error) => {
        // An error happened.
        alert("ERROR! Something went wrong when signing out.");
      });
  };

  return (
    <div className={`container-fluid p-0`} style={{ overflow: "hidden" }}>
      <NavigationBarLogin />
      <Chatbot />
      <div style={{ marginTop: "5vh" }}>
        <div
          style={{
            backgroundImage: `url(${introBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "85vh",
            width: "100vw",
            borderBottom: "1px solid grey",
          }}
        >
          <h1
            style={{
              paddingTop: "12vh",
              paddingLeft: "12vw",
              fontSize: "75px",
            }}
          >
            <span data-aos="fade-in" data-aos-delay="300">
              P
            </span>
            <span
              data-aos="fade-in"
              data-aos-delay="600"
              style={{ color: "gray" }}
            >
              e
            </span>
            <span data-aos="fade-in" data-aos-delay="300">
              r
            </span>
            <span
              data-aos="fade-in"
              data-aos-delay="600"
              style={{ color: "gray" }}
            >
              c
            </span>
            <span data-aos="fade-in" data-aos-delay="300">
              e
            </span>
            <span
              data-aos="fade-in"
              data-aos-delay="600"
              style={{ color: "gray" }}
            >
              p
            </span>
            <span data-aos="fade-in" data-aos-delay="300">
              t
            </span>
            <span
              data-aos="fade-in"
              data-aos-delay="600"
              style={{ color: "gray" }}
            >
              i
            </span>
            <span data-aos="fade-in" data-aos-delay="300">
              o
            </span>
            <span
              data-aos="fade-in"
              data-aos-delay="600"
              style={{ color: "gray" }}
            >
              n
            </span>
          </h1>
          <h1 style={{ paddingLeft: "12vw", fontSize: "70px" }}>
            <span data-aos="fade-in" data-aos-delay="600">
              P
            </span>
            <span
              data-aos="fade-in"
              data-aos-delay="300"
              style={{ color: "gray" }}
            >
              a
            </span>
            <span data-aos="fade-in" data-aos-delay="600">
              u
            </span>
            <span
              data-aos="fade-in"
              data-aos-delay="300"
              style={{ color: "gray" }}
            >
              s
            </span>
            <span data-aos="fade-in" data-aos-delay="600">
              e
            </span>
          </h1>
          <br />
          <p
            className="lead"
            data-aos="fade-right"
            data-aos-delay="300"
            style={{ color: "grey", fontSize: "30px", paddingLeft: "12vw" }}
          >
            <div className="row" style={{ paddingLeft: "3vw" }}>
              <div className="col-sm-12">
                <span style={{ color: "black" }}>Breaking</span> Barriers.
              </div>
              <div className="col-sm-12">
                <span style={{ color: "black" }}>Unveiling</span> Biases.
              </div>
              <div className="col-sm-12">
                <span style={{ color: "black" }}>Dismantling</span> Prejudice.
              </div>
            </div>
          </p>
          <br />
          {/* <p className="lead" style={{ color: "" , paddingLeft: "12vw" }}>
          Foster a deeper understanding of the biases that shape
                        our perceptions and actions.
          </p> */}
        </div>

        <div
          style={{
            backgroundImage: `url(${pastelBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100vw",
            borderBottom: "1px solid grey",
          }}
        >
          <span
            className="text-center w-50 mx-auto"
            data-aos="fade-in"
            data-aos-delay="300"
          >
            <figure
              className="text-center mb-0"
              style={{ display: "inline", backgroundColor: "" }}
            >
              {/* <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-quotes/bulb.webp"
                alt="Bulb"
                width="100px"
              /> */}
              <blockquote className="blockquote" style={{}}>
                <p className="pb-3 pt-5">
                  <i className="fas fa-quote-left fa-xs text-primary"></i>
                  <span
                    className="lead font-italic"
                    style={{ fontSize: "35px", fontWeight: "400" }}
                  >
                    Our brain processes{" "}
                    <b style={{ color: "grey" }}>50,000 - 70,000</b> pieces of
                    information per day. <br />{" "}
                    <span className="mb-2">
                      But how many of them are we actually conscious of?
                    </span>
                  </span>
                  <i className="fas fa-quote-right fa-xs text-primary"></i>
                </p>
              </blockquote>
            </figure>
            <h1 style={{ fontSize: "55px", marginTop: '15vh' }}>
              Unconscious Bias
            </h1>
            <p className="w-50 mx-auto" style={{fontSize: '21px', color: 'grey'}}>
              Unconscious bias, often referred to as implicit bias, is a natural
              and inherent tendency of the human mind. It operates beyond our
              conscious awareness, shaping our perceptions, judgments, and
              decision-making processes. 
              <br/><br/>These biases are deeply rooted in
              societal influences, experiences, cultural conditioning, and media
              portrayals. They can manifest across various domains, including
              race, gender, age, physical appearance, socio-economic status, and
              more.
            </p>
          </span>

          <br />

  
        </div>
        <div
          style={{
            backgroundImage: `url(${historyScienceBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "85vh",
            width: "100vw",
            borderBottom: "1px solid grey",
          }}
        >
          <h1
            style={{
              paddingTop: "12vh",
              paddingLeft: "12vw",
              fontSize: "60px",
            }}
          >
            <span data-aos="fade-in" data-aos-delay="300">
            History and Science behind Unconscious Bias
            </span>
        
          </h1>
          <br />
          <p
            className="lead"
            data-aos="fade-right"
            data-aos-delay="300"
            style={{ color: "grey", fontSize: "20px", paddingLeft: "12vw" }}
          >
            <div className="row" style={{ paddingLeft: "" }}>
              <div className="col-sm-12 w-75">
              
              Over the last three decades, our understanding of unconscious bias has evolved. The concept of unconscious bias emerged from the field of social psychology in the 20th century. While early theories of bias focused primarily on conscious and explicit prejudices, researchers began to recognize the role of unconscious processes in shaping human behavior. <br/><br/>Psychologists such as Gordon Allport and Mahzarin Banaji made significant contributions to the study of implicit biases and their impact on individuals and society.
              The nature of unconscious bias is now well understood, and an instrument (Implicit Association Test or IAT) to assess unconscious bias has been developed and rigorously tested globally.
              </div>
            </div>
          </p>
          <br />
          {/* <p className="lead" style={{ color: "" , paddingLeft: "12vw" }}>
          Foster a deeper understanding of the biases that shape
                        our perceptions and actions.
          </p> */}
        </div>
        <div
          style={{
            backgroundImage: `url(${variousBias})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "80vh",
            width: "100vw",
            borderBottom: "1px solid grey",
          }}
        >
          <h1
            style={{
              paddingTop: "10vh",
              paddingLeft: "23vw",
              paddingRight: '8vw',
              fontSize: "60px",
              textAlign: 'center',
              marginBottom: '3vh'
            }}
          >
            <span data-aos="fade-in" data-aos-delay="300">
              Common Types of Unconscious Biases
            </span>
          </h1>
          <p
            className="lead w-50"
            data-aos="fade-right"
            data-aos-delay="300"
            style={{ marginLeft: '38vw', color: "grey", textAlign: "right" }}
          >
            There are various types of unconscious biases that we need to
            examine and understand. These include, but are not limited to,
            confirmation bias, affinity bias, halo effect, beauty bias, ageism,
            and stereotypes. Each bias contributes to distorted perceptions and
            can influence our attitudes and behaviors towards individuals or
            groups.<br/><br/><button data-aos="fade-up"
            data-aos-delay="300"><NavLink style = {{textDecoration: 'none', color: 'white'}} to = "/explore">Roleplay</NavLink></button>
            <p className="text-muted mt-1" style={{fontSize: '15px'}}>explore the different unconscious biases through roleplay!</p>
          </p>  
          
         
        </div>

        <div
          style={{
            backgroundImage: `url(${pastelBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "80vh",
            width: "100vw",
            borderBottom: "1px solid grey",
          }}
        >
  
          <p
            className="lead"
            data-aos="fade-right"
            data-aos-delay="300"
            style={{ color: "grey", paddingLeft: "12vw" }}
          >
           <figure className="text-center pt-5">
                      <blockquote className="blockquote">
                        <img
                          className="img-fluid h-25 w-25"
                          style={{ float: 'right', height: '', width: '50vw'}}
                          src={sheryl}
                          alt="sheryl"
                        />
                        <p className="pb-2" style={{ marginTop: '5vh', textAlign: 'center'}}>
                          <span className="lead text-dark font-italic" style={{fontSize: '40px', marginTop: '5vh'}}>
                         
                            "None of us is immune to biases, whether conscious
                            or unconscious. But by acknowledging them, we can
                            work to overcome them."
                          </span>
                      
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer mb-0">
                        Sheryl Sandberg
                      </figcaption>
                    </figure>
          </p>
        </div>
        <div
          style={{
            backgroundImage: `url(${mitigatingBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "85vh",
            width: "100vw",
            borderBottom: "1px solid grey",
          }}
        >
          <h1
            style={{
              paddingTop: "12vh",
              paddingLeft: "12vw",
              fontSize: "60px",
            }}
          >
            <span data-aos="fade-in" data-aos-delay="300">
            Developing Awareness and Mitigating Unconscious Bias
            </span>
        
          </h1>
          <br />
          <p
            className="lead"
            data-aos="fade-right"
            data-aos-delay="300"
            style={{ color: "grey", fontSize: "20px", paddingLeft: "12vw" }}
          >
            <div className="row" style={{ paddingLeft: "" }}>
              <div className="col-sm-12 w-75">
              The first step in addressing unconscious bias is to develop
              awareness. Recognizing that biases exist within us is essential
              for growth and change. Self-reflection, education, and engaging in
              open conversations are effective ways to unveil our unconscious
              biases. It is crucial to challenge our assumptions, question our
              judgments, and actively seek out diverse perspectives.
              </div>
            </div>
          </p>
          <br />
          {/* <p className="lead" style={{ color: "" , paddingLeft: "12vw" }}>
          Foster a deeper understanding of the biases that shape
                        our perceptions and actions.
          </p> */}
        </div>
        <div
          style={{
            backgroundImage: `url(${mitigatingBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "85vh",
            width: "100vw",
          }}
        >
          <h1
            style={{
              paddingTop: "12vh",
              paddingLeft: "12vw",
              fontSize: "60px",
            }}
          >
            <span data-aos="fade-in" data-aos-delay="300">
            The Role of Education and Continuous Learning
            </span>
        
          </h1>
          <br />
          <p
            className="lead"
            data-aos="fade-right"
            data-aos-delay="300"
            style={{ color: "grey", fontSize: "20px", paddingLeft: "12vw" }}
          >
            <div className="row" style={{ paddingLeft: "" }}>
              <div className="col-sm-12 w-75">
              Education plays a pivotal role in combating unconscious bias. By
              integrating discussions on bias and diversity into educational
              curricula, we can raise awareness from an early age. Furthermore,
              providing resources, workshops, and training programs for
              individuals and organizations can equip them with the tools and
              knowledge to navigate biases and promote inclusivity effectively.
              </div>
            </div>
          </p>
          <br />
          {/* <p className="lead" style={{ color: "" , paddingLeft: "12vw" }}>
          Foster a deeper understanding of the biases that shape
                        our perceptions and actions.
          </p> */}
        </div>
    
      </div>
      <Footer />
    </div>
  );
};

export default HomePageLogin;
