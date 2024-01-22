// components/PrivateRoute.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Spinner from '../Loader/Loader';

const UserRouter = ({ children }) => {
  const router = useRouter();
  const [loader,setLoader]=useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true)
        if (typeof window !== 'undefined') {
          const jwtToken = JSON.parse(localStorage.getItem('User')) || {};
          setLoader(false)
          if (jwtToken?.token) {
            return <>{children}</>;
            // User is authenticated, render the children
            // You can also make an API call or perform additional checks here if needed
          } else {
            // User is not authenticated, redirect to login page
            router.push('/user/login');
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Handle error if needed
      }
    };

    fetchData();
  }, []); // Run the effect only once when the component mounts
  return <>{
    loader?<Spinner />:children
  }</>;
  
};

export default UserRouter;
