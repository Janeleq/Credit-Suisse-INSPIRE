import {useState, useEffect} from 'react'
import Navbar from '../components/NavBarLogin.tsx'
import axios from 'axios'
import Chatbot from '../components/Chatbot.tsx'
function ArticlesPage() {

    // let articles = await promise;

    // useEffect runs twice if we on strictmode
    const [articles, fixArticles] = useState('');
    const [output, showArticles] = useState('');
    const url = 'https://newsapi.org/v2/everything?' +
    'q=biases&' +
    'from=2023-05-25&' +
    'sortBy=popularity&' +
    'apiKey=01d127c2f33a483c939e689920e7bab9';

    const [isLoading, setLoading] = useState(true);
  
  
    function someRequest() { //Simulates a request; makes a "promise" that'll run for 2.5 seconds
      return new Promise(resolve => setTimeout(() => resolve(), 2500));
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

        axios.get(url)
        .then(response => {
            fixArticles(response.data.articles)
            let final = "";
            for(let i=0; i<articles.length; i++) {
                console.log(articles[i].urlToImage)
                    final += 
                    `<div className=col-lg-3 col-md-4 col-sm-6>
                        <div className= card w-50 p-0>
                          <strong>${articles[i].title}</strong> <br/>
                          <img src=${articles[i].urlToImage} className='img-fluid'/>
                          <br/>
                          <p>
                            Author: ${articles[i].author}  <br/>

                            ${articles[i].description} <br/>
                          </p>
                        /div>
                    </div>
                   `
                
            }
    
            showArticles(final);
    
        })
    
    
        console.log(articles)
    return (
        <div className='container-fluid'>
            <Chatbot/>
            <Navbar></Navbar>
            <div style={{marginTop: '10%'}}>  
              <blockquote className='lead text-center'>Some interesting articles relating to all sorts of biases, for your knowledge and reading.</blockquote>
              <div className="articles w-100">
                <div className='row text-center' dangerouslySetInnerHTML={{ __html: output }}>
                </div>
                  
            
              
              </div>

            </div>
        </div>
    )
}

export default ArticlesPage


