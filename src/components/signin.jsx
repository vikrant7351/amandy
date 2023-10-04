import React, { useState } from 'react';
import { useNavigate,useLocation,Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Web3 from 'web3';
import Axios from 'axios';
// import logo from './assets/img/logo.png';
const SignInForm = () => {
    const [message, setMessage] = useState('');
    const [network, setNetwork] = useState('');
    const [userAddress, setUserAddress] = useState('');
    const [userFound, setUserFound] = useState(false);
    const navigate = useNavigate();


    const metamask = async () => {
        try {
          if (typeof window.ethereum !== 'undefined') {
            // Request accounts if not already connected
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            // console.log(accounts);
            if (accounts.length > 0) {
              // setMessage(`@Connected to MetaMask with address: ${accounts[0]}`);
              const web3 = new Web3(window.ethereum);
              // console.log(web3);
              const networkId = await web3.eth.getChainId();
              if (networkId === 1n) {
                setNetwork('Ethereum:Mainnet');
               
              console.log(networkId);
              
  
              const response = await Axios.post('http://localhost:4000/api/verify-address', { userAddress: accounts[0] });
              if (response.data.success) {
                setUserFound(true); 
                setMessage(response.data.message);
               
    
                navigate('/Home');
                alert('user login successfully');
             
              }else{
               
                setUserFound(false);
                setMessage(response.data.message);

               
              } 
    
              }else{
                alert('Please use Ethereum Mainnet.');
              }
          }
    
          } else {
            setMessage('MetaMask not installed.');
          }
        } catch (error) {
          console.error(error);
          setMessage(<p className='message' style={{color:'red'}}>Error connecting to MetaMask.</p>);
        }
      };


  return(
    
    <div className="wrapper d-flex flex-column h-100">
     <header className="header position-fixed">
      <div className="row">
        <div className="col">
          <div className="logo-small">
            <img src='./assets/img/logo.png' alt="logo" />
            <h5>Amandy<br /><span className="text-muted fw-light">Finance</span></h5>
           
          </div>
        </div>
        <div className="col-auto">
          {/* {location.pathname === '/SignInForm' ? ( */}
            <Link to = '/'> Sign up</Link>
          {/* ):( */}
            {/* <Link></Link> */}
          {/* )} */}
        </div>
        
        {/* <div className="col-auto">
          {location.pathname === '/' ? (
            <Link to = '/SignInForm'> Sign In</Link>
          ):(
            <Link ></Link>
          )} */}
        {/* </div> */}
      </div>
    </header>
    <main className="container-fluid flex-grow-1">
     
    <div className="center" style={{marginTop:'10px'}}>
    <div className="circle">
      <a className="logo">
        <img src="https://th.bing.com/th?id=OIP.FolcpM-oxqTTjXTkp132yQHaHd&w=249&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="Logo" />
      </a>
    </div>
  </div>
 

    <div className="row h-100 ">
        <div className="col-11 col-sm-11 col-md-6 col-lg-5 col-xl-3 mx-auto align-self-center py-4">
            <h2 className="mb-4 text-center"><span className="text-secondary fw-light">Sign in to</span><br />your account</h2>

            <div className="form-group form-floating is-invalid mb-3"> 
            </div>
            <p className="message" id="message" style={{ color: 'black', textAlign: 'center' }}>
            {message}
          </p>
            
            {userFound && (
          <p className="message" >Network: {network}</p> 
          )}
        </div>
       
    </div>
 
    </main>
    <footer class="footer footer-squared">
        <div className="col-12 mt-auto mx-auto">
            <div className="row ">
                <div className="col-12 d-grid px-0">
                   <button
                   type='button'
                   className='btn btn-default btn-lg rounded-0'
                   onClick={metamask}
                   ><h2>Sign In</h2> </button>
                </div>
            </div>
        </div>
        </footer>
        </div>
    
     
  );


};
export default SignInForm;