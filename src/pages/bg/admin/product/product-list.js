import React, { useState, useEffect } from "react";
import { Table, Input, Button, Card } from "antd";
import AdminLayout from "@/Component/Layout/AdminLayout";
import Link from 'next/link';
const { Search } = Input;



const ProductList = ({allProduct}) => {
  const [filteredData, setFilteredData] = useState(allProduct);

  // useEffect(() => {
  //   setFilteredData(data);
  // }, [data]);

  const handleSearch = (value) => {
    const filtered = allProduct.filter((item) =>
      item.id.toString().includes(value)
    );
    setFilteredData(filtered);
  };

  const columns = [
    {
      title: "Product ID",
      dataIndex: "id",
      key: "productId",
    },
    {
      title: "Name",
      dataIndex: "title",
      key: "name",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div>
          <Link href={`/bg/admin/product/${record.id}`} type="primary" size="small" style={{ marginRight: "8px" }}>
            Edit
          </Link>
          <Button type="danger" size="small" style={{ marginRight: "8px" }}>
            Delete
          </Button>
          <Button size="small">Private</Button>
        </div>
      ),
    },
  ];

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <Card title="Product List">
        <Search
          placeholder="Search by Product ID"
          onSearch={handleSearch}
          style={{ width: 200, marginBottom: "16px" }}
        />
        <div className="table-container">
          <Table dataSource={filteredData} columns={columns} />
        </div>
      </Card>
    </div>
  );
};

export default ProductList;

ProductList.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch("https://server.beargear.com.bd/api/v1/product/getProducts");
  const data = await res.json();
  //console.log(data);

  return {
    props: {
      allProduct: data,
    },
  };
};