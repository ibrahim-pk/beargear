// components/RecentOrdersTable.js
import React from 'react';
import { Table, Button } from 'antd';
import Link from 'next/link';

const RecentOrdersTable = ({ data }) => {
  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'orderId',
      key: 'orderId',
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
      key: 'status',
    },
    {
      title: 'Total Amount',
      dataIndex: 'totalAmount',
      key: 'totalAmount',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <Button type="primary" icon={<i className="far fa-eye"></i>}>
           <Link href='/admin/action/view'> View</Link>
          </Button>
          <Button type="default" icon={<i className="far fa-edit"></i>}>
            Edit
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
   </div>
  );
};

export default RecentOrdersTable;
