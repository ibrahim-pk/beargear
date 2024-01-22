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
          }}>BearGear</h3>
          <p>Joar shara bazar,Ka/152 <br /> Vatara Dhaka</p>
        </Col>
        <Col xs={10} sm={10} md={5} lg={5}>
          <h3 style={{
            color:'#FE5102',
            marginBottom:'10px'
          }}>Contact Info</h3>
         
          <p>Phone:+8801303609149</p>
          <small>Email:abunaim.beargear.bd@gmail.com</small>
          <p>Trade License:002878/2023</p>
         
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
          <p><Link href='/user/login'>Login</Link></p>
          <p><Link href='/product'>Product</Link></p>
          <p><Link href='/gallery'>Gallary</Link></p>
          <p><Link href='/wholesale'>Wholesale</Link></p>
          
          </div>
        </Col>
      </Row>
    </footer>
  );
};




export default BGFooter;