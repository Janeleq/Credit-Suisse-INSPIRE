import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.js";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NavigationBarLogin from "../components/NavBarLogin.tsx";
import Chatbot from "../components/Chatbot.tsx";
import Footer from "../components/Footer.tsx";
import affinityBias from "../assets/affinityBias.png";
import haloBias from "../assets/haloBias.png";
import ageismBias from "../assets/ageism.jpg";
import sheryl from "../assets/sherylsandberg.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import variousBias from '../assets/homepageLogin/variousBias.png'

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
    <div className={`container-fluid p-0 h-100 w-100`} style={{}}>
      <NavigationBarLogin />
      <Chatbot />
      <div style={{marginTop: '5vh'}}>
        
        <div style={{backgroundImage: `url(${variousBias})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '80vh',  
            width: "100vw",}}>
            <h1 data-aos="fade-in" data-aos-delay="300" style={{paddingTop: '12vh', paddingLeft: '12vw', fontSize: '70px'}}><span>P</span>
            <span data-aos="fade-in" data-aos-delay="400">e</span>
            <span data-aos="fade-in" data-aos-delay="300">r</span>
            <span data-aos="fade-in" data-aos-delay="400">c</span>
            <span data-aos="fade-in" data-aos-delay="300">e</span>
            <span data-aos="fade-in" data-aos-delay="400">p</span>
            <span data-aos="fade-in" data-aos-delay="300">t</span>
            <span data-aos="fade-in" data-aos-delay="400">i</span>
            <span data-aos="fade-in" data-aos-delay="300">o</span>
            <span data-aos="fade-in" data-aos-delay="400">n</span>
            <br/></h1>
            <h1 data-aos="fade-in" data-aos-delay="300" style={{ paddingLeft: '19vw', fontSize: '70px'}}>

            <span data-aos="fade-in" data-aos-delay="300">P</span>
            <span data-aos="fade-in" data-aos-delay="400">a</span>
            <span data-aos="fade-in" data-aos-delay="300">u</span>
            <span data-aos="fade-in" data-aos-delay="400">s</span>
            <span data-aos="fade-in" data-aos-delay="300">e</span>
           </h1>


            
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePageLogin;
