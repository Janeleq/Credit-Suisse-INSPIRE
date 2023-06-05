import {useState, useEffect} from 'react'
import Navbar from '../components/NavBarLogin.tsx'
import Footer from '../components/Footer.tsx'
import axios from 'axios'
import Chatbot from '../components/Chatbot.tsx'
import DOMPurify from 'dompurify';

function ArticlesPage() {

    // let articles = await promise;

    // useEffect runs twice if we on strictmode
    const [articles, fixArticles] = useState('');
    const [output, showArticles] = useState('');
    const url = 'https://newsapi.org/v2/everything?' +
    'q=biases&' +
    'from=2023-05-25&' +
    'sortBy=popularity&' +
    'apiKey=01d127c2f33a483c939e689920e7bab9&' +
    'pageSize=25';

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
      })
    })

    useEffect(() => {
      fetchArticles(); 
    }, [])

   function fetchArticles() {
      axios.get(url)
      .then(response => {
          fixArticles(response.data.articles)
          let final = "";
          for(let i=0; i<articles.length; i++) {
              // console.log(articles[i].urlToImage)
              if (articles[i].urlToImage !== null)
              {
                console.log(articles[i].urlToImage)
                  final += 
                  `<div className='bg-light col-lg-3 col-md-4 col-sm-6'>
                      <div className= 'card w-50 h-50 p-0'>
                        <strong>${articles[i].title}</strong> <br/>
                        <img src=${articles[i].urlToImage} className='img-fluid' style={{}}/>
                        <br/>
                        <p>
                          Author: ${articles[i].author}  <br/>
                          ${articles[i].description} <br/>
                        </p>
                      </div>
                  </div>
                  `
              }
            showArticles(final);
          }
        })
        
   

    console.log(articles)
   }
   
        
    return (
        <div className='container-fluid bg-light p-0'>
            <Chatbot/>
            <Navbar></Navbar>
            <div style={{marginTop: '18vh', overflow: 'hidden'}}>  
              <blockquote className='lead text-center'>Some interesting articles relating to all sorts of biases, for your knowledge and reading.</blockquote>
              <div className="articles w-100">
                <div className='row text-center'>
                  <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(output) }}>
                  </div>          
                </div>
              </div>
              <Footer/>
            </div>
        </div>
    )
}

export default ArticlesPage


