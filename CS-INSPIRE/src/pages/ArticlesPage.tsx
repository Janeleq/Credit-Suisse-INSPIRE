import { useState, useEffect } from "react";
import Navbar from "../components/NavBarLogin.tsx";
import Footer from "../components/Footer.tsx";
import Chatbot from "../components/Chatbot.tsx";
import "../styles/_articles.css";
import background from "../assets/articlesBg.png";

const articles_api_key = import.meta.env.VITE_APP_ARTICLES_API_KEY;
console.log(import.meta.env.VITE_APP_ARTICLES_API_KEY)
const url =
`https://newsapi.org/v2/everything?q=bias&from=2023-06-19&sortBy=publishedAt&apiKey=${articles_api_key}&pageSize=25`;

  console.log(url)

const fetchArticles = async () => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  return jsonResponse.articles;
};

function ArticlesPage() {
  // useEffect runs twice if we on strictmode
  const [articles, fixArticles] = useState([]);
  const [output, showArticles] = useState("");

  // const [apiResponse, setApiResponse] = useState("***now loading***")
  const [isLoading, setLoading] = useState(true);

  function someRequest() {
    //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise((resolve) => setTimeout(() => resolve(), 2000));
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

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    fetchArticles().then((result) => fixArticles(result));
  }, []);

  useEffect(() => {
    displayArticles();
  });

  function displayArticles() {
    console.log(articles);
    console.log("trying to display articles");
    var articleList = "";
    let duplicate = [];
    for (let i = 0; i < articles.length; i++) {
      // console.log(articles[i].urlToImage)
      if (articles[i].urlToImage !== null) {
        // if no similar article found yet
        for (let y = 0; y < duplicate.length; y++) {
          if (duplicate[y] == articles[i].author) {
            return;
          }
        }
        duplicate.push(articles[i].author);
        console.log(duplicate);
        if (articles[i].author == null) {
          articles[i].author = "unknown";
        }
        console.log("setting articles list");
        articleList += `<div class="" style="display: grid; column-gap: 20px; row-gap: 20px; width: 100vw;">
                  <div class="media blog-media">
                      <a href="" style="width: 28vw; height: 30vh"><img src=${
                        articles[i].urlToImage
                      } class='' style="width: 100%; height: 100%; display: flex"/></a>
                      <div class="circle">
                          <h5 class="day"><strong></strong></h5>
                          <span class="month">${[
                            parseInt(articles[i].publishedAt.substring(8, 10)),
                          ]} ${
          months[parseInt(articles[i].publishedAt.substring(5, 7)) - 1]
        } <br/>${articles[i].publishedAt.substring(0, 4)}</span>
                      </div>
                      <div class="media-body" style="overflow: hidden">
                          <a href=""><h5 class="mt-0" style="margin-top: 0">${
                            articles[i].title
                          }</h5></a> ${articles[i].description}
                          <a href=${
                            articles[i].url
                          } target=_blank class="post-link">Read More</a>
                          <ul>
                              <li>by: ${articles[i].author}</li>
                              <li class="" style="text-align: right"><a href="#">${
                                i + 1
                              }</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
                  `;
      }

      console.log(articleList);
      showArticles(articleList);
    }
  }

  return (
    <div
      className="container-fluid p-0 bg-light"
      style={{ overflow: "hidden" }}
    >
      <Navbar />
      <Chatbot />
      <div
        style={{
          marginTop: "9vh",
          height: "55vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${background})`,
        }}
        className=""
      >
        <div className="">
          <blockquote
            className="lead text-center text-white"
            style={{ paddingTop: "200px" }}
          >
            Some interesting articles relating to all sorts of biases, for your
            knowledge and reading.
          </blockquote>
        </div>
      </div>
      <div
        className="row bg-light"
        style={{ boxShadow: "2px" }}
        dangerouslySetInnerHTML={{ __html: output }}
      ></div>
      <Footer />
    </div>
  );
}
export default ArticlesPage;
