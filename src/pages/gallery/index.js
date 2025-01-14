import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Image } from 'antd';
import RootLayout from '@/Component/Layout/RootLayout';
import Spinner from '@/Component/Loader/Loader';
import axios from 'axios';

const { Meta } = Card;



const ProductGallery = () => {
  const [banner, setBanner] = useState([]);
  const [loader,setLoader]=useState(false)
  const [reLoader,setReLoader]=useState(false)

  useEffect(()=>{
    const fetchData=async()=>{
      setLoader(true)
      const {data}=await axios.get('http://localhost:5000/api/v1/gallary/get')
      setLoader(false)
      setBanner(data)
    }
    fetchData()

  },[reLoader])
  return (
    <div>
      {
        loader&&<Spinner />
      }
       <div style={{margin:'20px 0 20px 0',height:'100vh'}}>
    <Row justify='center' gutter={[16, 16]}>
      {banner.length>0&&banner.map((product) => (
        <Col key={product.id} xs={11} sm={11} md={7} lg={5}>
          <Card
            hoverable
            cover={<Image  
              alt={product?.title} 
              src={product?.imageLink}
              height="auto"
            width="100%" />}
          >
            <Meta title={product.title} />
          </Card>
        </Col>
      ))}
    </Row>
  </div>
    </div>
 
  );
};

export default ProductGallery;

ProductGallery.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };
