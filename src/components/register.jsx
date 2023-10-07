import axios from 'axios';
// import { error } from 'jquery';
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';




const UserForm = () => {
  const [formdata, setformdata,] = useState({
    username: '',
    email: '',
    mobile_no: '',
    password: '',
    referralCode: '',

  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformdata({
      ...formdata,
      [name]: value,
    });
  }
 
  // Yahan, setformdata function ke andar, existing formdata object ka spread kiya gaya hai. Iska matlab hai ki jab bhi koi input field change hota hai (onChange event ke through), tab handleInputChange function call hota hai, aur isme name aur value variables se input field ka naam (name) aur uska value (value) extract kiye jaate hain. Fir, setformdata function ka istemal kia jata hai, jiske andar ...formdata ki madad se existing formdata object ka copy banaya jata hai. Lekin, ...formdata ke sath ek new property [name]: value add ki jati hai, jisse ki specific input field ka value update ho jata hai. Yani ke, spread operator ...formdata se ek naya object banaya jata hai, jismein ek specific property ([name]) ka value (value) change ho jata hai.
  
  // Iska matlab hai ki jab aap kisi input field mein kuch type karte hain, to formdata object mein sirf woh field ka value change hota hai jo aapne modify kiya hai, baaki sab properties waise hi rehti hain. Spread operator ki madad se aap object ka shallow copy create karte hain aur usmein specific changes karte hain, bina puri object ko dubara se likhna padta hai. Isse code ko concise banaya jata hai aur code maintainability improve hoti hai.

  
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(formdata);
    let jwtToken = localStorage.getItem('userAccessToken');
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:4000/api/userRegister',
      headers: {
        'Authorization': `Bearer ${jwtToken}`
      },
      data: formdata
    };

    await axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        if (response.status === 200) {
          toast.success('request submit ');
        } else {
          console.error('request  not insert');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }


  return (
    <div className="page-containers">
      <ToastContainer/>
      <div className="support-ticket-form">
        <h2>User Registration </h2>
        <form onSubmit={handlesubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formdata.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formdata.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile_no">Mobile Number:</label>
            <input
              type="tel"
              id="mobile_no"
              name="mobile_no"
              value={formdata.mobile_no}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formdata.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="referralCode">Referral Code:</label>
            <input
              type="text"
              id="referralCode"
              name="referralCode"
              value={formdata.referralCode}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}


export default UserForm;
