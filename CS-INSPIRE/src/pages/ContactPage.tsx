import React, { useState, useEffect, useRef } from "react";
import NavigationBar from "../components/NavBarLogin";
import Footer from "../components/Footer";
import background from "../assets/contactBg.png";
import { FaPhone, FaEnvelope, FaMapMarker } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState("Send");
  const [styleObj, setStyleObj] = useState({})
  const [isLoading, setLoading] = useState(true);
  const emailForm = useRef();
  function someRequest() {
    //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise((resolve) => setTimeout(() => resolve(), 0));
  }

  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...")
    setStyleObj({backgroundColor: 'black', border: 'none'})
    emailjs
      .sendForm(
        "service_vj2tf9o",
        "template_ddaufwb",
        e.target,
        "UZT5fyPbvAt7Isz-U"
      )
      .then(
        (result) => {
          setFormStatus("Submitted!")
          setStyleObj({backgroundColor: 'green', border: 'none'})
          console.log(result.text);
        },
        (error) => {
          setFormStatus("Failed!")
          setStyleObj({backgroundColor: 'red', border: 'none'})
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loader-container");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
    
  });

  return (
    <div className="container-fluid mt-5 p-0" style={{ overflow: "hidden" }}>
      <NavigationBar />
      <div className="row" style={{ marginTop: "" }}>
        <div
          className="col"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="contact-form">
            <h2 style={{ paddingTop: "100px" }} className="mb-3 text-center">
              Contact Us
            </h2>
            <p className="text-center lead">
              Have any doubts or enquiries? Drop us an email!{" "}
            </p>
            <br />
            <div className="contact-details text-center text-muted">
              <FaPhone /> +65 1234 5678 &nbsp;&nbsp;&nbsp;&nbsp;
              <FaEnvelope /> perceptionpause@gmail.com &nbsp;&nbsp;&nbsp;&nbsp;
              <FaMapMarker /> Singapore
            </div>
            <br />
            <br />

            <form
              ref={emailForm}
              onSubmit={sendEmail}
              className="w-25 mx-auto"
              style={{ height: "70vh" }}
            >
              <div className="mb-3">
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <input
                  className="form-control"
                  name="user_name"
                  type="text"
                  id="name"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-control"
                  name="user_email"
                  type="email"
                  id="email"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  id="message"
                  rows={5}
                  maxLength={250}
                  required
                />
              </div>
              <button className="btn btn-dark" type="submit" style={styleObj}>
                {formStatus}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ContactForm;
