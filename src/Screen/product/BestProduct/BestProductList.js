import React from 'react';
import { Layout, theme } from 'antd';
import BestProduct from './BestProduct';
const {Content} = Layout;
const BestProductList = () => {
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
        }}
      >
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
         <BestProduct />
        </div>
      </Content>
      
    </Layout>
  );
};
export default BestProductList;