import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../assets/PerceptionPause_newlogo.png'
function Footer() {
    return (
            
            <footer className="bg-light text-center w-100 p-0 bottom" style={{height: 'auto'}}>
            {/* <!-- Grid container --> */}
                <hr style={{color: 'grey', height: '', margin: '0', marginBottom: '5px'}}/>
                {/* <!-- Section: Social media --> */}
              
            

            
                {/* <!-- Section: Text --> */}
                <section className="mb-2">
                    <div className='row'>
                        <div className='col p-0 m-0'>
                            <p className='text-center m-0'>
                                <img src={logo} className='' style={{display: 'inline-block', width: '8%'}}/>&nbsp;&nbsp;
                           
                                <p style={{fontSize: 'small'}} className='w-75 mx-auto'>
                                Thank you for being part of the Perception Pause movement, and we encourage you to explore the resources and engage in meaningful discussions that will help dismantle bias and create a brighter future for all.
                                </p>
                            </p>
                        </div>
                    </div>
         
                </section>
                {/* <!-- Section: Text --> */}
            
                
                {/* <!-- Section: Links --> */}
                <section className="" style={{fontSize: '0.85rem'}}>
                {/* <!--Grid row--> */}
                <div className="row">
                    {/* <!--Grid column--> */}
                    <div className="col-lg-4 col-md-4 mb-4 mb-md-0 p-0">
                    <h5 className="text-uppercase text-dark" style={{fontSize: '1.1rem', color: ''}}>Help</h5>
            
                    <ul className="list-unstyled mb-0">
                        <li>
                        <a href="#!" className="" style={{color: '#888888'}} >FAQs</a>
                        </li>
                        <li>
                        <a href="#!" className="" style={{color: '#888888'}}>Contact Us</a>
                        </li>
                    </ul>
                    </div>
                    {/* <!--Grid column--> */}
            
                    {/* <!--Grid column--> */}
                    <div className="col-lg-4 col-md-4 mb-4 mb-md-0 p-0">
                    <h5 className="text-uppercase text-dark" style={{fontSize: '1.1rem', color: ''}}>Privacy</h5>
            
                    <ul className="list-unstyled mb-0">
                        <li>
                        <a href="#!" className="" style={{color: '#888888'}}>Policy</a>
                        </li>
                        <li>
                        <a href="#!" className="" style={{color: '#888888'}}>Link 2</a>
                        </li>
                
                    </ul>
                    </div>
                    {/* <!--Grid column--> */}
            
                    {/* <!--Grid column--> */}
                    <div className="col-lg-4 col-md-4 mb-4 mb-md-0 p-0">
                    <h5 className="text-uppercase text-dark" style={{fontSize: '1.1rem', color: ''}}>Media</h5>
            
                    <ul className="list-unstyled mb-0">
                        <li>
                        <a href="#!" className="" style={{color: '#888888'}}>Community</a>
                        </li>
                        <li>
                        <a href="#!" className="" style={{color: '#888888'}}>News Room</a>
                        </li>
                    </ul>
                    </div>
                    {/* <!--Grid column--> */}
                </div>
                {/* <!--Grid row--> */}
                </section>
                {/* <!-- Section: Links --> */}
                
            <p className='mt-3 p-3 text-light' style={{backgroundColor: '#404041', fontSize: 'small', margin: '0'}}>
                 &copy;&nbsp;2023 Perception Pause. All rights reserved.
            </p>
        </footer>
        
            
    )
}

export default Footer;