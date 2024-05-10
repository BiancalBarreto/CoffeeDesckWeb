import { Link, NavLink } from "react-router-dom";
import logo from './logo.png';
import '../App.css';


function NavBar() {
    return(
        <>
            <body className="bg">
                <nav className="navbar navbar-expand-lg bg">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to={'#'}>
                            <img src={logo}></img>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link font" to={"#"}>Cadastre-se</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link font" to={"#"}>Entre na sua conta</Link>
                            </li>
                            </ul>
                        </div>
                    </div>
                    <form className="d-flex" role="search">
                        <button onclick="window.location.href='#contato'" className="btn botao m-3 botaofonte">Entre em contato</button>
                    </form>
                </nav>

            </body>
        

        </>
    )
    
}

export default NavBar;
{/* <Link to="/Home" className='menu-bars' >Home</Link> */}