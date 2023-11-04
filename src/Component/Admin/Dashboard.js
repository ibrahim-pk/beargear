// components/DashboardCard.js
import React from 'react';
import { Card, Statistic, Row, Col, Button } from 'antd';

const DashboardCard = ({ title, value, icon, color }) => {
  const cardStyle = {
    backgroundColor: color,
    color: 'white',
    padding: '16px',
  };

  return (
    <Card style={cardStyle}>
      <Row gutter={16} align="middle">
        <Col span={8}>
          <div style={{ fontSize: '32px', marginBottom: '8px' }}>{icon}</div>
        </Col>
        <Col span={16}>
          <h3>{title}</h3>
           <h2>{value}</h2>
          <div style={{margin:'10px 0'}}>
          <Button  size='small'>View All</Button>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default DashboardCard;
