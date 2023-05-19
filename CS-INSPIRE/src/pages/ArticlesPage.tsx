import {useState, useEffect} from 'react'
import Navbar from '../components/NavBar'
import axios from 'axios'

function ArticlesPage() {

    // let articles = await promise;

    // useEffect runs twice if we on strictmode
    const [articles, fixArticles] = useState('');
    const [output, showArticles] = useState('');
    const url = 'https://newsapi.org/v2/everything?' +
    'q=biases&' +
    'from=2023-04-25&' +
    'sortBy=popularity&' +
    'apiKey=01d127c2f33a483c939e689920e7bab9';

    
        axios.get(url)
        .then(response => {
            fixArticles(response.data.articles)
            var final = "";

            for(let i=0; i<articles.length; i++) {
                final += `<div className='col-3-lg col-4-md col-6-sm'>
                <div class='card'>${articles[i].title} <br/>
                ${articles[i].description} <br/>
                ${articles[i].author} 
                <img src=${articles[i].urlToImage}/></div>
                </div>`
            }
    
            showArticles(final);
    
        })
    
    
        console.log(articles)
    return (
        <div>
            <Navbar></Navbar>
            <div>Articles Page</div>
            <div className="container-fluid">
                <div className='row' dangerouslySetInnerHTML={{ __html: output }}>
                    
                    
                </div>
            
            </div>
        </div>
    )
}

export default ArticlesPage


