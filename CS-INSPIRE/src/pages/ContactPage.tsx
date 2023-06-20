import React, { useState, useEffect } from "react";
import NavigationBar from "../components/NavBarLogin";
import Footer from "../components/Footer";
import background from "../assets/contactBg.png";
import { FaPhone, FaEnvelope, FaMapMarker } from "react-icons/fa";

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState("Send");
  const [isLoading, setLoading] = useState(true);

  function someRequest() {
    //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise((resolve) => setTimeout(() => resolve(), 0));
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };

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
              <FaPhone /> +65 9835 3213 &nbsp;&nbsp;&nbsp;&nbsp;
              <FaEnvelope /> perceptionpause@gmail.com &nbsp;&nbsp;&nbsp;&nbsp;
              <FaMapMarker /> Singapore
            </div>
            <br />
            <br />

            <form
              onSubmit={onSubmit}
              className="w-25 mx-auto"
              style={{ height: "70vh" }}
            >
              <div className="mb-3">
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <input
                  className="form-control"
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
                  id="message"
                  rows={5}
                  maxLength={250}
                  required
                />
              </div>
              <button className="btn btn-dark" type="submit">
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
