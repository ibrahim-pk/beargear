import React, { useState } from 'react';
import {
  LogoutOutlined,
   InboxOutlined,
  CompassOutlined,
  ProfileOutlined,
  HeatMapOutlined,
  
} from '@ant-design/icons';
import {Layout, Menu, theme } from 'antd';
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
  getItem('Manage Account', 'sub1',<ProfileOutlined />,[
    getItem(<Link href='/profile'>My Profile</Link>, '1',),
    // getItem(<Link href='/profile/profile-address'>Address</Link>, '2',<HeatMapOutlined />),
  ]),

  // getItem(<Link href='/profile/review'>Review</Link>, '3', <CompassOutlined />),

  getItem('My Order', 'sub2', <InboxOutlined />, [
    getItem(<Link href='/profile/order/OrderData'>Orders</Link>, '5'),
    // getItem(<Link href='/profile/order/return'>Return</Link>, '6'),
    // getItem(<Link href='/profile/order/cancel'>Cancel</Link>, '7'),
    
  ])
];
const UserProfileLayout = ({children}) => {
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
         }}>Dashboard</h2>
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
            }}><Link href="/">Home</Link></h2>
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
export default UserProfileLayout;