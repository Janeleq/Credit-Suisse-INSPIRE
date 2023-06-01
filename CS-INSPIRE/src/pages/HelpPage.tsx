import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavigationBar from "../components/NavBarLogin";
import Chatbot from "../components/Chatbot"

function HelpPage() {
    const [isLoading, setLoading] = useState(true);
  
  
    function someRequest() { //Simulates a request; makes a "promise" that'll run for 2.5 seconds
      return new Promise(resolve => setTimeout(() => resolve(), 0));
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

    return (
        <div className="container-fluid">
            <Chatbot/>  
             <NavigationBar/>
<section className="section mt-5 mb-5">
        <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7 text-center desc">
                <h2 className="h1 mb-3" style={{marginTop: '10%'}}>How can we help?</h2>
                <p className="mx-lg-8 lead">Check out some of the FAQs below that are commonly answered</p>
            </div>
        </div>
</section>
<div className="container">
<div className="row">
      <div className="col-lx-12">
          <div className="card">
              <div className="card-body">
                <div className="row justify-content-center mt-4">
                    <div className="col-xl-5 col-lg-8">
                        <div className="text-center">
                            <h3>Frequently Asked Questions?</h3>
                            <p className="text-muted">If several languages coalesce, the grammar of the resulting language
                                is more simple and regular than that of the individual</p>
                            <div>
                                <button type="button" className="btn btn-primary me-2">Email Us</button>
                                <button type="button" className="btn btn-success">Send us a tweet</button>
                            </div>
                        </div>
                    </div>     
                </div>
               <div className="row justify-content-center mt-5">
                    <div className="col-9">
                        <ul className="nav nav-tabs  nav-tabs-custom nav-justified justify-content-center faq-tab-box" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-genarel-tab" data-bs-toggle="pill" data-bs-target="#pills-genarel" type="button" role="tab" aria-controls="pills-genarel" aria-selected="true">
                                    <span className="font-size-16">General Questions</span>
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-privacy_policy-tab" data-bs-toggle="pill" data-bs-target="#pills-privacy_policy" type="button" role="tab" aria-controls="pills-privacy_policy" aria-selected="false">
                                    <span className="font-size-16">Privacy Policy</span>
                                </button>
                              </li>
                              <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-teachers-tab" data-bs-toggle="pill" data-bs-target="#pills-pricing_plan" type="button" role="tab" aria-controls="pills-pricing_plan" aria-selected="false">
                                    
                                    <span className="font-size-16">Pricing &amp; Plans</span>
                                </button>
                              </li>
                          </ul>
                    </div>
                    <div className="col-lg-9">
                        <div className="tab-content pt-3" id="pills-tabContent">
                            <div className="tab-pane fade active show" id="pills-genarel" role="tabpanel" aria-labelledby="pills-genarel-tab">
                                <div className="row g-4 mt-2">
                                    <div className="col-lg-6">
                                        <h5>What is Lorem Ipsum ?</h5>
                                    <p className="text-muted">If several languages coalesce, the grammar of the resulting language is more simple 
                                        and regular than that of the individual languages. The new common language will be more simple and 
                                        regular than the existing</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <h5>Why do we use it ?</h5>
                                        <p className="text-muted">Their separate existence is a myth. For science, music, sport, etc, 
                                            Europe uses the same vocabulary.</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <h5>Where does it come from ?</h5>
                                    <p className="text-muted">If several languages coalesce, the grammar of the resulting language is more simple 
                                        and regular than that of the individual languages. The new common language will be more simple and 
                                        regular than the existing
                                    </p>
                                    </div>
                                    <div className="col-lg-6">
                                        <h5>Where can I get some?</h5>
                                        <p className="lg-base">If several languages coalesce, the grammar of the resulting language is more 
                                            simple and regular than that of the individual languages. </p>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="pills-privacy_policy" role="tabpanel" aria-labelledby="pills-privacy_policy-tab">
                                <div className="row g-4 mt-2">
                                    <div className="col-lg-6">
                                        <h5>Where can I get some ?</h5>
                                        <p className="lg-base">If several languages coalesce, the grammar of the resulting language is more simple
                                            and regular than that of the individual languages. The new common language will be more
                                            simple and regular than the existing</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <h5>Where does it come from ?</h5>
                                        <p className="lg-base">If several languages coalesce, the grammar of the resulting language is more simple
                                            and regular than that of the individual languages. The new common language will be more
                                            simple and regular than the existing</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <h5>Why do we use it ?</h5>
                                        <p className="lg-base">If several languages coalesce, the grammar of the resulting language is more simple
                                            and regular than that of the individual languages. The new common language will be more
                                            simple and regular than the existing</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <h5>What is Genius privacy policy</h5>
                                        <p className="lg-base">If several languages coalesce, the grammar of the resulting language is more simple
                                            and regular than that of the individual languages. The new common language will be more
                                            simple and regular than the existing</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-pricing_plan" role="tabpanel">
                                <div className="row g-4 mt-4">
                                    <div className="col-lg-6">
                                        <h5>Where does it come from ?</h5>
                                    <p className="lg-base">If several languages coalesce, the grammar of the resulting language is more simple
                                        and regular than that of the individual languages. The new common language will be more
                                        simple and regular than the existing</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <h5>Why do we use it ?</h5>
                                        <p className="lg-base">If several languages coalesce, the grammar of the resulting language is more simple
                                            and regular than that of the individual languages. The new common language will be more
                                            simple and regular than the existing</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <h5>What is Lorem Ipsum ?</h5>
                                    <p className="lg-base">If several languages coalesce, the grammar of the resulting language is more simple 
                                        and regular than that of the individual languages. The new common language will be more 
                                        simple and regular than the existing</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <h5>What is Lorem Ipsum?</h5>
                                        <p className="lg-base">If several languages coalesce, the grammar of the resulting language is more simple 
                                            and regular than that of the individual languages. The new common language will be more 
                                            simple and regular than the existing</p>
                                    </div>
                                </div>
                            </div>
                          </div>
                    </div>
                </div>
              </div>
          </div>
      </div>
  </div>
</div>

<section className="section pt-0" data-aos="flip-up" data-aos-delay="300">
        <div className="row gy-4 justify-content-center">
            <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="card">
                    <div className="card-body d-flex">
                        <div className="icon-lg bg-primary rounded-3 text-white"><i className="fa fa-question-circle"></i></div>
                        <div className="ps-3 col">
                            <h5 className="h6 mb-2"><a className="stretched-link text-reset" href="#">Buying and Item Support</a></h5>
                            <p className="m-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="card">
                    <div className="card-body d-flex">
                        <div className="icon-lg bg-primary rounded-3 text-white"><i className="fa fa-id-badge"></i></div>
                        <div className="ps-3 col">
                            <h5 className="h6 mb-2"><a className="stretched-link text-reset" href="#">Licensing</a></h5>
                            <p className="m-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="card">
                    <div className="card-body d-flex">
                        <div className="icon-lg bg-primary rounded-3 text-white"><i className="fa fa-user"></i></div>
                        <div className="ps-3 col">
                            <h5 className="h6 mb-2"><a className="stretched-link text-reset" href="#">Your Account</a></h5>
                            <p className="m-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="card">
                    <div className="card-body d-flex">
                        <div className="icon-lg bg-primary rounded-3 text-white"><i className="fa fa-trophy"></i></div>
                        <div className="ps-3 col">
                            <h5 className="h6 mb-2"><a className="stretched-link text-reset" href="#">Copyright and Trademarks</a></h5>
                            <p className="m-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="card">
                    <div className="card-body d-flex">
                        <div className="icon-lg bg-primary rounded-3 text-white"><i className="fa fa-book"></i></div>
                        <div className="ps-3 col">
                            <h5 className="h6 mb-2"><a className="stretched-link text-reset" href="#">Tax &amp; Compliance</a></h5>
                            <p className="m-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="card">
                    <div className="card-body d-flex">
                        <div className="icon-lg bg-primary rounded-3 text-white"><i className="fa fa-check"></i></div>
                        <div className="ps-3 col">
                            <h5 className="h6 mb-2"><a className="stretched-link text-reset" href="#">Licensing</a></h5>
                            <p className="m-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
</section>
        </div>

    )
};

export default HelpPage;