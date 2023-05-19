import 'bootstrap/dist/css/bootstrap.min.css'

function Footer() {
    return (
            <footer className="bg-light text-center footer-expand">
            {/* <!-- Grid container --> */}
            <div className="container p-3">
            
                {/* <!-- Section: Social media --> */}
                <section className="mb-4">
                {/* <!-- Facebook --> */}
                <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#3b5998"}} href="#!" role="button"><i className="fab fa-facebook-f"></i></a>
            
                {/* <!-- Twitter --> */}
                <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#55acee"}} href="#!" role="button"><i className="fab fa-twitter"></i></a>
            
                {/* <!-- Google --> */}
                <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#dd4b39"}} href="#!" role="button"><i className="fab fa-google"></i></a>
            
                {/* <!-- Instagram --> */}
                <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#ac2bac"}} href="#!" role="button"><i className="fab fa-instagram"></i></a>
            
                {/* <!-- Linkedin --> */}
                <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#0082ca"}} href="#!" role="button"><i className="fab fa-linkedin-in"></i></a>
                {/* <!-- Github --> */}
                <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#333333"}} href="#!" role="button"><i className="fab fa-github"></i></a>
                </section>
                {/* <!-- Section: Social media --> */}
            
            
                {/* <!-- Section: Form --> */}
                <section className="">
                <form action="">
                    {/* <!--Grid row--> */}
                    <div className="row d-flex justify-content-center">
                    {/* <!--Grid column--> */}
                    <div className="col-auto">
                        <p className="pt-2">
                        <strong>Sign up for our newsletter</strong>
                        </p>
                    </div>
                    {/* <!--Grid column--> */}
            
                    {/* <!--Grid column--> */}
                    <div className="col-md-5 col-12">
                        {/* <!-- Email input --> */}
                        <div className="form-outline mb-4">
                        <input type="email" id="form5Example2" className="form-control" />
                        <label className="form-label">Email address</label>
                        </div>
                    </div>
                    {/* <!--Grid column--> */}
            
                    {/* <!--Grid column--> */}
                    <div className="col-auto">
            
                        {/* <!-- Submit button --> */}
                        <button type="submit" className="btn btn-primary mb-4">
                        Subscribe
                        </button>
                    </div>
                    {/* <!--Grid column--> */}
                    </div>
                    {/* <!--Grid row--> */}
                </form>
                </section>
                {/* <!-- Section: Form --> */}
            
            
                {/* <!-- Section: Text --> */}
                <section className="mb-4">
                <p>
                    Look through the lens to undiscover your very own unconscious biases. 
                </p>
                </section>
                {/* <!-- Section: Text --> */}
            
            
                {/* <!-- Section: Links --> */}
                <section className="">
                {/* <!--Grid row--> */}
                <div className="row">
                    {/* <!--Grid column--> */}
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Links</h5>
            
                    <ul className="list-unstyled mb-0">
                        <li>
                        <a href="#!" className="text-dark">Link 1</a>
                        </li>
                        <li>
                        <a href="#!" className="text-dark">Link 2</a>
                        </li>
                        <li>
                        <a href="#!" className="text-dark">Link 3</a>
                        </li>
                        <li>
                        <a href="#!" className="text-dark">Link 4</a>
                        </li>
                    </ul>
                    </div>
                    {/* <!--Grid column--> */}
            
                    {/* <!--Grid column--> */}
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Links</h5>
            
                    <ul className="list-unstyled mb-0">
                        <li>
                        <a href="#!" className="text-dark">Link 1</a>
                        </li>
                        <li>
                        <a href="#!" className="text-dark">Link 2</a>
                        </li>
                        <li>
                        <a href="#!" className="text-dark">Link 3</a>
                        </li>
                        <li>
                        <a href="#!" className="text-dark">Link 4</a>
                        </li>
                    </ul>
                    </div>
                    {/* <!--Grid column--> */}
            
                    {/* <!--Grid column--> */}
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Links</h5>
            
                    <ul className="list-unstyled mb-0">
                        <li>
                        <a href="#!" className="text-dark">Link 1</a>
                        </li>
                        <li>
                        <a href="#!" className="text-dark">Link 2</a>
                        </li>
                        <li>
                        <a href="#!" className="text-dark">Link 3</a>
                        </li>
                        <li>
                        <a href="#!" className="text-dark">Link 4</a>
                        </li>
                    </ul>
                    </div>
                    {/* <!--Grid column--> */}
            
                    {/* <!--Grid column--> */}
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Links</h5>
            
                    <ul className="list-unstyled mb-0">
                        <li>
                        <a href="#!" className="text-dark">Link 1</a>
                        </li>
                        <li>
                        <a href="#!" className="text-dark">Link 2</a>
                        </li>
                        <li>
                        <a href="#!" className="text-dark">Link 3</a>
                        </li>
                        <li>
                        <a href="#!" className="text-dark">Link 4</a>
                        </li>
                    </ul>
                    </div>
                    {/* <!--Grid column--> */}
                </div>
                {/* <!--Grid row--> */}
                </section>
                {/* <!-- Section: Links --> */}
            
            </div>
            &copy;&nbsp;2023 Perception Pause. All rights reserved.
            </footer>
        
            
    )
}

export default Footer;