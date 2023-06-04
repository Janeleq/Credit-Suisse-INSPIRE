import'../styles/_ageism.css'
import React, {useState, useEffect} from 'react';
import NavigationBar from '../components/NavBarLogin'

function HaloEffect() {
    const [isLoading, setLoading] = useState(true);
  
  
    function someRequest() { //Simulates a request; makes a "promise" that'll run for 2.5 seconds
      return new Promise(resolve => setTimeout(() => resolve(), 1000));
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
        <div className="container-fluid bootdey">
            <NavigationBar/>
        <div className="row" style={{marginTop: '10%'}}>
            <div className="col-12 text-center">
                <div className="section-title mb-4 pb-2">Unconscious Bias: <mark>Halo Effect</mark>
                    <h4 className="title mb-4"></h4>
                    <p className="text-muted para-desc mx-auto mb-0">
                    One common bias that can come into play is known as the 'halo effect.' It occurs when we attribute positive qualities or attributes to someone or something based on an initial positive impression. 
                    <br/><br/>
                    In the context of our website, it means that you may be inclined to view our articles more favorably or perceive them as more valuable simply because you had a positive first encounter with our website or one specific article.
                    </p>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                <div className="team text-center rounded p-3 py-4">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                    <div className="content mt-3">
                        <h4 className="title mb-0">Lisa Martin</h4>
                        <small className="text-muted">Founder</small>
                        <ul className="list-unstyled mt-3 social-icon social mb-0">
                            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-facebook" title="Facebook"></i></a></li>
                            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-instagram" title="Instagram"></i></a></li>
                            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-twitter" title="Twitter"></i></a></li>
                            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-google-plus" title="Google +"></i></a></li>
                            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-linkedin" title="Linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                <div className="team text-center rounded p-3 py-4">
                    <img src="https://bootdey.com/img/Content/avatar/avatar8.png" className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                    <div className="content mt-3">
                        <h4 className="title mb-0">Calvin Carlo</h4>
                        <small className="text-muted">C.E.O.</small>
                        <ul className="list-unstyled mt-3 social-icon social mb-0">
                            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-facebook" title="Facebook"></i></a></li>
                            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-instagram" title="Instagram"></i></a></li>
                            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-twitter" title="Twitter"></i></a></li>
                            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-google-plus" title="Google +"></i></a></li>
                            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-linkedin" title="Linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                <div className="team text-center rounded p-3 py-4">
                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                    <div className="content mt-3">
                        <h4 className="title mb-0">Richha Jotchi</h4>
                        <small className="text-muted">Manager</small>
                        <ul className="list-unstyled mt-3 social-icon social mb-0">
                            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-facebook" title="Facebook"></i></a></li>
                            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-instagram" title="Instagram"></i></a></li>
                            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-twitter" title="Twitter"></i></a></li>
                            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-google-plus" title="Google +"></i></a></li>
                            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-linkedin" title="Linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                <div className="team text-center rounded p-3 py-4">
                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                    <div className="content mt-3">
                        <h4 className="title mb-0">Cristino Murfy</h4>
                        <small className="text-muted">Accountant</small>
                        <ul className="list-unstyled mt-3 social-icon social mb-0">
                            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-facebook" title="Facebook"></i></a></li>
                            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-instagram" title="Instagram"></i></a></li>
                            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-twitter" title="Twitter"></i></a></li>
                            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-google-plus" title="Google +"></i></a></li>
                            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-linkedin" title="Linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    )
}

export default HaloEffect