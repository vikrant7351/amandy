import React from "react";
import { Link } from "react-router-dom";


const Footer = () =>{
    return(
        <footer className="footer footer-squared">
        <div className="container">
            <ul className="nav nav-pills nav-justified">
                <li className="nav-item">
                    <Link className="nav-link active" to={'/Home'}> <span>
                            <i className="nav-icon bi bi-house"></i>
                            <span className="nav-text">Home</span>
                        </span></Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to={'/Status'}> <span>
                            <i className="nav-icon bi bi-house"></i>
                            <span className="nav-text">Statistics</span>
                        </span></Link>
                </li>
                <li className="nav-item square-footerbtn">
                    <a href="maketransaction.html" className="nav-link" id="centermenubtn">
                        <span className="bg-theme">
                            <i className="bi bi-grid size-22"></i>
                        </span>
                    </a>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to={'/History'}> <span>
                            <i className="nav-icon bi bi-house"></i>
                            <span className="nav-text">History</span>
                        </span></Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to={'/Wallet'}> <span>
                            <i className="nav-icon bi bi-house"></i>
                            <span className="nav-text">Wallet</span>
                        </span></Link>
                </li>
            </ul>
        </div>
    </footer>
    );
};

export default Footer;