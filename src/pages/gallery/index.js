import React from 'react';
import { Card, Row, Col, Image } from 'antd';
import RootLayout from '@/Component/Layout/RootLayout';

const { Meta } = Card;

const fakeProducts = [
  {
    id: 1,
    name: 'Product 1',
    image: '/image/bugpack.png',
  },
  {
    id: 2,
    name: 'Product 2',
    image: '/image/bugpack.png',
  },
  // Add more fake product data here for a total of 20 items
];

const ProductGallery = () => {
  return (
  <div style={{margin:'20px 0 20px 0',height:'100vh'}}>
    <Row justify='center' gutter={[16, 16]}>
      {fakeProducts.map((product) => (
        <Col key={product.id} xs={11} sm={11} md={7} lg={5}>
          <Card
            hoverable
            cover={<Image  alt={product.name} src={product.image}  height="auto"
            width="100%" />}
          >
            <Meta title={product.name} />
          </Card>
        </Col>
      ))}
    </Row>
  </div>
  );
};

export default ProductGallery;

ProductGallery.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };
