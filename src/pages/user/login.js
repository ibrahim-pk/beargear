import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Form, Image, Input } from "antd";
import Link from "next/link";
import RootLayout from "@/Component/Layout/RootLayout";
import { Col, Row } from "antd";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import axios from "axios";

const Login = () => {
  const [loader,setLoader]=useState(false)
  const onFinish = async(values) => {
       // Handle form submission here
    setLoader(true)
    const {data}=await axios.post('http://localhost:5000/api/v1/user/login',values)
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
    <div className="login-container">
      <Row justify="center" align='middle'>
        <Col sm={20} md={10} lg={10}>
          <img width='100%' height='auto' src="/image/login.png" alt="" />
        </Col>
        <Col sm={20} md={10} lg={10}>
        
      <Card title="Login Form" style={{ width: 300 }}>
      <Form
        name="registration"
        onFinish={onFinish}
        initialValues={{ gender: 'male' }}
      >
         <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Emali or Phone"
            />
          </Form.Item>
          
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <div>
                <a className="login-form-forgot" href="">
                  Forgot password
                </a>
              </div>
            </div>
          </Form.Item>

          <Form.Item>
            <Button
              style={{ width: "100%", marginBottom: "15px" }}
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            <br />
            Or <Link href="/user/register">register now!</Link>
          </Form.Item>
        


      </Form>
       </Card>














        </Col>
      </Row>
      <NotificationContainer />
    </div>
  );
};

export default Login;

Login.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
