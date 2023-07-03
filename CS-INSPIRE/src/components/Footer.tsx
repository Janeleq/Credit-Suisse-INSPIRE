import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/PerceptionPause_newlogo.png";
import background from "../assets/footerBg.jpg";

function Footer() {
  return (
    <footer
      className="bg-light text-center w-100 p-0 bottom"
      style={{
        bottom: "0px",
        height: "auto",
        backgroundImage: `url(${background})`,
      }}
    >
      <hr
        style={{ color: "grey", height: "", margin: "0", marginBottom: "5px" }}
      />

      <section className="mb-2">
        <div className="row">
          <div className="col p-0 m-0">
            <p className="text-center m-0"></p>
          </div>
        </div>
      </section>

      <section className="" style={{ fontSize: "0.85rem" }}>
        <div className="row">
          <div className="col-lg-4 col-md-3 mb-4 mb-md-0 p-0">
            <h5
              className="text-uppercase text-dark"
              style={{ fontSize: "0.8rem", color: "" }}
            >
              Help
            </h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="/help" className="" style={{ color: "#888888" }}>
                  FAQs
                </a>
              </li>
              <li>
                <a href="/contact" className="" style={{ color: "#888888" }}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-3 mb-4 mb-md-0 p-0">
            <h5
              className="text-uppercase text-dark"
              style={{ fontSize: "0.8rem", color: "" }}
            >
              Privacy
            </h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="/help#privacy-policy-tab" className="" style={{ color: "#888888" }}>
                  Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-3 mb-4 mb-md-0 p-0">
            <h5
              className="text-uppercase text-dark"
              style={{ fontSize: "0.8rem", color: "" }}
            >
              Media
            </h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="/community" className="" style={{ color: "#888888" }}>
                  Community
                </a>
              </li>
              <li>
                <a href="/articles" className="" style={{ color: "#888888" }}>
                  News Room
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <p
        className="mt-1 p-2 text-light"
        style={{ backgroundColor: "#404041", fontSize: "small", margin: "0" }}
      >
        &copy;&nbsp;2023 Perception Pause. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
