import React, { useState } from 'react';
import {
  AppstoreOutlined,
  LogoutOutlined,
  DashboardOutlined,
  ShoppingCartOutlined,
   InboxOutlined,
  CompassOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Link from 'next/link';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<Link href='/admin'>Dashboard</Link>, '1', <DashboardOutlined />),
  getItem(<Link href='/admin/brand'>Brand</Link>, '2', <CompassOutlined />),
  getItem('Product', 'sub1', <InboxOutlined />, [
    getItem(<Link href='/admin/product/product-list'>Product List</Link>, '3'),
    getItem(<Link href='/admin/product/add-product'>Add</Link>, '4'),
    
  ]),
  getItem('Category', 'sub2', <AppstoreOutlined />, [
    getItem(<Link href='/admin/category/add'>Add</Link>, '6'),
    getItem(<Link href='/admin/category/delete'>Delete</Link>, '8'),
  ]),
  getItem('Order', 'sub3', <ShoppingCartOutlined />, [
     getItem('All Order', '9'),
     getItem('Review', '10')
  ]),
];
const AdminLayout = ({children}) => {
  const handleLogout=()=>{
    console.log('logout')
  }
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
         <h2 style={{
          textAlign:'center',
          color:'white',
          margin:'10px 0'
         }}>Bg Admin</h2>
         <hr style={{
          marginBottom:'10px'
         }} />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
      <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div style={{margin:'0 10px'}}>
            <h2 style={{
              cursor:'pointer'
            }} onClick={handleLogout}>Logout <span style={{margin:'0 2px'}}><LogoutOutlined /></span></h2>
        </div>
          </Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          
          <div
            style={{
              padding: 10,
              minHeight:'100vh',
              background: colorBgContainer,
            }}
          >
           {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          BearGear ©2023 
        </Footer>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;