import React, { useEffect, useState } from 'react';
import { Button, Card } from 'antd';
import jsPDF from 'jspdf';
import AdminLayout from '@/Component/Layout/AdminLayout';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import axios from 'axios';
import { useRouter } from 'next/router';
import Spinner from '@/Component/Loader/Loader';

const View=()=> {
  const router = useRouter();
  const { viewId } = router.query;
  //console.log(viewId);
  const[order,setOrder]=useState({})
  const[loader,setLoader]=useState(false)
  useEffect(()=>{
    const fetchData=async()=>{
      let jwtToken;
      setLoader(true)
      if (typeof window !== 'undefined') {
         jwtToken = JSON.parse(localStorage.getItem('User')) || [];
        
      }
     // console.log(jwtToken?.token);
      const headers = {
        'Authorization': `Bearer ${jwtToken?.token}`
      };
      const {data} = await axios.get(`http://localhost:5000/api/v1/orders/get/order/${viewId}`,{headers});
      //console.log(data?.orders[0]);
      setOrder(data?.orders[0])
      setLoader(false)
    }

    fetchData()
  },[])



  const userInfo = JSON.parse(order?.userInfo || '{}');
const productList = JSON.parse(order?.productList || '[]');
  const downloadPDF = () => {
    const doc = new jsPDF();

    // Define your data
    const orderId = order.orderId;
    const userName = userInfo.name;
    const phoneNumber =userInfo.phoneNumber;
    const email = userInfo.phoneNumber;
    const fullAddress =`${userInfo.division}, ${userInfo.zila},${userInfo.thana} ,${userInfo.productReceiveLocation}`;
    const paymentMethod = userInfo.paymentMethod;

  

    const shippingFee = '100';
    const totalFee =parseInt(order?.amount+100); // Calculate this based on your data

    // Generate PDF content
    doc.text('Order Summary', 10, 10);
    doc.text(`Order ID: ${orderId}`, 10, 20);
    doc.text(`User Information:`, 10, 30);
    doc.text(`Name: ${userName}`, 20, 40);
    doc.text(`Phone Number: ${phoneNumber}`, 20, 50);
    doc.text(`Email: ${email}`, 20, 60);
    doc.text(`Address: ${fullAddress}`, 20, 70);
    doc.text(`Payment Method: ${paymentMethod}`, 20, 80);

    doc.text(`Product Information:`, 10, 90);
    productList.forEach((product, index) => {
      const y = 100 + index * 20;
      doc.text(`Title: ${product.title}`, 20, y);
      doc.text(`Price: ${product.newPrice}`, 20, y + 10);
      doc.text(`Quantity: ${product.qtr}`, 20, y + 20);
    });

    doc.text(`Shipping Fee: ${shippingFee}`, 10, 140);
    doc.text(`Total Fee: ${totalFee}`, 10, 150);

    // Save or download the PDF
    doc.save('order_summary.pdf');
  };

  const handleConfirm=async(id)=>{
    const {data}=await axios.put(`http://localhost:5000/api/v1/orders/confirm/${id}`)
    //console.log(data);
    if(data.error){
      NotificationManager.error('Error message', data.error, 4000);
    }else{
      NotificationManager.success('Success message', data.msg,4000);

    }
  }

  const handleCancel=async(id)=>{
    const {data}=await axios.put(`http://localhost:5000/api/v1/orders/cancel/${id}`)
   // console.log(data);
    if(data.error){
      NotificationManager.error('Error message', data.error, 4000);
    }else{
      NotificationManager.success('Success message', data.msg,4000);

    }
 }
  

  return (
    <div>
      {
        loader?<Spinner />:<div className="App" style={{ padding: '20px' }}>
     
        <Card title="Order Information" style={{ width: 400 }}>
         <NotificationContainer />
          <p>Order ID: {order.orderId}</p>
          <h3>User Information:</h3>
          <p>Name: {userInfo.name}</p>
          <p>Phone Number: {userInfo.phoneNumber}</p>
          <p>Email: {userInfo.email}</p>
          <p>Address: {userInfo.division}, {userInfo.zila},{userInfo.thana} ,{userInfo.productReceiveLocation}</p>
          <p>Payment Method:{userInfo.paymentMethod}</p>
          <h3>Product Information:</h3>
          
           {
            productList.map((item,idx)=>(
              <div key={idx}>
                <h5>Product {idx+1}</h5>
                 <p>Title:{item?.title}</p>
          <p>Price: {item?.newPrice}</p>
          <p>Quantity:{item.qtr}</p>
              </div>
            ))
           }
          <p>Shipping Fee:100Tk</p>
          <p>Total Fee: {parseInt(order?.amount+100)}</p>
          <div style={{margin:'10px 0'}}>
            {
              order.status===0||order.status===-1?<Button onClick={()=>handleConfirm(order?.id)} type="default">
              Confirm
            </Button>:<Button onClick={()=>handleCancel(order?.id)} type="default">
              Cancel
            </Button>
            }
            
          </div>
          <Button type="primary" onClick={downloadPDF}>
            Download PDF
          </Button>
        </Card>
      </div>
      }
    </div>
    
  );
}

export default View;

View.getLayout = function getLayout(page) {
    return <AdminLayout>{page}</AdminLayout>;
};


