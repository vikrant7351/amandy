import React, { useState } from 'react';
import Axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const BankDetailsForm = () => {
  const [formdata, setformdata] = useState({
    accountHolderName: '',
    accountNumber: '',
    bankName: '',
    IfscCode: '',
    TransectionType: '',

  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformdata({
      ...formdata,
      [name]: value,
    });
  }


  const handlesubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await Axios.post('http://localhost:4000/api/addBanks', formdata,{
        Headers:{
          'Content-type':'application/json',
        },
      });
      console.log(typeof(response.status));

      if(response.status ===200){
        toast.success('add account sucessfully');
      }else{
        toast.error('account falied');
      }

    }catch (error){
    console.error(error);
    toast.error('an error occured');

  }
}
  
  return (
    <div className="page-containers">
      <ToastContainer />
      <div className="support-ticket-form">
        <h2>Bank Details Form</h2>
        <form onSubmit={handlesubmit} >
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
