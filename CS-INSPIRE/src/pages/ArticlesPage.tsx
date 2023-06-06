import {useState, useEffect} from 'react'
import Navbar from '../components/NavBarLogin.tsx'
import Footer from '../components/Footer.tsx'
import axios from 'axios'
import Chatbot from '../components/Chatbot.tsx'
import DOMPurify from 'dompurify';
import '../styles/_articles.css'

function ArticlesPage() {

    // let articles = await promise;

    // useEffect runs twice if we on strictmode
    const [articles, fixArticles] = useState("");
    const [output, showArticles] = useState([]);
    const url = 'https://newsapi.org/v2/everything?' +
    'q=biases&' +
    'from=2023-05-27&' +
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

   let articleList = [];
   function fetchArticles() {
      axios.get(url)
      .then(response => {
          fixArticles(response.data.articles)
          
          for(let i=0; i<articles.length; i++) {
              // console.log(articles[i].urlToImage)
              if (articles[i].urlToImage !== null)
              {
                console.log(articles[i].urlToImage)
                  articleList.push(
                  `<div className="col-md-6">
                  <div className="media blog-media">
                      <a href="#"><img src=${articles[i].urlToImage} className='d-flex w-50 img-fluid' style={{}}/></a>
                      <div className="circle">
                          <h5 className="day"><strong>${articles[i].title}</strong></h5>
                          <span className="month">sep</span>
                      </div>
                      <div className="media-body">
                          <a href=""><h5 className="mt-0">Standard Blog Post</h5></a> Sodales aliquid, in eget ac cupidatat velit autem numquam ullam ducimus occaecati placeat error.
                          <a href="#" className="post-link">Read More</a>
                          <ul>
                              <li>by: ${articles[i].author}</li>
                              <li className="text-right"><a href="#">${articles[i].description}</a></li>
                          </ul>${articles[i].author}
                      </div>
                  </div>
              </div>
                  `)
              }
            showArticles(articleList);
          }
        })
        
   

    console.log(articles)
   }
   
   console.log(output)
        
    return (
        // <div className='container-fluid bg-light p-0'>
        //     <Chatbot/>
        //     <Navbar></Navbar>
        //     <div style={{marginTop: '18vh', overflow: 'hidden'}}>  
        //       <blockquote className='lead text-center'>Some interesting articles relating to all sorts of biases, for your knowledge and reading.</blockquote>
        //       <div className="articles w-100">
        //         <div className='row text-center'>
        //           <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(output) }}>
        //           </div>          
        //         </div>
        //       </div>
        //       <Footer/>
        //     </div>
        // </div>
        <div className="container-fluid p-0">
          <Navbar/>
          <Chatbot/>
          <div style={{marginTop: '18vh'}}> 
             <blockquote className='lead text-center'>Some interesting articles relating to all sorts of biases, for your knowledge and reading.</blockquote>
             <div className="row" style={{}}> 
                { output.map((article) => (
                    <div key={article.id}>{article}</div>
                )) }
              {/* <div className="col-md-6">
                  <div className="media blog-media">
                      <a href="#"><img className="d-flex" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Generic placeholder image"/></a>
                      <div className="circle">
                          <h5 className="day">12</h5>
                          <span className="month">sep</span>
                      </div>
                      <div className="media-body">
                          <a href=""><h5 className="mt-0">perferendis labore</h5></a> Sodales aliquid, in eget ac cupidatat velit autem numquam ullam ducimus occaecati placeat error.
                          <a href="#" className="post-link">Read More</a>
                          <ul>
                              <li>by: Admin</li>
                              <li className="text-right"><a href="#">04 comments</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="media blog-media">
                      <a href="#"><img className="d-flex" src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="Generic placeholder image"/></a>
                      <div className="circle">
                          <h5 className="day">09</h5>
                          <span className="month">sep</span>
                      </div>
                      <div className="media-body">
                          <a href=""><h5 className="mt-0">deleniti incdunt magni</h5></a> Sodales aliquid, in eget ac cupidatat velit autem numquam ullam ducimus occaecati placeat error.
                          <a href="#" className="post-link">Read More</a>
                          <ul>
                              <li>by: Admin</li>
                              <li className="text-right"><a href="#">10 comments</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="media blog-media">
                      <a href="#"><img className="d-flex" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Generic placeholder image"/></a>
                      <div className="circle">
                          <h5 className="day">04</h5>
                          <span className="month">sep</span>
                      </div>
                      <div className="media-body">
                          <a href=""><h5 className="mt-0">Explicabo magnam </h5></a> Sodales aliquid, in eget ac cupidatat velit autem numquam ullam ducimus occaecati placeat error.
                          <a href="#" className="post-link">Read More</a>
                          <ul>
                              <li>by: Admin</li>
                              <li className="text-right"><a href="#">06 comments</a></li>
                          </ul>
                      </div>
                  </div>
              </div> */}
            </div>
          </div>
    
        <Footer/>
        </div>
    )
}

export default ArticlesPage


