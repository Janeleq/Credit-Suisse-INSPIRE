import { useState, useEffect, useCallback } from 'react';
import Chatbot from '../components/Chatbot.tsx'
import NavigationBar from '../components/NavBarLogin.tsx';
import roleplaying from '../assets/roleplaying.jpg'
import funfacts from '../assets/funfacts.jpg'
import genderBackground from '../assets/gender'
import Footer from '../components/Footer.tsx';
import sexismBackground from '../assets/sexism.jpg'

function Genderbias () {

    const [isLoading, setLoading] = useState(true);
  
  
    function someRequest() { //Simulates a request; makes a "promise" that'll run for 2.5 seconds
      return new Promise(resolve => setTimeout(() => resolve(), 0));
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
        <div className='container-fluid p-0 w-100'>
            <NavigationBar/>
            <Chatbot/>
			<div className='row text-center mb-2 w-100' style={{marginTop: '9vh', height: '80vh'}}>
				<div className='col-4' style={{backgroundImage: `url(${sexismBackground})`, backgroundSize: 'cover'}}>

					
				</div>
				<div className='col-8'>
					<h3>Unconscious Bias: <mark>Halo Effect</mark></h3>
					<h5 className='lead'>Choose between exploring some fun facts or roleplaying!</h5>
					
					<div className='row text-center m-0'>
						<div className='col-sm-12 mx-auto col-lg-6 text-center p-0' style={{}}>
							<div className="card" style={{width:'25rem', height: '100%', display: 'block', marginLeft: 'auto', marginRight: 'auto', float: 'right', border: 'none'}}>
								<h5 className="card-title mt-2">Fun Facts</h5>
								<img className="card-img-top" src={funfacts} alt="funfacts" style={{}}/>
								<div className="card-body">
									<p className="card-text">Try out some fun stuff and gain knowledge regarding gender bias/sexism.</p>
									<a href="./gender/facts" className="btn btn-primary">Go somewhere</a>
								</div>
							</div>
						</div>
						<div className='col-sm-12 mx-auto col-lg-6 text-center p-0'>
							<div className="card" style={{width:'25rem', height: '100%', display: 'block', marginLeft: 'auto', marginRight: 'auto', float: 'left', border: 'none'}}>
							<h5 className="card-title mt-2">Roleplay</h5>
								<img className="card-img-top img-fluid" src={roleplaying} alt="roleplay"/>
								<div className="card-body" style={{marginTop: '51px'}}>
									<p className="card-text">Take on some roleplaying to better understand gender bias/sexism.</p>
									<a href="./gender/roleplay" className="btn btn-primary">Go somewhere</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>		
		<Footer/>
	</div>
        
    );
}

export default Genderbias;