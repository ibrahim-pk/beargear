import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Spinner from '../Loader/Loader';

const AdminRouter = ({ children }) => {
  const router = useRouter();
  const[loader,setLoader]=useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (typeof window !== 'undefined') {
          setLoader(true)
          const jwtToken = JSON.parse(localStorage.getItem('User')) || {};
          const {data}=await axios.post('http://localhost:5000/api/v1/user/verify',{
            token:jwtToken?.token
           })
           setLoader(false)
           if (!(data?.admin)) {
            router.push('/user/login');
          }else{
            return <>{children}</>;
          }

         
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Handle error if needed
        setLoader(false)
      }
    };

    fetchData();
  }, []); 

  return <>{
    loader?<Spinner />:children
  }</>;
};

export default AdminRouter;

