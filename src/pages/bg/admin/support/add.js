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

const AddProduct = () => {
  const [productDetails, setProductDetails] = useState([]);

  const [loader, setLoader] = useState(false);
  const [reLoader, setReLoader] = useState(false);
  const [imgUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  let jwtToken;
  if (typeof window !== "undefined") {
    jwtToken = JSON.parse(localStorage.getItem("User")) || [];
  }
  // console.log(jwtToken.token);
  const headers = {
    Authorization: `Bearer ${jwtToken?.token}`,
  };
  const handleImageUpload = async (e) => {
    setLoading(true);
    const imageFile = e.target.files[0];
    const data = new FormData();
    data.append("file", imageFile);
    //your folder name
    data.append("upload_preset", "WinnerImg");
    data.append("cloud_name", "ditdynru4");
    //console.log(imageFile);

    try {
      const result = await axios.post(
        //aykhne [Your Cloudinary Cloud Name] baki link thik thak thakbe
        "https://api.cloudinary.com/v1_1/ditdynru4/image/upload",
        data
      );
      console.log(result?.data?.url);
      setImageUrl(result?.data?.url);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  };
  const onFinish = async (values) => {
    values.imageLink = imgUrl;
    console.log('Received values:', values);
    setLoader(true);
    const { data } = await axios.post(
      "http://localhost:5000/api/v1/support/add",
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
        title="Add SupprtUS Logo"
      >
        <Form onFinish={onFinish}>
        <Form.Item name="title" label="Title">
            <Input type="text" placeholder="titile" />
          </Form.Item>
          <Form.Item label="Images">
            <input type="file" onChange={handleImageUpload} className="" />
          </Form.Item>

          <Form.Item>
            {!loading ? (
              <Button type="primary" htmlType="submit">
                Add
              </Button>
            ) : (
              <h1>Uploading...</h1>
            )}
          </Form.Item>
        </Form>
      </Card>
      <NotificationContainer />
    </div>
  );
};

export default AddProduct;

AddProduct.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
