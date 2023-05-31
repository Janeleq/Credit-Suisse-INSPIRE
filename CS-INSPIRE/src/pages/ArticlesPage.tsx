import {useState, useEffect} from 'react'
import Navbar from '../components/NavBarLogin.tsx'
import axios from 'axios'

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
      return new Promise(resolve => setTimeout(() => resolve(), 2000));
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
            var final = "";
            
            for(let i=0; i<articles.length; i++) {
                console.log(articles[i].urlToImage)
                if (articles[i].urlToImage != null)
                {
                    final += `<div className='col-3-lg col-4-md col-6-sm'>
                    <div class='card'>${articles[i].title} <br/>
                    ${articles[i].description} <br/>
                    ${articles[i].author} 
                    <img src=${articles[i].urlToImage}/></div>
                    </div>`
                }
            }
    
            showArticles(final);
    
        })
    
    
        console.log(articles)
    return (
        <div>
            <Navbar></Navbar>
            <div className='container-fluid' style={{position: 'relative'}}>Articles</div>
            <p>Some interesting articles relating to all sorts of biases, for your knowledge and reading.</p>
            <div className="">
                <div style={{overflow: 'hidden'}} className='row p-0' dangerouslySetInnerHTML={{ __html: output }}>
                    
                    
                </div>
            
            </div>
        </div>
    )
}

export default ArticlesPage


