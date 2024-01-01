// components/PrivateRoute.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Spinner from '../Loader/Loader';

const AdminRouter = ({ children }) => {
  const router = useRouter();
  
  useEffect(() => {
    //  setInterval(()=>{
    //     return <Spinner />
    //  },2000)
     const jwtToken = JSON.parse(localStorage.getItem('User')) || [];
    // console.log(jwtToken?.token);
     const fetchData=async()=>{
         const {data}=await axios.post('https://server.beargear.com.bd/api/v1/user/verify',{
          token:jwtToken?.token
         })
         if (!(data?.admin)) {
          router.push('/user/login');
        }else{
          return children;
        }
        
     }
    fetchData()
    
  }, []);

  
};

export default AdminRouter;
