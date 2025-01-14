import React, { useEffect, useState } from 'react';
import { Button, Space, message } from 'antd';
import CategoryTable from '@/Component/Admin/Category/CategoryTable';
import Link from 'next/link';
import AdminLayout from '@/Component/Layout/AdminLayout';
import Spinner from '@/Component/Loader/Loader';
import axios from 'axios';
import {NotificationContainer, NotificationManager} from 'react-notifications';

const CategoryPage = () => {
  const [category, setCategory] = useState();
  const [loader,setLoader]=useState(false)
  const [reLoader,setReLoader]=useState(false)

  useEffect(()=>{
    const fetchData=async()=>{
      setLoader(true)
      const {data}=await axios.get('http://localhost:5000/api/v1/category/get')
      setLoader(false)
      setCategory(data)
    }
    fetchData()

  },[reLoader])

  const handleDelete = async(categoryId) => {
    const {data}=await axios.delete(`http://localhost:5000/api/v1/category/${categoryId}`)
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
      <Button type="primary"><Link href='/admin/category/add'>Add Category</Link></Button>  
      </Space>
      <CategoryTable category={category} handleDelete={handleDelete} />
      <NotificationContainer/>
    </div>
  );
};

export default CategoryPage;

CategoryPage.getLayout = function getLayout(page) {
    return <AdminLayout>{page}</AdminLayout>;
};