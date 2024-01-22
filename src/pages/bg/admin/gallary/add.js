import { useEffect, useState } from "react";
import { Form, Input, Select, Button, List, Card, Upload } from "antd";
import AdminLayout from "@/Component/Layout/AdminLayout";
import Spinner from "@/Component/Loader/Loader";
import axios from "axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const { Option } = Select;

const AddGallary = () => {

  const [loader, setLoader] = useState(false);
  let jwtToken;
  if (typeof window !== "undefined") {
    jwtToken = JSON.parse(localStorage.getItem("User")) || [];
  }
  // console.log(jwtToken.token);
  const headers = {
    Authorization: `Bearer ${jwtToken?.token}`,
  };

  const onFinish = async (values) => {

    console.log('Received values:', values);
    setLoader(true);
    const { data } = await axios.post(
      "https://server.beargear.com.bd/api/v1/gallary/add",
      { values},
      {
        headers,
      }
    );
    setLoader(false);
    if (data.error) {
      NotificationManager.error("Error message", data.error, 4000);
    } else {
      NotificationManager.success("Success message", data.msg, 4000);
      //console.log(data);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "10px 0",
      }}
    >
      {loader && <Spinner />}
      <Card
        style={{
          width: "90%",
        }}
        title="Add Gallary Photo"
      >
        <Form onFinish={onFinish}>
        <Form.Item name="title" label="Title">
            <Input type="text" placeholder="titile" />
          </Form.Item>
          <Form.Item name="imageLink" label="image link">
            <Input type="text" placeholder="image link" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <NotificationContainer />
    </div>
  );
};

export default AddGallary;

AddGallary.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
