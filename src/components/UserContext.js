import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";


const UserContext = createContext();

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

export function UserProvider({ children }) {
  const [userData, setUserData] = useState({}); // User data object

  useEffect(() => {
    // Fetch user data when the component mounts
    fetchUserFromServer();
  }, []);

  const fetchUserFromServer = async () => {

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: 'http://localhost:4000/api/userdata',
      headers: {
        'Authorization': `Bearer ${jwtToken}`,
      }, 
    };

    const response = await axios.request(config)
      .then(async (response) => {
        console.log(JSON.stringify(response.data));
        if (response.status === 200) {
          setUserData(response.data);

        } else {
          console.error('request  not insert');
        }
      })
      .catch((error) => {
        console.log(error);
      });

  };

  const value = [userData]; // Wrap userData in an array
  console.log(value);

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}