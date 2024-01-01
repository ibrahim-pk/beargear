// pages/admin.js
import React from 'react';
import { Row, Col } from 'antd';
import {
  ShoppingCartOutlined,
  Loading3QuartersOutlined,
  CloseCircleOutlined,
  TeamOutlined,
  AppstoreAddOutlined,
  DollarOutlined,
  
} from '@ant-design/icons';
import DashboardCard from '@/Component/Admin/Dashboard';
import AdminLayout from '@/Component/Layout/AdminLayout';
import RecentOrdersPage from '@/Component/Admin/Order/OrderData';
import AdminRouter from '@/Component/PrivateRouter/AdminRouter';


const AdminPage = () => {
  return (
    <AdminRouter>
    <div style={{ padding: '24px' }}>
        
      <Row gutter={[10,10]}>
        <Col sm={12} md={8} lg={8}>
          <DashboardCard
            title="Order Pending"
            value={10}
            icon={<ShoppingCartOutlined />}
            color="rgb(66, 134, 244)"
          />
        </Col>
        <Col sm={12} md={8} lg={8}>
          <DashboardCard
            title="Order Processing"
            value={15}
            icon={<Loading3QuartersOutlined />}
            color="rgb(52, 168, 83)"
          />
        </Col>
        <Col sm={12} md={8} lg={8}>
          <DashboardCard
            title="Order Cancelled"
            value={5}
            icon={<CloseCircleOutlined />}
            color="rgb(234, 67, 53)"
          />
        </Col>
        <Col sm={12} md={8} lg={8}>
          <DashboardCard
            title="Total Customers"
            value={100}
            icon={<TeamOutlined />}
            color="rgb(251, 140, 0)"
          />
        </Col>
        <Col sm={12} md={8} lg={8}>
          <DashboardCard
            title="Total Products"
            value={500}
            icon={<AppstoreAddOutlined />}
            color="rgb(0, 174, 239)"
          />
        </Col>
        <Col sm={12} md={8} lg={8}>
          <DashboardCard
            title="Total Income"
            value="$5,000"
            icon={<DollarOutlined />}
            color="rgb(140, 80, 255)"
          />
        </Col>
      </Row>
      <div>
        <RecentOrdersPage />
      </div>
    </div>
    </AdminRouter>
  );
};

export default AdminPage;

AdminPage.getLayout = function getLayout(page) {
    return <AdminLayout>{page}</AdminLayout>;
  };