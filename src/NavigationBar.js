import { Link } from "react-router-dom";

const NavigationBar = () => {
    return ( 
        <>
           <nav className="navbar bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand">
                        <img src="book.jpg" alt="Search Books" width="40" height="34" className="d-inline-block align-text-top" /> Search Books
                    </span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            <Link className="nav-link" to="/history">Search History</Link>
                            <Link className="nav-link" to="/searchBook">Search a Book</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
     );
}
 
export default NavigationBar;