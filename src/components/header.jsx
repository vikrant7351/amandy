import React from "react";

 const Header = ()=>{
  
    return(
        <header className="header position-fixed header-filled rounded-0 shadow-none">
        <div className="row">
            <div className="col-auto">
                <button type="button" className="btn btn-light btn-44 menu-btn">
                    <i className="bi bi-list"></i>
                </button>
            </div>
            <div className="col">
                <div className="logo-small">
                    <img src="assets/img/logo.png" alt="" className="shadow-none" />
                    <h5>amandy<br /><span className="text-muted fw-light">Finance</span></h5>
                </div>
            </div>
            <div className="col-auto">
                <a href="notifications.html" target="_self" className="btn btn-light btn-44">
                    <i className="bi bi-bell"></i>
                    <span className="count-indicator"></span>
                </a>
                <a href="profile.html" target="_self" className="btn btn-light btn-44 ms-2">
                    <i className="bi bi-person-circle"></i>
                </a>
            </div>
        </div>
    </header>
    );
 };


 export default Header