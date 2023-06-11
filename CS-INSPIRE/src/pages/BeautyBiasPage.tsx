import'../styles/_ageism.css'
import React, {useState, useEffect} from 'react';
import NavigationBar from '../components/NavBarLogin'
import Footer from '../components/Footer';
import background from '../assets/BreakBias.png'
import actionIcon from '../assets/action.png'
import reflectionIcon from '../assets/reflectionIcon.png'
import outcomeIcon from '../assets/outcomeIcon.png'
import { NavLink, useNavigate } from 'react-router-dom'

function Beautybias() {
    const [isLoading, setLoading] = useState(true);
    const navigate = useNavigate()
  
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

    function beautyBiasRoleplay () {
        console.log("Heading to roleplay page!")
        navigate("/bias/beautyBiasRoleplay")
    }

    function beautyBiasFacts() {
      console.log("Heading to facts page!")
      navigate("/bias/beautyBiasFacts")
    }

    return (
    //     <div className="container-fluid bootdey">
    //         <NavigationBar/>
    //     <div className="row" style={{marginTop: '18vh'}}>
    //         <div className="col-12 text-center">
    //             <div className="section-title mb-4 pb-2">
    //                 <h4 className="title mb-4">Unconscious Bias: <mark>Beauty Bias</mark></h4>
    //                 <p className="text-muted para-desc mx-auto mb-0">
    //                 Beauty bias refers to the tendency to favor or attribute positive qualities to individuals based on their physical appearance. It's a bias that operates unconsciously, shaping our perceptions and judgments without us even realizing it.
    //                 <br/><br/>
    //                 In the realm of beauty bias, it's essential to recognize that societal standards and media portrayals often influence our perceptions of what is considered 'beautiful' or 'attractive.' These standards can inadvertently influence how we perceive individuals, including their credibility, intelligence, and worth.
    //                 </p>
    //             </div>
    //         </div>
    //     </div>

    //     <div className="row">
    //         <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
    //             <div className="team text-center rounded p-3 py-4">
    //                 <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
    //                 <div className="content mt-3">
    //                     <h4 className="title mb-0">Lisa Martin</h4>
    //                     <small className="text-muted">Founder</small>
    //                     <ul className="list-unstyled mt-3 social-icon social mb-0">
    //                         <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-facebook" title="Facebook"></i></a></li>
    //                         <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-instagram" title="Instagram"></i></a></li>
    //                         <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-twitter" title="Twitter"></i></a></li>
    //                         <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-google-plus" title="Google +"></i></a></li>
    //                         <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-linkedin" title="Linkedin"></i></a></li>
    //                     </ul>
    //                 </div>
    //             </div>
    //         </div>
            
    //         <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
    //             <div className="team text-center rounded p-3 py-4">
    //                 <img src="https://bootdey.com/img/Content/avatar/avatar8.png" className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
    //                 <div className="content mt-3">
    //                     <h4 className="title mb-0">Calvin Carlo</h4>
    //                     <small className="text-muted">C.E.O.</small>
    //                     <ul className="list-unstyled mt-3 social-icon social mb-0">
    //                         <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-facebook" title="Facebook"></i></a></li>
    //                         <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-instagram" title="Instagram"></i></a></li>
    //                         <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-twitter" title="Twitter"></i></a></li>
    //                         <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-google-plus" title="Google +"></i></a></li>
    //                         <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-linkedin" title="Linkedin"></i></a></li>
    //                     </ul>
    //                 </div>
    //             </div>
    //         </div>
            
    //         <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
    //             <div className="team text-center rounded p-3 py-4">
    //                 <img src="https://bootdey.com/img/Content/avatar/avatar2.png" className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
    //                 <div className="content mt-3">
    //                     <h4 className="title mb-0">Richha Jotchi</h4>
    //                     <small className="text-muted">Manager</small>
    //                     <ul className="list-unstyled mt-3 social-icon social mb-0">
    //                         <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-facebook" title="Facebook"></i></a></li>
    //                         <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-instagram" title="Instagram"></i></a></li>
    //                         <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-twitter" title="Twitter"></i></a></li>
    //                         <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-google-plus" title="Google +"></i></a></li>
    //                         <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-linkedin" title="Linkedin"></i></a></li>
    //                     </ul>
    //                 </div>
    //             </div>
    //         </div>
            
    //         <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
    //             <div className="team text-center rounded p-3 py-4">
    //                 <img src="https://bootdey.com/img/Content/avatar/avatar6.png" className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
    //                 <div className="content mt-3">
    //                     <h4 className="title mb-0">Cristino Murfy</h4>
    //                     <small className="text-muted">Accountant</small>
    //                     <ul className="list-unstyled mt-3 social-icon social mb-0">
    //                         <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-facebook" title="Facebook"></i></a></li>
    //                         <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-instagram" title="Instagram"></i></a></li>
    //                         <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-twitter" title="Twitter"></i></a></li>
    //                         <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-google-plus" title="Google +"></i></a></li>
    //                         <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-linkedin" title="Linkedin"></i></a></li>
    //                     </ul>
    //                 </div>
    //             </div>
    //         </div>
    //         <section className="mb-4">
    //             {/* <!-- Facebook --> */}
    //             <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#3b5998"}} href="#!" role="button"><i className="fab fa-facebook-f"></i></a>
            
    //             {/* <!-- Twitter --> */}
    //             <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#55acee"}} href="#!" role="button"><i className="fab fa-twitter"></i></a>
            
    //             {/* <!-- Google --> */}
    //             <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#dd4b39"}} href="#!" role="button"><i className="fab fa-google"></i></a>
            
    //             {/* <!-- Instagram --> */}
    //             <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#ac2bac"}} href="#!" role="button"><i className="fab fa-instagram"></i></a>
            
    //             {/* <!-- Linkedin --> */}
    //             <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#0082ca"}} href="#!" role="button"><i className="fab fa-linkedin-in"></i></a>
    //             {/* <!-- Github --> */}
    //             <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#333333"}} href="#!" role="button"><i className="fab fa-github"></i></a>
    //             </section>
    //             {/* <!-- Section: Social media --> */}
            
    //     </div>
    // </div>
    <div className="container-fluid bootdey p-0" style={{overflow: 'hidden'}}>
    <NavigationBar/>
    <div className="row" style={{marginTop: '9vh'}}>
        <div className='col-sm-12 col-md-4 col-lg-6' style={{backgroundImage:`url(${background})`, backgroundSize: 'cover', height: '100vh'}}>

        </div>
        <div className="col-sm-12 col-md-8 col-lg-6 text-center" style={{height: '100vh'}}>
            <div className="section-title mt-5">
                <h4>Unconscious Bias: <mark>Halo Effect</mark></h4>
            <p className="text-muted para-desc mx-auto mb-0">
            One common bias that can come into play is known as the 'halo effect.' It occurs when we attribute positive qualities or attributes to someone or something based on an initial positive impression. 
            <br/><br/>
            In the context of our website, it means that you may be inclined to view our articles more favorably or perceive them as more valuable simply because you had a positive first encounter with our website or one specific article.
            </p>
                <br/><br/>
                <div className='row mb-5'>
                  <div className='col'>
                    <p className='lead bg-light w-25 mx-auto' style={{fontWeight: 'bold'}}>Roleplay</p>
                  
                    <small>
                      There are a few prompts that will appear in the roleplay.
                    </small>
       
                    <div   className='guide mx-auto'>
                      <div className='row'>
                        <div className='col'>
                          <img src={actionIcon} alt="action" style={{width: '20%'}}/><br/>
                          <small className=''>carry out an action</small>
                        </div>
                        <div className='col'>
                          <img src={reflectionIcon} alt="reflection" style={{width: '20%'}}/><br/>
                          <small className=''>write down your thoughts</small>
                        </div>
                        <div className='col'>
                          <img src={outcomeIcon} alt="outcome" style={{width: '20%'}}/><br/>
                          <small className=''>view the consequence of your action</small>
                        </div>
                      </div>
                        
                        <button className='mx-auto text-center' onClick={beautyBiasRoleplay}>Start</button>
                    </div> 
                  </div>
                </div>
                <br/>
                <div className='row'>
                  <div className='col'>
                      <p className='lead bg-light w-25 mx-auto' style={{fontWeight: 'bold'}}>Statistics</p>
                      
                      <div className='guide w-50 mx-auto'>
                        <p>Get to know some statistics regarding Halo Effect!</p>
                      
                          
                        
                          <i className="fa fa-male" aria-hidden="true"></i>
                          <button type="" onClick={beautyBiasFacts}>View statistics</button>
                      </div> 
                    </div>
                </div>
         
              
            </div>
        </div>
    </div>
    <Footer/>
    </div>
        
    )
}

export default Beautybias