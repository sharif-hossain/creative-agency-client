import React, { useContext } from 'react';
import './Navbar.css'
import logo from '../../../images/logos/logo.png'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    return (
        <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand" href="/"><img style={{height:'50px'}} src={logo} alt=""/></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
            <a className="nav-link mr-3" href="/">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
            <a className="nav-link mr-3" href="/">Our Portfolio</a>
        </li>
        <li className="nav-item">
            <a className="nav-link mr-3" href="/">Our Team</a>
        </li>
        
        <li className="nav-item">
            <a className="nav-link mr-3" href="/">Contact Us</a>
        </li>
    </ul>
    {
        loggedInUser.name ?
            <button style={{ width: '134px', backgroundColor: '#111430' }} className="btn text-white">{loggedInUser.name}</button>
            : <Link className="nav-link mr-5" to="/login"><button style={{ width: '134px', backgroundColor: '#111430' }} className="btn text-white">Login</button></Link>
    }
</div>
</nav>
        </div>
    );
};

export default Navbar;