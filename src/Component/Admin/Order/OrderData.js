// pages/recent-orders.js
import React from 'react';
import RecentOrdersTable from './OrderTable';

const RecentOrdersPage = () => {
  // Sample data for demonstration
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
      <RecentOrdersTable data={data} />
    </div>
  );
};

export default RecentOrdersPage;
