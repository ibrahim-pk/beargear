import React, { useState } from 'react';
import AdminLayout from "@/Component/Layout/AdminLayout";
import { Form, Input, Button } from 'antd';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import axios from 'axios';
import Spinner from '@/Component/Loader/Loader';

const AddPopup = () => {
    const [loader,setLoader]=useState(false)
    const [imgUrl, setImageUrl] = useState("");
    const [loading, setLoading] = useState(false);
   
    const handleImageUpload = async (e) => {
      setLoading(true);
      const imageFile = e.target.files[0];
      const data = new FormData();
      data.append("file", imageFile);
      //your folder name
      data.append("upload_preset", "WinnerImg");
      data.append("cloud_name", "ditdynru4");
      //console.log(imageFile);
  
      try {
        const result = await axios.post(
          //aykhne [Your Cloudinary Cloud Name] baki link thik thak thakbe
          "https://api.cloudinary.com/v1_1/ditdynru4/image/upload",
          data
        );
        console.log(result?.data?.url);
        setImageUrl(result?.data?.url);
        setLoading(false);
      } catch (error) {
        alert(error);
      }
    };


  const onFinish = async(values) => {
    //console.log('Form values:', values);
    // Add your logic to handle the form submission here
    values.imageLink =imgUrl;
    setLoader(true)
    const {data}=await axios.put('http://localhost:5000/api/v1/popup/1',values)
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

      <Form.Item label="Images">
          <input type="file" onChange={handleImageUpload} className="" />
      </Form.Item>

      <Form.Item label="Category" name="category" rules={[{ required: true, message: 'Please select a category' }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Product ID" name="productId" rules={[{ required: true, message: 'Please enter a product ID' }]}>
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
      {!loading ? (
              <Button type="primary" htmlType="submit">
                Add 
              </Button>
            ) : (
              <h1>Uploading...</h1>
            )}
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