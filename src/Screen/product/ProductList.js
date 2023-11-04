import React from 'react';
import { Breadcrumb, Layout, theme,Pagination } from 'antd';
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
          <Pagination simple responsive={true} total={50} />
        </div>
      </Footer>
    </Layout>
  );
};
export default ProductList;