import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useUser } from "./UserContext";
import { useNavigate } from 'react-router-dom';

const BankDetailsForm = () => {
  const [userData] = useUser();
  const { userId } = userData;
  const [formdata, setformdata] = useState({
    userId:userId,
    accountHolderName: '',
    accountNumber: '',
    bankName: '',
    IfscCode: '',
    TransectionType: '',

  });
  const navigate = useNavigate();

  const handleInputChange = (e) =>{
    const {name,value} = e.target;
    setformdata({
      ...formdata,
      [name]:value,
    });
      }
      const handlesubmit = async (e) => {
        e.preventDefault();
        console.log(formdata);
        let jwtToken = localStorage.getItem('userAccessToken');
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'http://localhost:4000/api/addBanks',
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
      <ToastContainer />
      <div className="support-ticket-form">
        <h2>Bank Details Form</h2>
        <form onSubmit={handlesubmit} >
        <div className="form-group">
              <input
                type="text"
                id="UserId"
                name="userId"
                value={formdata.userId}
                readOnly
                // onChange={handleInputChange}
                required
              />
            </div>
          <div className="form-group">
            <label htmlFor="accountHolderName">Account Holder Name:</label>
            <input
              type="text"
              id="accountHolderName"
              name="accountHolderName"
              value={formdata.accountHolderName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="accountNumber">Account Number:</label>
            <input
              type="text"
              id="accountNumber"
              name="accountNumber"
              value={formdata.accountNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="bankName">Bank Name:</label>
            <input
              type="text"
              id="bankName"
              name="bankName"
              value={formdata.bankName}
              onChange={handleInputChange}
              // onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="IfscCode">IFSC Code:</label>
            <input
              type="text"
              id="IfscCode"
              name="IfscCode"
              value={formdata.IfscCode}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="TransectionType">TransectionType:</label>
            <select
              id="TransectionType"
              name="TransectionType"
              value={formdata.TransectionType}
              onChange={handleInputChange}
            >
              <option value="Current">Current</option>
              <option value="Saving">Saving</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default BankDetailsForm;
