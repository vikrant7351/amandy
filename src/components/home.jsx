import React, {useEffect, useState } from "react";
// import logo from './assets/img/user4.jpg';
import { useUser } from "./UserContext";

const Home = () => {
    const [userData] = useUser();
  const { userId } = userData;


    return (
        <body class="body-scroll theme-indigo" data-page="index">
            {/* <!-- Begin page --> */}
            <main class="h-100 theme-light-radial-gradient">

                {/* <!-- main page content --> */}
                <div class="main-container container">

                    <div class="row mb-5 top-15">
                        <div class="col-12 px-0">
                            <div class="card shadow-none rounded-0">
                                <div class="card-body pb-1 pt-3">
                                    <div class="row justify-content-between gx-0 mx-0 pb-3">
                                        <div class="col-auto text-center">
                                            <a href="pay.html" class="avatar avatar-44 p-1 rounded-15 bg-opac mb-2">
                                                <div class="icons text-default rounded-12">
                                                    <i class="bi bi-receipt-cutoff size-24"></i>
                                                </div>
                                            </a>
                                            <p class="text-secondary size-10">Pay</p>
                                        </div>

                                        <div class="col-auto text-center">
                                            <a href="sendmoney.html" class="avatar avatar-44 p-1 rounded-15 mb-2">
                                                <div class="icons text-default rounded-12">
                                                    <i class="bi bi-arrow-up-right size-24"></i>
                                                </div>
                                            </a>
                                            <p class="text-secondary size-10">Send</p>
                                        </div>

                                        <div class="col-auto text-center">
                                            <a href="receivemoney.html" class="avatar avatar-44 p-1 rounded-15 mb-2">
                                                <div class="icons text-default rounded-12">
                                                    <i class="bi bi-arrow-down-left size-24"></i>
                                                </div>
                                            </a>
                                            <p class="text-secondary size-10">Receive</p>
                                        </div>

                                        <div class="col-auto text-center">
                                            <a href="withdraw.html" class="avatar avatar-44 p-1 rounded-15 mb-2">
                                                <div class="icons text-default rounded-12">
                                                    <i class="bi bi-bank size-24"></i>
                                                </div>
                                            </a>
                                            <p class="text-secondary size-10">Withdraw</p>
                                        </div>
                                    </div>
                                    <div class="row justify-content-between gx-0 mx-0 collapse" id="collpasemorelink">
                                        <div class="col-auto text-center">
                                            <a href="bills.html" class="avatar avatar-44 p-1 rounded-15 mb-2">
                                                <div class="icons text-default rounded-12">
                                                    <i class="bi bi-tv size-24"></i>
                                                </div>
                                            </a>
                                            <p class="text-secondary size-10">TV</p>
                                        </div>

                                        <div class="col-auto text-center">
                                            <a href="addmoney.html" class="avatar avatar-44 p-1 rounded-15 mb-2">
                                                <div class="icons text-default rounded-12">
                                                    <i class="bi bi-wallet2 size-24"></i>
                                                </div>
                                            </a>
                                            <p class="text-secondary size-10">Add Money</p>
                                        </div>

                                        <div class="col-auto text-center">
                                            <a href="shop.html" class="avatar avatar-44 p-1 rounded-15 mb-2">
                                                <div class="icons text-default rounded-12">
                                                    <i class="bi bi-cart size-24"></i>
                                                </div>
                                            </a>
                                            <p class="text-secondary size-10">Buy</p>
                                        </div>

                                        <div class="col-auto text-center">
                                            <a href="rewards.html" class="avatar avatar-44 p-1 rounded-15 mb-2">
                                                <div class="icons text-default rounded-12">
                                                    <i class="bi bi-cash-coin size-24"></i>
                                                </div>
                                            </a>
                                            <p class="text-secondary size-10">Cashback</p>
                                        </div>
                                    </div>

                                    <button class="btn btn-link mt-0 py-1 w-100 bar-more collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collpasemorelink" aria-expanded="false" aria-controls="collpasemorelink">
                                        <span class="bg-secondary opacity-3"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- amount balance --> */}
                    <div class="row mb-5">
                        <div class="col-12 overflow-hidden text-center mb-4">
                            <h1 class="display-4 mb-0">$ 1,63456.00</h1>
                            <p class="text-secondary">Total Balance</p>
                            <p class="text-secondary">UserId:{userData.userId}</p>
                            <p class="text-secondary">Address:{userData.contractAddress}</p>

                        </div>
                        <div class="col-6 text-end">
                            <div class="row">
                                <div class="col pe-0">
                                    <p class="text-secondary small mb-0">Income</p>
                                    <p>1542k</p>
                                </div>
                                <div class="col-auto">
                                    <div class="avatar avatar-40 rounded-6 bg-success text-white shadow-sm shdaow-success">
                                        <i class="bi bi-arrow-down-left"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="row">
                                <div class="col-auto">
                                    <div class="avatar avatar-40 rounded-6 bg-danger text-white shadow-sm shadow-danger">
                                        <i class="bi bi-arrow-up-right"></i>
                                    </div>
                                </div>
                                <div class="col ps-0">
                                    <p class="text-secondary small mb-0">Expense</p>
                                    <p>1212k</p>
                                </div>
                            </div>
                        </div>
                    </div>


{/* 
                    {/* <!-- My Goals and Targets --> */}
                    {/* <div class="row mb-2">
                        <div class="col">
                            <h6 class="title">My Goals and Targets</h6>
                        </div>
                    </div>
                    <div class="row">



                        <div class="col-12 col-md-6 col-lg-4 mb-3">
                            <div class="card text-center overflow-hidden">
                                <div class="card-body">
                                    <div class="row">
                                    <h1><p>User ID: </p></h1>
                                    <h1>{userId}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div> */} 


                    {/* <!-- offer banner--> */}
                    <div class="row mb-4">
                        <div class="col-12 px-0">
                            <div class="card rounded-0 theme-bg overflow-hidden">
                                <div class="card-body z-index-1">
                                    <div class="row my-3">
                                        <div class="col-10 align-self-center">
                                            <h1 class="mb-3"><span class="fw-light">15% OFF</span>GiftCard</h1>
                                            <p>Thank you for spending with us, You have received Gift Card.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        

            </main>
            {/* <!-- Page ends--> */}



            {/* <!-- PWA app install toast message --> */}
            <div class="position-fixed bottom-0 start-50 translate-middle-x  z-index-99">
                <div class="toast rounded-6 mb-3 overflow-hidden" role="alert" aria-live="assertive" aria-atomic="true" id="toastinstall" data-bs-animation="true">
                    <div class="toast-header">
                        <img src="assets/img/favicon32.png" class="rounded me-2" alt="..." />
                        <strong class="me-auto">Install PWA App</strong>
                        <small>now</small>
                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div class="toast-body">
                        <div class="row">
                            <div class="col">
                                Click "Install" to install PWA app & experience indepedent.
                            </div>
                            <div class="col-auto align-self-center ps-0">

                            </div>
                        </div>
                    </div>
                    <button class="btn-default btn btn-lg rounded-0 w-100" id="addtohome">Install</button>
                </div>
            </div>
        </body>
    );
}



export default Home;

