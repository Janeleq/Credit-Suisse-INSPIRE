import'../styles/_ageism.css'
import React, {useState, useEffect} from 'react';
import NavigationBar from '../components/NavBarLogin'

function Beautybias() {
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
                <div className="section-title mb-4 pb-2">
                    <h4 className="title mb-4">Unconscious Bias: <mark>Beauty Bias</mark></h4>
                    <p className="text-muted para-desc mx-auto mb-0">
                    Beauty bias refers to the tendency to favor or attribute positive qualities to individuals based on their physical appearance. It's a bias that operates unconsciously, shaping our perceptions and judgments without us even realizing it.
                    <br/><br/>
                    In the realm of beauty bias, it's essential to recognize that societal standards and media portrayals often influence our perceptions of what is considered 'beautiful' or 'attractive.' These standards can inadvertently influence how we perceive individuals, including their credibility, intelligence, and worth.
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

export default Beautybias