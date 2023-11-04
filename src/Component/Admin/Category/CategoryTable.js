import React from 'react';
import { Table, Button, Card } from 'antd';



const CategoryTable = ({ category, handleDelete }) => {
  console.log(category);
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
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
      <Table dataSource={category} columns={columns} />
    </Card>
  );
};

export default CategoryTable;
