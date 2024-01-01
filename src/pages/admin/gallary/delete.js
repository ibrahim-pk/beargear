import React, { useEffect, useState } from 'react';
import { Button, Space, message } from 'antd';
import Link from 'next/link';
import AdminLayout from '@/Component/Layout/AdminLayout';
import Spinner from '@/Component/Loader/Loader';
import axios from 'axios';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import BannerTable from '@/Component/Admin/Banner/BannerTable';

const DeleteGallary = () => {
  const [banner, setBanner] = useState([]);
  const [loader,setLoader]=useState(false)
  const [reLoader,setReLoader]=useState(false)

  useEffect(()=>{
    const fetchData=async()=>{
      setLoader(true)
      const {data}=await axios.get('https://server.beargear.com.bd/api/v1/gallary/get')
      setLoader(false)
      setBanner(data)
    }
    fetchData()

  },[reLoader])

  const handleDelete = async(categoryId) => {
    const {data}=await axios.delete(`https://server.beargear.com.bd/api/v1/gallary/${categoryId}`)
    // console.log(categoryId);
    if(data.error){
      NotificationManager.error('Error message', data.error, 4000);
    }else{
      NotificationManager.success('Success message', data.msg,4000);
      setReLoader(true)

    }
  };

  return (
    <div>
      {
        loader&&<Spinner />
      }
      <Space>
      <Button type="primary"><Link href='/admin/support/add'>Add Category</Link></Button>  
      </Space>
      <BannerTable banner={banner} handleDelete={handleDelete} />
      <NotificationContainer/>
    </div>
  );
};

export default DeleteGallary;

DeleteGallary.getLayout = function getLayout(page) {
    return <AdminLayout>{page}</AdminLayout>;
};