// pages/recent-orders.js
import React, { useEffect, useState } from 'react';

import axios from 'axios';
import RecentOrdersTable from './OrderTable';
import UserProfileLayout from '@/Component/Layout/UserProfileLayout';

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
      const {data}=await axios.get('https://server.beargear.com.bd/api/v1/orders/get/id',{headers})
      setLoader(false)
      setOrder(data?.orders)
      //console.log(data);
    }
    fetchData()

  },[reLoader])


  const data = [
    {
      key: '1',
      orderId: '12345',
      paymentMethod: 'Cash on Delivery',
      orderDate: '2023-09-28',
      status: 'Processing',
      totalAmount: '$100',
    },
    {
      key: '2',
      orderId: '54321',
      paymentMethod: 'Credit Card',
      orderDate: '2023-09-27',
      status: 'Shipped',
      totalAmount: '$150',
    },
    // Add more rows as needed
  ];

  return (
    <div style={{ padding: '24px' }}>
      <h1>Recent Orders</h1>
      <RecentOrdersTable data={order} />
    </div>
  );
};

export default RecentOrdersPage;
RecentOrdersPage.getLayout = function getLayout(page) {
  return <UserProfileLayout>{page}</UserProfileLayout>;
};