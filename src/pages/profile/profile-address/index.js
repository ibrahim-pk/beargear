// pages/UserProfile.js
import UserProfileLayout from "@/Component/Layout/UserProfileLayout";
import Spinner from "@/Component/Loader/Loader";

import { Card, Form, Input, Button, Avatar, Col, Row } from 'antd';
import axios from "axios";
import { useEffect, useState } from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const profileAddress = () => {
  const [loader, setLoader] = useState(false);
  const [form] = Form.useForm(); // Use Form instance for better control

  const [initialValues, setInitialValues] = useState({
    name: "",
    phone: "",
    email: "",
    id:""
    
  });

  const onFinish = async(values) => {
    //console.log('Received values:', values);
    setLoader(true)
    const {data}=await axios.put(`http://localhost:5000/api/v1/user/update/${initialValues?.id}`,values)
    console.log(data);
    if (data.error) {
      NotificationManager.error("Error message", data.error, 4000);
      setLoader(false)
    } else {
      NotificationManager.success("Success message", data.msg, 4000);
      //console.log(data);
      setLoader(false)
    }
    
  };

  useEffect(() => {
    const jwtToken = JSON.parse(localStorage.getItem('User')) || [];

    const fetchData = async () => {
      try {
        setLoader(true)
        const { data } = await axios.post('http://localhost:5000/api/v1/user/verify', {
          token: jwtToken?.token,
        });
     console.log(data);
        if (data) {
          
          setInitialValues({
            name: data?.info?.name,
            phone: data?.info?.phone,
            email: data?.info?.email,
            id:data?.info?.id,
          });

          // Set form values
          form.setFieldsValue({
            name: data?.info?.name,
            phone: data?.info?.phone,
            email: data?.info?.email,
          });
          setLoader(false)
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoader(false)
      }
    };

    fetchData();
  }, [form]);

  return (

    <div>
      <div>
        {
          loader&&<Spinner />
        }
      </div>
      <Card title="User Profile" style={{ width: '100%' }}>
      <Row gutter={16}>
        {/* First Column - User Profile Avatar */}
        <Col xs={24} sm={12} md={8} lg={6}>
          <Avatar size={128} icon={initialValues?.name} />
        </Col>

        {/* Second Column - Form */}
        <Col xs={24} sm={12} md={16} lg={18}>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={initialValues}
            
          >
            <Form.Item name="name" label="Name">
              <Input />
            </Form.Item>

            <Form.Item name="phone" label="Phone">
              <Input />
            </Form.Item>

            <Form.Item name="email" label="Email">
              <Input />
            </Form.Item>

           

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save Changes
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Card>
    <NotificationContainer />
    </div>
  );
};

export default profileAddress;

profileAddress.getLayout = function getLayout(page) {
  return <UserProfileLayout>{page}</UserProfileLayout>;
};
