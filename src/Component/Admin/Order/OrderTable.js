// components/RecentOrdersTable.js
import React from 'react';
import { Table, Button } from 'antd';
import Link from 'next/link';

const RecentOrdersTable = ({ data }) => {
  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Payment Method',
      dataIndex: 'paymentMethod',
      key: 'paymentMethod',
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
          <Button type="primary" icon={<i className="far fa-eye"></i>}>
           <Link href={`/bg/admin/action/single-order/${record.id}`} > View</Link>
          </Button>
          {/* <Button type="default" icon={<i className="far fa-edit"></i>}>
            Edit
          </Button> */}
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
   </div>
  );
};

export default RecentOrdersTable;
