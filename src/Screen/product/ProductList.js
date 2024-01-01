import React from 'react';
import { Breadcrumb, Layout, theme,Pagination } from 'antd';
import { Button } from 'antd';
import Link from 'next/link';
import HomeProduct from '../HomeProduct';
const {Content, Footer } = Layout;
const ProductList = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const handleFeture=(data)=>{
     console.log(data)
  }
  return (
    <Layout className="layout">
      <Content
        style={{
          padding: '0 20px',
          margin:'40px 0 0 0'
        }}
      >
       
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
         <HomeProduct></HomeProduct>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
       <div style={{ textAlign: "end", marginRight: "20px" }}>
          <Link href="/product">
          <Button type="primary">
          More
        </Button>
        </Link>
        </div>
      </Footer>
    </Layout>
  );
};
export default ProductList;