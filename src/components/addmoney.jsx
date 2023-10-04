import React,{useState}  from "react";
import Axios from "axios";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


const Addmoney = () =>{
  const [formdata,setformdata]= useState({
    amount:'',
    TransectionType:'',

  });

  const handleInputChange = (e) =>{
    const {name,value} = e.target;
    setformdata({
      ...formdata,
      [name]:value,
    });
      }

  const handlesubmit = async(e) =>{
    e.preventDefault();


    try{
      const response = await Axios.post('http://localhost:4000/api/addMoney' ,formdata,{
        Headers:{
          'Content-type':'application/json',
        },
      });
      console.log(typeof(response.status));

      if(response.status ===200){
        toast.success('add money sucessfully ');
      }else{
        console.error('request  not insert');
      }

    }catch (error){
    console.error(error);
    toast.error('an error occured');

  }
}


    return(
        <div className="page-container">
          <ToastContainer/>
        <div className="support-ticket-form">
          <h2>Addmoney Details Form</h2>
          <form onSubmit = {handlesubmit}>
            <div className="form-group">
              <label htmlFor="Amount">Amount:</label>
              <input
                type="text"
                id="amount"
                name="amount"
                value={formdata.amount}
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
              <option value="deposit">deposit'</option>
              <option value="withdrawal">withdrawal</option>
            </select>
          </div>
            
            <button type="submit">Submit</button>
          </form>
        </div>
        </div>
    );
}
export default Addmoney;