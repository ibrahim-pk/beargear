// components/ReviewForm.js
import Spinner from '@/Component/Loader/Loader';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import Link from 'next/link';
const ReviewForm = ({id}) => {
  //console.log(id);
  const [loader, setLoader] = useState(false);
  
  let jwtToken;
  if (typeof window !== 'undefined') {
     jwtToken = JSON.parse(localStorage.getItem('User')) || [];
    
  }
 // console.log(jwtToken.token);
  const headers = {
    'Authorization': `Bearer ${jwtToken?.token}`
  };


  const onFinish = async(values) => {
     //console.log('Review submitted:', values);
     setLoader(true)
    const{data}=await axios.post(`https://server.beargear.com.bd/api/v1/product/add/review/${id}`,
    
       {values,jwtToken},{headers}
   )
    //console.log(data);
    setLoader(false)
    if(data.error){
      NotificationManager.error('Error message', data.error, 4000);
    }else{
      NotificationManager.success('Success message', data.msg,4000);
    }
  };

  return (
   <div>
    {
      loader&&<Spinner />
    }
    <h2 style={{marginBottom:'20px',marginTop:'20px'}}>Your Reviews</h2>
     <Form name="reviewForm" onFinish={onFinish}>
      <Form.Item
        name="review"
        rules={[
          {
            required: true,
            message: 'Please enter your review!',
          },
        ]}
      >
        
    <Input.TextArea rows={4} />
      </Form.Item>
      <Form.Item>
        {
          jwtToken?.token?<Button type="primary" htmlType="submit">
          Submit Review
        </Button>:<Link style={{
          color:'red'
        }} href="/user/login" ><h3>Login First</h3></Link>
        }
        
      </Form.Item>
    </Form>
    <NotificationContainer />
   </div>
  );
};

export default ReviewForm;
