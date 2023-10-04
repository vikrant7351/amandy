import  Axios  from 'axios';
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


const  SupportTicketForm = () => {

  const [formdata ,setformdata] = useState({
    subject: '',
    description: '',
    status: '',

  })

  const handleInputChange = (e) =>{
const {name,value} = e.target;
setformdata({
  ...formdata,
  [name]:value,
});
  }

  const handlesubmit = async(e) =>{
    e.preventDefault();
    console.log(formdata);

      try{
        const response = await Axios.post('http://localhost:4000/api/supporttic', formdata,{
          Headers:{
            'Content-type':'application/json',
          },
        });
        console.log(typeof(response.status));

        if(response.status ===200){
  
          
          toast.success('request submit ');
        }else{
          console.error('request  not insert');
        }

      }catch (error){
      console.error(error);
      toast.error('an error occured');

    }
  // }
  }

    return (
        <div className="page-container">
        
      <div className="support-ticket-form">
        <h2>Create Support Ticket</h2>
        <form onSubmit={handlesubmit}>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value = {formdata.subject}
              onChange ={handleInputChange}
              required
            />
          </div>
          <ToastContainer/>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formdata.description}
              onChange = {handleInputChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="status">Status:</label>
            <select
              id="status"
              name="status"
              value = {formdata.status}
              onChange = {handleInputChange}
            >
              <option value="open">Open</option>
              <option value="closed">Closed</option>
              <option value="pending">Pending</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      </div>
    );
  }


export default SupportTicketForm;
