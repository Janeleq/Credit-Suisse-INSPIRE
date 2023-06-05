import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../assets/PerceptionPause_newlogo.png'
function Footer() {
    return (
            
            <footer className="bg-light text-center w-100 p-0 bottom" style={{height: 'auto'}}>
            {/* <!-- Grid container --> */}
                <hr style={{color: 'grey', height: '1px'}}/>
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
                <section className="mb-2">
                <p className='text-center'>
                    <img src={logo} className='text-center' style={{width: '8%'}}/>&nbsp;&nbsp;
                    <br/>
                    <p style={{fontSize: 'small'}} className='w-75 mx-auto'>
                    Thank you for being part of the Perception Pause movement, and we encourage you to explore the resources and engage in meaningful discussions that will help us dismantle bias and create a brighter future for all.
                    </p>
                </p>
                </section>
                {/* <!-- Section: Text --> */}
            
                
                {/* <!-- Section: Links --> */}
                <section className="" style={{fontSize: '0.85rem'}}>
                {/* <!--Grid row--> */}
                <div className="row">
                    {/* <!--Grid column--> */}
                    <div className="col-lg-4 col-md-4 mb-4 mb-md-0 p-0">
                    <h5 className="text-uppercase" style={{fontSize: '1.1rem', color: 'grey'}}>Help</h5>
            
                    <ul className="list-unstyled mb-0">
                        <li>
                        <a href="#!" className="text-dark" >FAQs</a>
                        </li>
                        <li>
                        <a href="#!" className="text-dark">Contact Us</a>
                        </li>
                    </ul>
                    </div>
                    {/* <!--Grid column--> */}
            
                    {/* <!--Grid column--> */}
                    <div className="col-lg-4 col-md-4 mb-4 mb-md-0 p-0">
                    <h5 className="text-uppercase" style={{fontSize: '1.1rem', color: 'grey'}}>Privacy</h5>
            
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
                    <h5 className="text-uppercase" style={{fontSize: '1.1rem', color: 'grey'}}>Media</h5>
            
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
                
            <p className='mt-3 p-3 text-light' style={{backgroundColor: '#404041', fontSize: 'small'}}>
                 &copy;&nbsp;2023 Perception Pause. All rights reserved.
            </p>
        </footer>
        
            
    )
}

export default Footer;