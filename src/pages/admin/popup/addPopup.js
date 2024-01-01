import React, { useState } from 'react';
import AdminLayout from "@/Component/Layout/AdminLayout";
import { Form, Input, Button } from 'antd';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import axios from 'axios';
import Spinner from '@/Component/Loader/Loader';

const AddPopup = () => {
    const [loader,setLoader]=useState(false)

  const onFinish = async(values) => {
    //console.log('Form values:', values);
    // Add your logic to handle the form submission here
    setLoader(true)
    const {data}=await axios.put('https://server.beargear.com.bd/api/v1/popup/1',values)
    setLoader(false)
    if(data.error){
      NotificationManager.error('Error message', data.error, 4000);
    }else{
      NotificationManager.success('Success message', data.msg,4000);

    }
  };

  return (
   <div>
    <div>
        {
            loader&&<Spinner />
        }
    </div>
      <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
      initialValues={{ category: 'Default Category' }}
    >
      <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please enter a title' }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Image Link" name="imageLink" rules={[{ required: true, message: 'Please enter an image link' }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Category" name="category" rules={[{ required: true, message: 'Please select a category' }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Product ID" name="productId" rules={[{ required: true, message: 'Please enter a product ID' }]}>
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    <NotificationContainer />
   </div>
  );
};


export default AddPopup;

AddPopup.getLayout = function getLayout(page) {
    return <AdminLayout>{page}</AdminLayout>;
  };