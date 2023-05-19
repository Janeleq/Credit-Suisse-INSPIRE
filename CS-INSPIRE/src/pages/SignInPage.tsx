
// import React from 'react'
import Navbar from '../components/NavBar'
import Logo from '../assets/PerceptionPause_logo.png'

function LoginPage() {
    return (
        <div className="container-fluid">
            <Navbar></Navbar>
            <div className="form-signin">
            <img className="mb-4" src={Logo} alt="logo"/>
            <h1 className="h3 mb-3 font-weight-normal">Sign in</h1><br/>
            <label for="inputEmail" className="sr-only text-muted">Email address</label>
            <input type="email" id="inputEmail" className="shadow form-control" placeholder="Email address" required="" autofocus=""/>
            <br/>
            <label for="inputPassword" className="text-muted sr-only">Password</label>
            <input type="password" id="inputPassword" className="shadow form-control" placeholder="Password" required=""/>
            <div className="checkbox mb-3">
                <label>
                <input type="checkbox" value="remember-me"/> Remember me
                </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </div>
        </div>
    )
}

export default LoginPage;