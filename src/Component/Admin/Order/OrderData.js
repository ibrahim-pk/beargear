// pages/recent-orders.js
import React, { useEffect, useState } from 'react';
import RecentOrdersTable from './OrderTable';
import axios from 'axios';

const RecentOrdersPage = () => {
  // Sample data for demonstration
  const [order, setOrder] = useState();
  const [loader,setLoader]=useState(false)
  const [reLoader,setReLoader]=useState(false)
  let jwtToken;
  if (typeof window !== 'undefined') {
     jwtToken = JSON.parse(localStorage.getItem('User')) || [];
    
  }
 // console.log(jwtToken.token);
  const headers = {
    'Authorization': `Bearer ${jwtToken?.token}`
  };

  useEffect(()=>{
    const fetchData=async()=>{
      setLoader(true)
      const {data}=await axios.get('http://localhost:5000/api/v1/orders/get',{headers})
      setLoader(false)
      setOrder(data?.orders)
      console.log(data);
    }
    fetchData()

  },[reLoader])


 

  return (
    <div style={{ padding: '24px' }}>
      <h1>Recent Orders</h1>
      <RecentOrdersTable data={order} />
    </div>
  );
};

export default RecentOrdersPage;
