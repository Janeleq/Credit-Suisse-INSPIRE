import "../../styles/_ageism.css";
import { useState, useEffect } from "react";
import NavigationBar from "../../components/NavBarLogin.tsx";
import Footer from "../../components/Footer.tsx";
import background from "../../assets/genderBackground.png";
import pastelgreyBg from "../../assets/pastelGreyBg.png"
import ageismIntroIcon from "../../assets/ageism/ageismFactsIntro.svg";

function GenderFacts() {
  const [isLoading, setLoading] = useState(true);
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

  function someRequest() {
    //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise((resolve) => setTimeout(() => resolve(), 1000));
  }

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
    <div
      className="container-fluid p-0"
      style={{ backgroundImage: `url(${background})`, overflow: "hidden" }}
    >
      <NavigationBar />

      <div className="row" style={{ marginTop: "8vh" }}>
        <div
          style={{ backgroundImage: `url(${pastelgreyBg})`, height: "80vh" }}
        >
          <img
            src={ageismIntroIcon}
            style={{
              float: "right",
              width: "",
              zIndex: 2,
              marginTop: "20vh",
              paddingRight: "2vw",
            }}
          />
          {/* <h2 className="lead" style={{ marginTop: '20vh', paddingLeft:'5vw'}}>Some statistics and facts about Ageism!</h2> */}
          <h3
            style={{
              marginTop: "18vh",
              paddingLeft: "5vw",
              fontSize: "90px",
              fontWeight: "700",
              fontFamily: "Concert One, cursive",
            }}
          >
            Gender Bias / Sexism:
            <br />
            <span
              className="lead"
              style={{
                fontFamily: "Concert One, cursive",
                fontWeight: "200",
                fontSize: "60px",
              }}
            >
              statistics & facts
            </span>
          </h3>
        </div>

        {/* <figure className="text-center mb-0">
          <blockquote className="blockquote">
            <p className="pb-2">
              <span className="lead font-italic">
                Globally, the employment rate for men is 75%, while women stands
                at around 50%.
              </span>
              <br />
              <span style={{ fontSize: "0.875rem" }}>
                Seems like some unconscious bias going on in the workforce?
              </span>
            </p>
          </blockquote>
          <figcaption className="blockquote-footer mb-0">
            World Bank (2018)
          </figcaption>
        </figure> */}
      </div>

      <div
        className=""
        style={{
          backgroundImage: `url(${background})`,
          borderRadius: "4px",
          height: "50vh",
        }}
      >
        <div className="row bg-light" style={{ marginTop: "18vh" }}>
          <figure className="text-center mb-0">
            <blockquote className="blockquote">
              {/* <img className='img-fluid w-50 h-50' style={{borderRadius: '50%'}} src="" alt=""/> */}
              <p className="pb-2">
                <i className="fas fa-quote-left fa-xs text-primary"></i>
                <span
                  className="p-3 lead font-italic"
                  style={{ opacity: "1.2" }}
                >
                  Globally, the employment rate for men is 75%, while women
                  stands at around 50%.
                </span>
                <br />
                <span style={{ fontSize: "0.875rem" }}>
                  Seems like some unconscious bias going on in the workforce?
                </span>
                <i className="fas fa-quote-right fa-xs text-primary"></i>
              </p>
            </blockquote>
            <figcaption className="blockquote-footer mb-0">
              World Bank (2018)
            </figcaption>
          </figure>
        </div>

        <div className="mt-5 row">
          <div className="col-6 text-center">
            <h4>Do you ever associate a name to a specific gender?</h4>
            <p>
              Enter a name that comes to your mind and the gender you associate
              it with (engilsh names only please!): &nbsp;
              <br /> Then, see if it is the same as to what you think!
              <br />
              <input type="text" id="name" onChange={handleChange}></input>{" "}
              <br />
              <button type="submit" className="m-1" onClick={fetchData}>
                See Results
              </button>
            </p>
          </div>
          <div className="col-6">
            <p>
              Name: {name} <br />
              Gender: {gender} <br />
              Probability: {probability} <br />
            </p>
          </div>
        </div>

        <div class="ss-stats-content">
          <p class="ss-stats-intro">Sexism is present in all areas of life.</p>

          <div class="ss-pies">
            <div class="ss-pie">
              <div
                class="progress-pie-chart visibleClass undefined"
                data-percent="30"
                data-scroll=""
              >
                <div class="ppc-progress">
                  <div
                    class="ppc-progress-fill"
                    style={{ transform: "rotate(108deg)" }}
                  >
                    &nbsp;
                  </div>
                </div>

                <div class="ppc-percents">
                  <div class="pcc-percents-wrapper">
                    <img src="image/sexisme-tranche3-icon1.png" />
                  </div>
                </div>
              </div>

              <p>
                <strong>63%</strong> of women journalists have been confronted
                with verbal abuse
              </p>
            </div>

            <div class="ss-pie">
              <div
                class="progress-pie-chart visibleClass undefined"
                data-percent="50"
                data-scroll=""
              >
                <div class="ppc-progress">
                  <div
                    class="ppc-progress-fill"
                    style={{ transform: "rotate(108deg)" }}
                  >
                    &nbsp;
                  </div>
                </div>

                <div class="ppc-percents">
                  <div class="pcc-percents-wrapper">
                    <img src="image/sexisme-tranche3-icon2.png" />
                  </div>
                </div>
              </div>

              <p>
                Women spend almost <strong>twice as much</strong> time as men on
                unpaid housework (OECD countries)
              </p>
            </div>

            <div class="ss-pie">
              <div
                class="progress-pie-chart visibleClass undefined gt-50"
                data-percent="80"
                data-scroll=""
              >
                <div class="ppc-progress">
                  <div
                    class="ppc-progress-fill"
                    style={{ transform: "rotate(288deg)" }}
                  >
                    &nbsp;
                  </div>
                </div>

                <div class="ppc-percents">
                  <div class="pcc-percents-wrapper">
                    <img src="image/sexisme-tranche3-icon3.png" />
                  </div>
                </div>
              </div>

              <p>
                <strong>80%</strong> of women stated that they have been
                confronted with the phenomenon of “mansplaining” and
                “manterrupting” at work
              </p>
            </div>

            <div class="ss-pie">
              <div
                class="progress-pie-chart visibleClass undefined gt-50"
                data-percent="75"
                data-scroll=""
              >
                <div class="ppc-progress">
                  <div
                    class="ppc-progress-fill"
                    style={{ transform: "rotate(270deg)" }}
                  >
                    &nbsp;
                  </div>
                </div>

                <div class="ppc-percents">
                  <div class="pcc-percents-wrapper">
                    <img src="image/sexisme-tranche3-icon4.png" />
                  </div>
                </div>
              </div>

              <p>
                Men represent <strong>75%</strong> of news sources and subjects
                in Europe
              </p>
            </div>

            <div class="ss-pie">
              <div
                class="progress-pie-chart visibleClass undefined gt-50"
                data-percent="66"
                data-scroll=""
              >
                <div class="ppc-progress">
                  <div
                    class="ppc-progress-fill"
                    style={{ transform: "rotate(237.6deg)" }}
                  >
                    &nbsp;
                  </div>
                </div>

                <div class="ppc-percents">
                  <div class="pcc-percents-wrapper">
                    <img src="image/sexisme-tranche3-icon5.png" />
                  </div>
                </div>
              </div>

              <p>
                In the UK, <strong>66%</strong> of 16-18-year-old girls surveyed
                experienced or witnessed the use of sexist language at school
              </p>
            </div>

            <div class="ss-pie">
              <div
                class="progress-pie-chart visibleClass undefined gt-50"
                data-percent="59"
                data-scroll=""
              >
                <div class="ppc-progress">
                  <div
                    class="ppc-progress-fill"
                    style={{ transform: "rotate(212.4deg)" }}
                  >
                    &nbsp;
                  </div>
                </div>

                <div class="ppc-percents">
                  <div class="pcc-percents-wrapper">
                    <img src="image/sexisme-tranche3-icon6.png" />
                  </div>
                </div>
              </div>

              <p>
                <strong>59%</strong> of women in Amsterdam reported some form of
                street harassment
              </p>
            </div>

            <div class="ss-pie">
              <div
                class="progress-pie-chart visibleClass undefined"
                data-percent="50"
                data-scroll=""
              >
                <div class="ppc-progress">
                  <div
                    class="ppc-progress-fill"
                    style={{ transform: "rotate(180deg)" }}
                  >
                    &nbsp;
                  </div>
                </div>

                <div class="ppc-percents">
                  <div class="pcc-percents-wrapper">
                    <img src="image/sexisme-tranche3-icon7.png" />
                  </div>
                </div>
              </div>

              <p>
                In France, <strong>50%</strong> of young women surveyed recently
                experienced injustice or humiliation because they are women
              </p>
            </div>

            <div class="ss-pie">
              <div
                class="progress-pie-chart visibleClass undefined gt-50"
                data-percent="76"
                data-scroll=""
              >
                <div class="ppc-progress">
                  <div
                    class="ppc-progress-fill"
                    style={{ transform: "rotate(273.6deg)" }}
                  >
                    &nbsp;
                  </div>
                </div>

                <div class="ppc-percents">
                  <div class="pcc-percents-wrapper">
                    <img src="image/sexisme-tranche3-icon8.png" />
                  </div>
                </div>
              </div>

              <p>
                In Serbia, research indicates that <strong>76%</strong> of women
                in business are not taken as seriously as men
              </p>
            </div>
          </div>
        </div>
        <div className="row bg-light">
          <div className="col text-left">
            <p className="w-50 text-center lead">
              <figure className="text-center mb-0">
                <blockquote className="blockquote">
                  {/* <img className='img-fluid w-50 h-50' style={{borderRadius: '50%'}} src="" alt=""/> */}
                  <p className="pb-2">
                    <i className="fas fa-quote-left fa-xs text-primary"></i>
                    <span
                      className="p-3 lead font-italic"
                      style={{ opacity: "1.2" }}
                    >
                      {" "}
                      There are no countries in the world with gender equality,
                      the study found.
                    </span>
                    <br />
                    <span style={{ fontSize: "0.875rem" }}>
                      Zimbabwe had the highest amount of bias with only 0.27% of
                      people reporting no gender bias at all. At the other end
                      of the scale was Andorra where 72% of people reported no
                      bias.
                    </span>
                    <i className="fas fa-quote-right fa-xs text-primary"></i>
                  </p>
                </blockquote>
                <figcaption className="blockquote-footer mb-0">
                  BBC News (2020)
                </figcaption>
              </figure>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default GenderFacts;
