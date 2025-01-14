// components/RecentOrdersTable.js
import React from 'react';
import { Table, Button } from 'antd';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import axios from 'axios';

const RecentOrdersTable = ({ data }) => {
  const handleCancel=async(id)=>{
    const {data}=await axios.put(`http://localhost:5000/api/v1/orders/cancel/${id}`)
    //console.log(data);
    if(data.error){
      NotificationManager.error('Error message', data.error, 4000);
    }else{
      NotificationManager.success('Success message', data.msg,4000);

    }
 }
  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Order Date',
      dataIndex: 'orderDate',
      key: 'orderDate',
    },
  
    {
      title: 'Status',
      dataIndex: 'status',
      render: (text, record) => (
        record?.status===0?<h3 style={{color:'blue'}}>Pending</h3>:
        record?.status==1?<h3 style={{color:'green'}}>Processing</h3>:<h3 style={{color:'red'}}>Cancel</h3>
      ),
    },
    {
      title: 'Total Amount',
      dataIndex: 'amount',
      key: 'ammount',
    },
    
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <Button style={{
            backgroundColor:'red',
            color:'white'
          }} onClick={()=>handleCancel(record?.id)} type="default">
            Cancel
          </Button>
         
        </span>
      ),
    },
  ];

  return (
   <div style={{
    overflowX:'auto'
   }}>
       <Table
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 10 }}
      size="middle"
    />
    <NotificationContainer />
   </div>
  );
};

export default RecentOrdersTable;

