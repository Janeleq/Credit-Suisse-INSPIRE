import "../../styles/_ageism.css";
import { useState, useEffect } from "react";
import NavigationBar from "../../components/NavBarLogin";
import Footer from "../../components/Footer";
import background from "../../assets/beautyBias/beautyBias.webp";
import actionIcon from "../../assets/action.png";
import reflectionIcon from "../../assets/reflectionIcon.png";
import outcomeIcon from "../../assets/outcomeIcon.png";
import { NavLink, useNavigate } from "react-router-dom";
import BeautyBiasRoleplay from "./BeautyBiasRoleplayPage";

function Beautybias() {
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

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

  function beautyBiasRoleplay() {
    console.log("Heading to roleplay page!");
    navigate("/bias/beautyBiasRoleplay");
  }

  function beautyBiasFacts() {
    console.log("Heading to facts page!");
    navigate("/bias/beautyBiasFacts");
  }

  return (
    <div className="container-fluid bootdey p-0" style={{ overflow: "hidden" }}>
      <NavigationBar />
      <div className="row" style={{ marginTop: "9vh" }}>
        <div
          className="col-sm-12 col-md-4 col-lg-6"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "160vh",
          }}
        ></div>

        <div
          className="col-sm-12 col-md-8 col-lg-6 text-center bg-white"
          style={{ height: "160vh" }}
        >
          <div className="section-title mt-5">
            <h4>
              Unconscious Bias: <mark>Beauty Bias</mark>
            </h4>
            <p className="text-muted para-desc mx-auto mb-0">
              Beauty bias refers to the tendency to favor or attribute positive
              qualities to individuals based on their physical appearance. It's
              a bias that operates unconsciously, shaping our perceptions and
              judgments without us even realizing it.
              <br />
              <br />
              In the realm of beauty bias, it's essential to recognize that
              societal standards and media portrayals often influence our
              perceptions of what is considered 'beautiful' or 'attractive.'
              These standards can inadvertently influence how we perceive
              individuals, including their credibility, intelligence, and worth.
            </p>
            <br />
            <br />
            <div className="row">
              <div className="col">
                <p
                  className="lead bg-light w-25 mx-auto"
                  style={{ fontWeight: "bold" }}
                >
                  Roleplay
                </p>

                <p className="mb-0">
                  Take up a roleplay to learn and explore more about Beauty
                  Bias!
                </p>

                <small className="">
                  There are a few prompts that will appear in the roleplay.
                </small>

                <div className="guide mx-auto text-muted mt-3">
                  <div className="row w-100">
                    <div className="col w-50">
                      <img
                        src={actionIcon}
                        alt="action"
                        style={{ width: "20%" }}
                      />
                      <br />
                      <small className="">carry out an action</small>
                    </div>
                    <div className="col w-50">
                      <img
                        src={reflectionIcon}
                        alt="reflection"
                        style={{ width: "20%" }}
                      />
                      <br />
                      <small className="">write down your thoughts</small>
                    </div>
                    <div className="col w-50">
                      <img
                        src={outcomeIcon}
                        alt="outcome"
                        style={{ width: "20%" }}
                      />
                      <br />4{" "}
                      <small className="">
                        view the consequence of your action
                      </small>
                    </div>
                  </div>
                  <br />
                  <button
                    className="mx-auto text-center"
                    onClick={beautyBiasRoleplay}
                  >
                    Start Roleplay
                  </button>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="row">
              <div className="col">
                <p
                  className="lead bg-light w-25 mx-auto"
                  style={{ fontWeight: "bold" }}
                >
                  Statistics
                </p>

                <div className="guide w-50 mx-auto">
                  <p>Get to know some statistics regarding Beauty Bias!</p>
                  <i className="fa fa-male" aria-hidden="true"></i>
                  <button type="" onClick={beautyBiasRoleplay}>
                    View statistics
                  </button>
                </div>
              </div>
            </div>
            <br />
            <br />
            {/* <div className='row'>
                  <div className='col'>
                      <p className='lead bg-light w-25 mx-auto' style={{fontWeight: 'bold'}}>Quizzes</p>
                      
                      <div className='guide w-50 mx-auto'>
                        <p>Take some quizzes regarding Beauty Bias!</p>
                      
                          
                        
                          <i className="fa fa-male" aria-hidden="true"></i>
                          <button type="" onClick={beautyBiasFacts}>View quizzes</button>
                      </div> 
                    </div>
                </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );

  // return (
  // <div className="container-fluid bootdey p-0" style={{overflow: 'hidden'}}>
  // <NavigationBar/>
  // <div className="row" style={{marginTop: '9vh'}}>
  //     <div className='col-sm-12 col-md-4 col-lg-6' style={{backgroundImage:`url(${background})`, backgroundSize: 'cover', height: '120vh'}}>

  //     </div>
  //     <div className="col-sm-12 col-md-8 col-lg-6 text-center bg-white" style={{height: '120vh'}}>
  //         <div className="section-title mt-5">
  //             <h4>Unconscious Bias: <mark>Halo Effect</mark></h4>
  //         <p className="text-muted para-desc mx-auto mb-0">
  //         One common bias that can come into play is known as the 'halo effect.' It occurs when we attribute positive qualities or attributes to someone or something based on an initial positive impression.
  //         <br/><br/>
  //         In the context of our website, it means that you may be inclined to view our articles more favorably or perceive them as more valuable simply because you had a positive first encounter with our website or one specific article.
  //         </p>
  //             <br/><br/>
  //             <div className='row'>
  //               <div className='col'>
  //                 <p className='lead bg-light w-25 mx-auto' style={{fontWeight: 'bold'}}>Roleplay</p>

  //                 <p className='mb-0'>Take up a roleplay to learn and explore more about Halo Effect!</p>

  //                 <small className="">
  //                   There are a few prompts that will appear in the roleplay.
  //                 </small>

  //                 <div className='guide mx-auto text-muted mt-3'>
  //                   <div className='row'>
  //                     <div className='col'>
  //                       <img src={actionIcon} alt="action" style={{width: '20%'}}/><br/>
  //                       <small className=''>carry out an action</small>
  //                     </div>
  //                     <div className='col'>
  //                       <img src={reflectionIcon} alt="reflection" style={{width: '20%'}}/><br/>
  //                       <small className=''>write down your thoughts</small>
  //                     </div>
  //                     <div className='col'>
  //                       <img src={outcomeIcon} alt="outcome" style={{width: '20%'}}/><br/>
  //                       <small className=''>view the consequence of your action</small>
  //                     </div>
  //                   </div>
  //                     <br/>
  //                     <button className='mx-auto text-center' onClick={beautyBiasRoleplay}>Start Roleplay</button>
  //                 </div>
  //               </div>
  //             </div>
  //             <br/><br/>
  //             <div className='row'>
  //               <div className='col'>
  //                   <p className='lead bg-light w-25 mx-auto' style={{fontWeight: 'bold'}}>Statistics</p>

  //                   <div className='guide w-50 mx-auto'>
  //                     <p>Get to know some statistics regarding Halo Effect!</p>
  //                     <i className="fa fa-male" aria-hidden="true"></i>
  //                     <button type="" onClick={beautyBiasFacts}>View statistics</button>
  //                   </div>
  //                 </div>
  //             </div>
  //             <br/><br/>
  //             <div className='row'>
  //               <div className='col'>
  //                   <p className='lead bg-light w-25 mx-auto' style={{fontWeight: 'bold'}}>Quizzes</p>

  //                   <div className='guide w-50 mx-auto'>
  //                     <p>Take some quizzes regarding Halo Effect!</p>

  //                       <i className="fa fa-male" aria-hidden="true"></i>
  //                       <button type="" onClick="">View quizzes</button>
  //                   </div>
  //                 </div>
  //             </div>

  //         </div>
  //     </div>
  // </div>
  // <Footer/>
  // </div>
  // )
}

export default Beautybias;
