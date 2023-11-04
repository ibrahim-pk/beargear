import React from 'react';
import { Button, Card } from 'antd';
import jsPDF from 'jspdf';
import AdminLayout from '@/Component/Layout/AdminLayout';


const View=()=> {
  const downloadPDF = () => {
    const doc = new jsPDF();

    // Define your data
    const orderId = '12345';
    const userName = 'John Doe';
    const phoneNumber = '555-555-5555';
    const email = 'johndoe@example.com';
    const fullAddress = '123 Main St, City, State, ZIP';
    const paymentMethod = 'Credit Card';

    const products = [
      { title: 'Product 1', price: '$20', quantity: 2 },
      { title: 'Product 2', price: '$30', quantity: 1 },
    ];

    const shippingFee = '$10';
    const totalFee = '$80'; // Calculate this based on your data

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
    products.forEach((product, index) => {
      const y = 100 + index * 20;
      doc.text(`Title: ${product.title}`, 20, y);
      doc.text(`Price: ${product.price}`, 20, y + 10);
      doc.text(`Quantity: ${product.quantity}`, 20, y + 20);
    });

    doc.text(`Shipping Fee: ${shippingFee}`, 10, 140);
    doc.text(`Total Fee: ${totalFee}`, 10, 150);

    // Save or download the PDF
    doc.save('order_summary.pdf');
  };

  return (
    <div className="App" style={{ padding: '20px' }}>
      <Card title="Order Information" style={{ width: 400 }}>
        <p>Order ID: 12345</p>
        <h3>User Information:</h3>
        <p>Name: John Doe</p>
        <p>Phone Number: 555-555-5555</p>
        <p>Email: johndoe@example.com</p>
        <p>Address: 123 Main St, City, State, ZIP</p>
        <p>Payment Method: Credit Card</p>
        <h3>Product Information:</h3>
        <p>Title: Product 1</p>
        <p>Price: $20</p>
        <p>Quantity: 2</p>
        <p>Title: Product 2</p>
        <p>Price: $30</p>
        <p>Quantity: 1</p>
        <p>Shipping Fee: $10</p>
        <p>Total Fee: $80</p>
        <Button type="primary" onClick={downloadPDF}>
          Download PDF
        </Button>
      </Card>
    </div>
  );
}

export default View;

View.getLayout = function getLayout(page) {
    return <AdminLayout>{page}</AdminLayout>;
  };