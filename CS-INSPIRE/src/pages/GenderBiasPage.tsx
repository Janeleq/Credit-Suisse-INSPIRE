import { useState, useEffect, useCallback } from 'react';
import Chatbot from '../components/Chatbot.tsx'
import NavigationBar from '../components/NavBarLogin.tsx';
import roleplaying from '../assets/roleplaying.jpg'
import funfacts from '../assets/funfacts.jpg'
import Footer from '../components/Footer.tsx';

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
			<div className='row text-center mb-2' style={{marginTop: "10%"}}>
				<h3>Unconscious Bias: <mark>Halo Effect</mark></h3>
				<h5 className='lead'>Choose between exploring some fun facts or roleplaying!</h5>
			</div>
			<div className='row text-center'>
				<div className='col-12 col-lg-6 text-center' style={{}}>
					<div className="card" style={{width:'25rem', height: '100%', display: 'block', marginLeft: 'auto', marginRight: 'auto', float: 'right'}}>
						<h5 className="card-title mt-2">Fun Facts</h5>
						<img className="card-img-top img-fluid" src={funfacts} alt="funfacts" style={{}}/>
						<div className="card-body">
							<p className="card-text">Try out some fun stuff and gain knowledge regarding gender bias/sexism.</p>
							<a href="./gender/facts" className="btn btn-primary">Go somewhere</a>
						</div>
					</div>
				</div>
				<div className='col-12 col-lg-6 text-center'>
					<div className="card" style={{width:'25rem', height: '100%', display: 'block', marginLeft: 'auto', marginRight: 'auto', float: 'left'}}>
					<h5 className="card-title mt-2">Roleplay</h5>
						<img className="card-img-top img-fluid" src={roleplaying} alt="roleplay"/>
						<div className="card-body" style={{marginTop: '51px'}}>
							<p className="card-text">Take on some roleplaying to better understand gender bias/sexism.</p>
							<a href="./gender/roleplay" className="btn btn-primary">Go somewhere</a>
						</div>
					</div>
				</div>
			</div>

        
            {/* Gender/Sexism Bias:
Story: You are the manager of a successful company and need to hire a new employee for a leadership role. You have two candidates: Lisa and John. Lisa has extensive experience and exceptional qualifications, while John has slightly less experience but still meets the job requirements. However, you have an unconscious bias that favors male candidates. Your actions and consequences:
Action 1: Choose John for the role.
Explanation: By selecting John despite Lisa's superior qualifications, you are exhibiting gender bias. This reinforces the stereotype that men are more competent and deserving of leadership positions. The consequence may include missed opportunities for the company due to Lisa's potential to excel in the role.

Action 2: Choose Lisa for the role.
Explanation: By selecting Lisa based on her qualifications, you challenge the gender bias and promote diversity and equality in the workplace. The consequence may include improved team dynamics and the potential for fresh perspectives and innovative ideas. */}
		
			<Footer/>
		</div>
        
    );
}

export default Genderbias;