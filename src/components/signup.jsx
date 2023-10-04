 import React, { useState } from 'react';
 import { useEffect } from 'react';
 import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
 import { toast } from 'react-toastify';
  import {  Link,useLocation } from 'react-router-dom';
  // import logo from './assets/img/logo.png';
 import Web3 from 'web3';



 const SignUpForm = () => {
   const [referralCode, setReferralCode] = useState('');
   const [message, setMessage] = useState('');

   useEffect(() => {
      // Check if MetaMask is installed and connected
     if (window.ethereum) {
       window.web3 = new Web3(window.ethereum);

        // Check if the user is logged in to MetaMask
       window.ethereum
         .request({ method: 'eth_accounts' })
         .then((accounts) => {
           if (accounts.length > 0) {
              setMessage(`Connected to MetaMask with address: ${accounts[0]}`);
           }
         })
         .catch((error) => {
           console.error(error);
         });
     } else {
       setMessage('metamask not install');
     }
   }, []);


   const metamask = async () => {
     try {
       const response = await fetch('http://localhost:4000/api/check-referral', {
         method: 'post',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({ referralCode }),
       });
       const data = await response.json();

       if (data.success) {
         if (window.ethereum) {
            // Request MetaMask connection
          
           const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
           const userAddress = accounts[0];
           const web3 = new Web3(window.ethereum);
           const networkId = await web3.eth.getChainId();

           if(networkId === 1n){
       
           const serverResponse = await fetch('http://localhost:4000/api/store-address', {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify({ referralCode,userAddress }),
         });
         const serverData = await serverResponse.json();
         if (serverData.success){
           setMessage('Connected to MetaMask.');
         } else {
           setMessage(<p className='message' style={{color:'green'}}>'you are already singin.'</p>);
         }
          // Referral code is valid, connect the wallet here
         toast.success('Wallet connected successfully');
        //  toast.success(`${data.message}`);
         document.getElementById("username").classList.add('is-valid');
         document.getElementById("username").classList.remove('is-invalid');
       }else{
         alert('Please use Ethereum Mainnet.');
       }
        setMessage('Wallet connected successfully');
         }  
     } else {
          // Invalid referral code, display an error message
          setMessage(data.message);
         toast.error(`${data.message}`);
         document.getElementById("username").classList.remove('is-valid');
         document.getElementById("username").classList.add('is-invalid');
       }
     } catch (error) {
       console.error(error);
       setMessage(<p className="message" style={{ color: 'red' }}>Error connecting to the server</p>);

     
     }
   };
   
 

   return (
    
    <div className="wrapper d-flex flex-column h-100">
        <header className="header position-fixed">
      <div className="row">
        <div className="col">
          <div className="logo-small">
            <img src='./assets/img/logo.png' alt="logo" />
            <h5>Amandy<br /><span className="text-muted fw-light">Finance</span></h5>
           
          </div>
        </div>
        {/* <div className="col-auto">
          {location.pathname === '/SignInForm' ? (
            <Link to = '/'> Sign up</Link>
          ):(
            <Link></Link>
          )}
        </div> */}
        
        <div className="col-auto">
          {/* {location.pathname === '/' ? (  */}
            <Link to = '/SignInForm'> Sign In</Link>
        {/* //    ):(  */}
        {/* //     <Link ></Link> */}
        {/* //    )} */}
          </div>
       
      </div>
    </header>
    <main class="container-fluid h-100">
      <ToastContainer/>
    <div class="row h-100">
      <div className='fixed'>
      
        <div class="col-11 col-sm-11 col-md-6 col-lg-5 col-xl-3 mx-auto align-self-center py-4">
            <h2 class="text-center mb-4"><span class="text-secondary fw-light">Create</span><br />new account</h2>
           
          
            <div class="form-floating mb-3">
                <input type="text" class="form-control" value= {referralCode} 
                onChange={(e) => setReferralCode(e.target.value)} placeholder="Username" id="username"/>
                <label for="username">Referal</label>
            </div>
            
            
            <p class="text-center mb-3"><span class="text-muted">By clicking on Sign up button, you are agree to the our </span>
                <a href="#">Terms and Conditions</a>
            </p>
        </div>

</div>

        </div>
   
</main>
 <footer class="footer footer-squared">
 <div class="row">
     <div class="col-12 d-grid px-0">
     <button type='button'  className="btn btn-default btn-lg rounded-0" onClick={metamask}><h2>Sign Up</h2></button>
      </div>
</div>
</footer>
</div>

   );
 };

 export default SignUpForm ;



  
    