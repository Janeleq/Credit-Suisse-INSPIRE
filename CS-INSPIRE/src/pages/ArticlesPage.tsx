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
    const [output, showArticles] = useState("");
    const [status, setStatus] = useState(false)
    const url = 'https://newsapi.org/v2/everything?' +
    'q=bias&' +
    'from=2023-05-28&' +
    'sortBy=publishedAt&' +
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


    if (status == false) {
        setStatus(true)
     }

    useEffect(() => {
        if (status == true) {
            console.log("Reached useEffect..")
        fetchArticles() 
        setStatus(false) }
    }, [])
 



    // if (status == true) {

    // }
   const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
   
   async function fetchArticles() {
    console.log("I am inside axios!")
    let articleList = [];
    const response = await axios.get(url);
    fixArticles(response.data.articles)

    for(let i=0; i<articles.length; i++) {
        // console.log(articles[i].urlToImage)
        if (articles[i].urlToImage !== null)
        {
          if (articles[i].author == null) {
              articles[i].author = "unknown"
          }
            articleList += 
            `<div class="" style="display: grid; column-gap: 20px; row-gap: 20px; width: 100vw;">
            <div class="media blog-media">
                <a href="#" style="width: 15vw; height: 30vh"><img src=${articles[i].urlToImage} class='' style="width: 100%; height: 100%; display: flex"/></a>
                <div class="circle">
                    <h5 class="day"><strong></strong></h5>
                    <span class="month">${[parseInt(articles[i].publishedAt.substring(8,10))]} ${months[parseInt(articles[i].publishedAt.substring(5,7))-1]} <br/>${articles[i].publishedAt.substring(0,4)}</span>
                </div>
                <div class="media-body" style="overflow: hidden">
                    <a href=""><h5 class="mt-0" style="margin-top: 0">${articles[i].title}</h5></a> ${articles[i].description}
                    <a href="#" class="post-link">Read More</a>
                    <ul>
                        <li>by: ${articles[i].author}</li>
                        <li class="" style="text-align: right"><a href="#">2</a></li>
                    </ul>
                </div>
            </div>
        </div>
            `
        }
      
    }
    console.log("I am outside axios!")
    showArticles(articleList);  
   }
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
          <div style={{marginTop: '18vh'}} className=''> 
             <blockquote className='lead text-center'>Some interesting articles relating to all sorts of biases, for your knowledge and reading.</blockquote>
             <div className="row mb-3" style={{boxShadow: '2px', overflow: 'hidden'}} dangerouslySetInnerHTML={{__html: output}}/> 
              
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
              </div>  */}
            </div>
        <Footer/>
        </div>
    )
}

export default ArticlesPage


