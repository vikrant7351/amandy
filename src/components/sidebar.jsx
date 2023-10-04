import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () =>{

    return(
        <div class="sidebar-wrap  sidebar-overlay square-sidebar">
        <div class="closemenu text-secondary">Close Menu</div>
        <div class="sidebar ">
            {/* <!-- user information --> */}
            <div class="row">
                <div class="col-12 profile-sidebar mb-0">
                    <div class="row">
                        <div class="col-auto">
                            <figure class="avatar avatar-110 rounded-0 shadow-sm p-0 bg-white">
                                <img src='./assets/img/user4.jpg' alt="" class="rounded-0" />
                            </figure>
                        </div>
                        <div class="col px-0 align-self-center">
                            <h5 class="mb-2">John Winsels</h5>
                            <p class="text-muted size-12">New York City,<br />United States</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- user emnu navigation --> */}
            <div class="row mx-0">
                <div class="col-12 px-0">
                    <ul class="nav nav-pills">



                    <li class="nav-item">
                            <Link to={'/Home'}  class="nav-link" aria-current="page">
                                <div class="avatar avatar-40 icon"><i class="bi bi-house-door"></i></div>
                                <div class="col">Home</div>
                                <div class="arrow"><i class="bi bi-chevron-right"></i></div>
                           </Link>
                        </li>

                        <li class="nav-item">
                            <Link to={'/UserForm'}  class="nav-link" aria-current="page">
                                <div class="avatar avatar-40 icon"><i class="bi bi-house-door"></i></div>
                                <div class="col">Register</div>
                                <div class="arrow"><i class="bi bi-chevron-right"></i></div>
                           </Link>
                        </li>

                       
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                                <div class="avatar avatar-40 icon"><i class="bi bi-cash-stack"></i></div>
                                <div class="col">Finance</div>
                                <div class="arrow"><i class="bi bi-chevron-down plus"></i> <i class="bi bi-chevron-up minus"></i>
                                </div>
                            </a>
                            <ul class="dropdown-menu">
                          
                            <li class="nav-item">
                            <Link to={'/SupportTicketForm'}  class="nav-link" aria-current="page">
                                <div class="avatar avatar-40 icon"><i class="bi bi-house-door"></i></div>
                                <div class="col">Support</div>
                                <div class="arrow"><i class="bi bi-chevron-right"></i></div>
                           </Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/BankDetailsForm'}  class="nav-link" aria-current="page">
                                <div class="avatar avatar-40 icon"><i class="bi bi-house-door"></i></div>
                                <div class="col">AddBank</div>
                                <div class="arrow"><i class="bi bi-chevron-right"></i></div>
                           </Link>
                        </li>

                        <li class="nav-item">
                            <Link to={'/Addmoney'}  class="nav-link" aria-current="page">
                                <div class="avatar avatar-40 icon"><i class="bi bi-house-door"></i></div>
                                <div class="col">AddMoney</div>
                                <div class="arrow"><i class="bi bi-chevron-right"></i></div>
                           </Link>
                        </li>

                            </ul>
                        </li>
                       
                    

                        <li class="nav-item">
                            <a class="nav-link" href="notifications.html" tabindex="-1">
                                <div class="avatar avatar-40 icon"><i class="bi bi-bell"></i></div>
                                <div class="col">Notification</div>
                                <div class="arrow"><i class="bi bi-chevron-right"></i></div>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="blog.html" tabindex="-1">
                                <div class="avatar avatar-40 icon"><i class="bi bi-newspaper"></i></div>
                                <div class="col">Blogs</div>
                                <div class="arrow"><i class="bi bi-chevron-right"></i></div>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="pages.html" tabindex="-1">
                                <div class="avatar avatar-40 icon"><i class="bi bi-file-earmark-text"></i></div>
                                <div class="col">Pages <span class="badge bg-info fw-light">new</span></div>
                                <div class="arrow"><i class="bi bi-chevron-right"></i></div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="signin.html" tabindex="-1">
                                <div class="avatar avatar-40 icon"><i class="bi bi-box-arrow-right"></i></div>
                                <div class="col">Logout</div>
                                <div class="arrow"><i class="bi bi-chevron-right"></i></div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
};


export default Sidebar;

