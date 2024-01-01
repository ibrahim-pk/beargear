import RootLayout from '@/Component/Layout/RootLayout';
import { Card, Form, Input, Button, Radio,Row,Col } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import Link from "next/link";
const Register = () => {
  const [loader,setLoader]=useState(false)

  const onFinish = async(values) => {
    // Handle form submission here
    setLoader(true)
    const {data}=await axios.post('https://server.beargear.com.bd/api/v1/user/register',values)
    setLoader(false)
    if(data.error){
      NotificationManager.error('Error message', data.error, 4000);
    }else{
      NotificationManager.success('Success message', data.msg,4000);
      //console.log(data);
      localStorage.setItem('User',JSON.stringify({token:data.token}))
      setInterval(()=>{
        window.location.href='/'
      },2000)

    }
  };

  return (
    <div style={{
      marginBottom:'20px'
    }}>
      <Row justify='center' align='middle'>
         <Col sm={20} md={10} lg={10}>
         <img width='100%' height='auto' src="/image/register.png" alt="" />
         </Col>
         <Col sm={20} md={10} lg={10}>
         
         <Card title="Registration Form" style={{ width: 300 }}>
      <Form
        name="registration"
        onFinish={onFinish}
        initialValues={{ gender: 'male' }}
      >
        <Form.Item
          name="fullName"
          rules={[{ required: true, message: 'Please enter your full name' }]}
        >
          <Input placeholder="Full Name" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email address' },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please enter your password' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item
          name="phoneNumber"
          rules={[
            { required: true, message: 'Please enter your phone number' },
            {
              pattern: /^[0-9]*$/,
              message: 'Please enter a valid phone number',
            },
          ]}
        >
          <Input placeholder="Phone Number" />
        </Form.Item>

        <Form.Item name="gender">
          <Radio.Group>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item>
          <Button style={{
            marginBottom:'10px'
          }} type="primary" htmlType="submit">
            Register
          </Button>
          <br />
          Or <Link href="/user/login">Login now!</Link>
        </Form.Item>
      </Form>
       </Card>
         </Col>
      </Row>
      <NotificationContainer />
    </div>
  );
};




export default Register;

Register.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
