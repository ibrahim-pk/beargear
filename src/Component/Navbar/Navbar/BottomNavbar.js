import React from 'react';
import { Menu } from 'antd';
import {
  HomeOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  LoginOutlined,
  FileImageOutlined,
  ProjectOutlined
  
} from '@ant-design/icons';

const BottomNavbar = () => {
  return (
    <div className='bottomNavbar'>
        <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['home1']}
      style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 100 ,display:'flex' ,justifyContent:'space-evenly'}}
    >
      <Menu.Item key="home1" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="cart1" icon={<ShoppingCartOutlined />}>
        Cart
      </Menu.Item>
      <Menu.Item key="login1" icon={<LoginOutlined />}>
        Login
      </Menu.Item>
      <Menu.Item key="product1" icon={<ProjectOutlined />}>
        Product
      </Menu.Item>
      <Menu.Item key="gallery1" icon={<FileImageOutlined />}>
        Gallery
      </Menu.Item>
      <Menu.Item key="profile1" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
    </Menu>
    </div>
  );
};

export default BottomNavbar;
