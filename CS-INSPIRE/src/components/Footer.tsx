import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../assets/PerceptionPause_newlogo.png'
import background from '../assets/footerBg.jpg'

function Footer() {
    return (
            
            <footer className="bg-light text-center w-100 p-0 bottom" style={{bottom: '0px', height: 'auto', backgroundImage: `url(${background})`}}>
            {/* <!-- Grid container --> */}
                <hr style={{color: 'grey', height: '', margin: '0', marginBottom: '5px'}}/>
                {/* <!-- Section: Social media --> */}
              
            

            
                {/* <!-- Section: Text --> */}
                <section className="mb-2">
                    <div className='row'>
                        <div className='col p-0 m-0'>
                            <p className='text-center m-0'>
                                {/* <img src={logo} className='' style={{display: 'inline-block', width: '5%'}}/>&nbsp;&nbsp; */}
                           
                                {/* <p style={{fontSize: 'small'}} className='mb-0 w-75 mx-auto'>
                               
                                </p> */}
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
                     <div className="col-lg-3 col-md-4 mb-4 mb-md-0 p-0">
                        <img src={logo} alt="Logo" style={{width: '6vw', height: '6vh'}}/>
                    </div>
                    {/* <!--Grid column--> */}
                    <div className="col-lg-3 col-md-4 mb-4 mb-md-0 p-0">
                    <h5 className="text-uppercase text-dark" style={{fontSize: '0.8rem', color: ''}}>Help</h5>
            
                    <ul className="list-unstyled mb-0">
                        <li>
                        <a href="/help" className="" style={{color: '#888888'}} >FAQs</a>
                        </li>
                        <li>
                        <a href="/contact" className="" style={{color: '#888888'}}>Contact Us</a>
                        </li>
                    </ul>
                    </div>
                    {/* <!--Grid column--> */}
            
                    {/* <!--Grid column--> */}
                    <div className="col-lg-3 col-md-4 mb-4 mb-md-0 p-0">
                    <h5 className="text-uppercase text-dark" style={{fontSize: '0.8rem', color: ''}}>Privacy</h5>
            
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
                    <div className="col-lg-3 col-md-4 mb-4 mb-md-0 p-0">
                    <h5 className="text-uppercase text-dark" style={{fontSize: '0.8rem', color: ''}}>Media</h5>
            
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