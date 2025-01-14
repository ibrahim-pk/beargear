import React, { useState } from "react";
import { Card, Form, Input, Button } from "antd";
import AdminLayout from "@/Component/Layout/AdminLayout";
import Spinner from "@/Component/Loader/Loader";
import axios from "axios";
import {NotificationContainer, NotificationManager} from 'react-notifications';

const Categories = () => {
 const [loader,setLoader]=useState(false)

  const onFinish = async(values) => {
    setLoader(true)
    const {data}=await axios.post('http://localhost:5000/api/v1/category/add',values)
    setLoader(false)
    if(data.error){
      NotificationManager.error('Error message', data.error, 4000);
    }else{
      NotificationManager.success('Success message', data.msg,4000);

    }
  };

  return (
    <div style={{ padding: "20px" }}>
     {
      loader&&<Spinner />
     }
      <Card title="Add Category" style={{ width: "100%" }}>
        <Form
          onFinish={onFinish}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
        >
          <Form.Item
            label="Category Name"
            name="categoryName"
            rules={[{ required: true, message: "Please enter a category name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Image Link"
            name="imageLink"
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Add Category
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <NotificationContainer/>
    </div>
  );
};

export default Categories;


Categories.getLayout = function getLayout(page) {
    return <AdminLayout>{page}</AdminLayout>;
};