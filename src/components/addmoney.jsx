import React,{useState}  from "react";
import axios from "axios";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useUser } from "./UserContext";


const Addmoney = () =>{
  const [userData] = useUser();
    const { userId } = userData;
    console.log(userData.userId);


  const [formdata,setformdata]= useState({
    userId:userId,
    amount:'',
    TransectionType:'',
    
  });
  console.log(formdata);

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
          url: 'http://localhost:4000/api/addMoney',
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

    return(
        <div className="page-container">
          <ToastContainer/>
        <div className="support-ticket-form">
          <h2>Addmoney Details Form</h2>
          <form onSubmit = {handlesubmit}>

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