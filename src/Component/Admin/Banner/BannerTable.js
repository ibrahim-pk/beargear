import React from 'react';
import { Table, Button, Card } from 'antd';



const BannerTable = ({ banner, handleDelete }) => {
  console.log(banner);
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Button type="danger" onClick={() => handleDelete(record.id)}>
          Delete
        </Button>
      ),
    },
  ];
  
  return (
    <Card>
      <Table dataSource={banner} columns={columns} />
    </Card>
  );
};

export default BannerTable;
