import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import './components/Footer.tsx'
import NavBar from './components/NavBar.tsx'
import Footer from './components/Footer.tsx'
import Chatbot from './components/Chatbot.tsx'
import HomePage from './pages/Homepage.tsx';
import React, {Component} from 'react';


// export default class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       user: {}
//     }
//   }

//   // componentDidMount(): {
    
//   // }
// }
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='container-fluid m-0'>   
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        
        <HomePage/>
        <Chatbot/>
        <Footer/>
      </div>
    </>
  )
}

export default App
