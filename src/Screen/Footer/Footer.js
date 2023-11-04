import React from 'react';
import { Row, Col, Typography } from 'antd';


const { Text, Link } = Typography;

const BGFooter = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px 0' }}>
      <Row justify='space-evenly' gutter={16}>
        <Col xs={10} sm={10} md={5} lg={5}>
          <h3 style={{
            color:'#FE5102',
            marginBottom:'10px'
          }}>About BearGear</h3>
          <p>Your company description goes here.</p>
        </Col>
        <Col xs={10} sm={10} md={5} lg={5}>
          <h3 style={{
            color:'#FE5102',
            marginBottom:'10px'
          }}>Contact Info</h3>
          <p>Address: 123 Main St</p>
          <p>Phone: +1 555-555-5555</p>
          <p>Email: info@beargear.com</p>
          <p>Trade License: XYZ12345</p>
          <p>BIN No: 12345678</p>
        </Col>
        <Col xs={10} sm={10} md={5} lg={5}>
          <h3 style={{
            color:'#FE5102',
            marginBottom:'10px'
          }}>Quick Links</h3>
          <div className='footerLink'>
          <p><Link>Terms & Conditions</Link></p>
          <p><Link>Return Policy</Link></p>
          <p><Link>Privacy Policy</Link></p>
          <p><Link>Blogs</Link></p>
          </div>
        </Col>
        <Col xs={10} sm={10} md={5} lg={5}>
          <h3 style={{
            color:'#FE5102',
            marginBottom:'10px'
          }}>My Account</h3>
          <div className='footerProfile'>
          <p><Link>Login</Link></p>
          <p><Link>Order History</Link></p>
          <p><Link>My Wishlist</Link></p>
          </div>
        </Col>
      </Row>
    </footer>
  );
};




export default BGFooter;