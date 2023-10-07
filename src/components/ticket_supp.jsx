import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useUser } from './UserContext';


const SupportTicketForm = () => {
  const [userData] = useUser();
  const { userId } = userData;
  const [formdata, setformdata] = useState({
    userId: userId,
    subject: '',
    description: '',
    status: '',

  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformdata({
      ...formdata,
      [name]: value
    });
  }

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(formdata);
    let jwtToken = localStorage.getItem('userAccessToken');
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:4000/api/supporttic',
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
    <div className="page-container">

      <div className="support-ticket-form">
        <h2>Create Support Ticket</h2>
        <form onSubmit={handlesubmit}>
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
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formdata.subject}
              onChange={handleInputChange}
              required
            />
          </div>
          <ToastContainer />
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formdata.description}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="status">Status:</label>
            <select
              id="status"
              name="status"
              value={formdata.status}
              onChange={handleInputChange}
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


// import React, { createContext, useContext, useState, useEffect } from "react";
// import axios from 'axios';

// const UserContext = createContext();

// export function useUser() {
//   const context = useContext(UserContext);
//   if (!context) {
//     throw new Error("useUser must be used within a UserProvider");
//   }
//   return context;
// }

// export function UserProvider({ children }) {
//   const [userData, setUserData] = useState({}); // User data object

//   useEffect(() => {
//     // Fetch user data when the component mounts
//     fetchUserFromServer();
//   }, []);

//   const fetchUserFromServer = async () => {

//     let jwtToken = localStorage.getItem('userAccessToken');
//     let config = {
//       method: 'post',
//       maxBodyLength: Infinity,
//       url: 'http://localhost:4000/api/user-data',
//       headers: {
//         'Authorization': `Bearer ${jwtToken}`
//       },
//     };

//     await axios.request(config)
//       .then(async (response) => {
//         console.log(JSON.stringify(response.data));
//         if (response.status === 200) {
//           const data = await response.json();
//           setUserData(data);
//           setUserData(userData);
//         } else {
//           console.error('request  not insert');
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const value = [userData]; // Wrap userData in an array

//   return (
//     <UserContext.Provider value={value}>
//       {children}
//     </UserContext.Provider>
//   );
// }