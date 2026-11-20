//Import
import "./NavBar.css"


//Logic section
function Navbar(){
    return(
        <nav className="navbar navbar-expanded-lg bg-dark" data-bs-theme>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Online Store</a>
                
                <button
                
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link" href="/"></a>Home</li>
                        <li className="nav-item"><a className="nav-link" href="catalog">Catalog</a></li>
                        <li className="nav-item"><a className="nav-link" href="about"></a>About</li>
                        <li className="nav-item"><a className="nav-link" href="contact"></a>Contact</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

//export section
export default Navbar;
