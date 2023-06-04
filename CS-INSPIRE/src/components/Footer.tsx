import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../assets/PerceptionPause_newlogo.png'
function Footer() {
    return (
            <footer className="bg-light text-center w-100 mt-5 p-0 bottom container-fluid" style={{backgroundColor: 'grey', minHeight: '15%'}}>
            {/* <!-- Grid container --> */}

                {/* <!-- Section: Social media --> */}
                <section className="mb-4">
                {/* <!-- Facebook --> */}
                <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#3b5998"}} href="#!" role="button"><i className="fab fa-facebook-f"></i></a>
            
                {/* <!-- Twitter --> */}
                <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#55acee"}} href="#!" role="button"><i className="fab fa-twitter"></i></a>
            
                {/* <!-- Google --> */}
                <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#dd4b39"}} href="#!" role="button"><i className="fab fa-google"></i></a>
            
                {/* <!-- Instagram --> */}
                <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#ac2bac"}} href="#!" role="button"><i className="fab fa-instagram"></i></a>
            
                {/* <!-- Linkedin --> */}
                <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#0082ca"}} href="#!" role="button"><i className="fab fa-linkedin-in"></i></a>
                {/* <!-- Github --> */}
                <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#333333"}} href="#!" role="button"><i className="fab fa-github"></i></a>
                </section>
                {/* <!-- Section: Social media --> */}
            
            

            
                {/* <!-- Section: Text --> */}
                <section className="mb-4">
                <p className='text-center'>
                    <img src={logo} className='text-center' style={{width: '8%'}}/>&nbsp;&nbsp;
                    <br/>
                    <p style={{fontSize: 'small'}}>
                    Thank you for being part of the Perception Pause movement, and we encourage you to explore the resources and engage in meaningful discussions that will help us dismantle bias and create a brighter future for all.
                    </p>
                   

                </p>
                </section>
                {/* <!-- Section: Text --> */}
            
                
                {/* <!-- Section: Links --> */}
                <section className="">
                {/* <!--Grid row--> */}
                <div className="row">
                    {/* <!--Grid column--> */}
                    <div className="col-lg-4 col-md-4 mb-4 mb-md-0 p-0">
                    <h5 className="text-uppercase">Help</h5>
            
                    <ul className="list-unstyled mb-0">
                        <li>
                        <a href="#!" className="text-dark">FAQs</a>
                        </li>
                        <li>
                        <a href="#!" className="text-dark">Contact Us</a>
                        </li>
                    </ul>
                    </div>
                    {/* <!--Grid column--> */}
            
                    {/* <!--Grid column--> */}
                    <div className="col-lg-4 col-md-4 mb-4 mb-md-0 p-0">
                    <h5 className="text-uppercase">Privacy</h5>
            
                    <ul className="list-unstyled mb-0">
                        <li>
                        <a href="#!" className="text-dark">Policy</a>
                        </li>
                        <li>
                        <a href="#!" className="text-dark">Link 2</a>
                        </li>
                
                    </ul>
                    </div>
                    {/* <!--Grid column--> */}
            
                    {/* <!--Grid column--> */}
                    <div className="col-lg-4 col-md-4 mb-4 mb-md-0 p-0">
                    <h5 className="text-uppercase">Media</h5>
            
                    <ul className="list-unstyled mb-0">
                        <li>
                        <a href="#!" className="text-dark">Community</a>
                        </li>
                        <li>
                        <a href="#!" className="text-dark">News Room</a>
                        </li>
                    </ul>
                    </div>
                    {/* <!--Grid column--> */}
                </div>
                {/* <!--Grid row--> */}
                </section>
                {/* <!-- Section: Links --> */}
                
            <p style={{marginTop: '5px', fontSize: 'small'}}>
                 &copy;&nbsp;2023 Perception Pause. All rights reserved.
            </p>
        </footer>
        
            
    )
}

export default Footer;