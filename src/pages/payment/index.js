import { useEffect, useState } from 'react';
import { Form, Input, Select, Button, Card, Row, Col } from 'antd';
import RootLayout from '@/Component/Layout/RootLayout';
import axios from 'axios';
import {NotificationContainer, NotificationManager} from 'react-notifications';


const { Option } = Select;

const PaymentPage = () => {
  const [loader, setLoader] = useState(false);
  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    division: '',
    zila: '',
    thana: '',
    productReceiveLocation: '',
    paymentMethod: ''
  });

  let jwtToken;
  if (typeof window !== 'undefined') {
     jwtToken = JSON.parse(localStorage.getItem('User')) || [];
     
    
  }
 // console.log(jwtToken.token);
  const headers = {
    'Authorization': `Bearer ${jwtToken?.token}`
  };

  const total = cart.reduce((acc, item) => acc + item.newPrice*item.qtr, 0);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCart = JSON.parse(localStorage.getItem('Cart')) || [];
      setCart(storedCart);
    }
  }, []);
 
  const handleFormSubmit = async() => {
    // Handle the form submission here (e.g., send data to the server)
    console.log(formData,total,cart);
    setLoader(false)
   const{data}=await axios.post(`https://server.beargear.com.bd/api/v1/orders/add`,
   
      {formData,total,cart},{headers}
  )
   console.log(data);
   setLoader(false)
   if(data.error){
     NotificationManager.error('Error message', data.error+'Login first', 4000);
    //  setTimeout(()=>{
    //   window.location.href='/user/login'
    //   localStorage.removeItem('jwtToken')
    //  },4000)

   }else{
    localStorage.removeItem('Cart')
    window.location.href="/payment/order-msg"
   }
  };

  const handleChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  return (
   <div style={{
    padding:'20PX',
    margin:'20px 0'
   }}>
     <Row justify='center' gutter={[16, 16]}>
      <Col xs={24} sm={24} md={14} lg={14}>
        <Card title="Client Details">
          <Form >
            <Form.Item  name="name">
              <Input
                placeholder="Name"
                onChange={(e) => handleChange('name', e.target.value)}
              />
            </Form.Item>
            <Form.Item  name="phoneNumber">
              <Input
                placeholder="Phone Number"
                onChange={(e) => handleChange('phoneNumber', e.target.value)}
              />
            </Form.Item>
            <Form.Item  name="email">
              <Input
                placeholder="Email"
                onChange={(e) => handleChange('email', e.target.value)}
              />
            </Form.Item>
            <Form.Item  name="division">
              <Input
                placeholder="Division"
                onChange={(e) => handleChange('division', e.target.value)}
              />
            </Form.Item>
            <Form.Item  name="zila">
              <Input
                placeholder="Zila"
                onChange={(e) => handleChange('zila', e.target.value)}
              />
            </Form.Item>
            <Form.Item  name="thana">
              <Input
                placeholder="Thana"
                onChange={(e) => handleChange('thana', e.target.value)}
              />
            </Form.Item>
            <Form.Item  name="productReceiveLocation">
              <Input
                placeholder="Product Receive Location"
                onChange={(e) => handleChange('productReceiveLocation', e.target.value)}
              />
            </Form.Item>
          </Form>
        </Card>
      </Col>
      <Col xs={24} sm={24} md={8} lg={8}>
        <Card title="Select Payment Method">
          <h3 style={{
            marginBottom:'10px'
          }}>Total Fee:{total}Tk</h3>
          <Form onFinish={handleFormSubmit}>
            <Form.Item  name="paymentMethod">
              <Select
                placeholder="Select Payment Method"
                onChange={(value) => handleChange('paymentMethod', value)}
              >
                <Option value="cashOnDelivery">Cash on Delivery</Option>
                <Option value="bkash">bKash</Option>
                <Option value="nogod">Nogod</Option>
                <Option value="card">Card</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Make Payment
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
    <NotificationContainer />
   </div>
  );
};

export default PaymentPage;
PaymentPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};