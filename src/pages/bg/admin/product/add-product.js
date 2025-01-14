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
  const [selectedImages, setSelectedImages] = useState([]);
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState();
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
    values.imageLink =imgUrl;
    //console.log('Received values:',values,selectedImages,productDetails);
   
    setLoader(true);
    const { data } = await axios.post(
      "http://localhost:5000/api/v1/product/addProduct",
      { values, productDetails },
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
      window.location.reload()
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      const { data } = await axios.get(
        "http://localhost:5000/api/v1/category/get"
      );
      setLoader(false);
      setCategory(data);
    };
    fetchData();
  }, [reLoader]);

  const addProductDetail = () => {
    setProductDetails([...productDetails, ""]);
  };

  const removeProductDetail = (index) => {
    const updatedDetails = [...productDetails];
    updatedDetails.splice(index, 1);
    setProductDetails(updatedDetails);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "10px 0",
      }}
    >
      {/* {loader && <Spinner />} */}
      <Card
        style={{
          width: "90%",
        }}
        title="Add Product"
      >
        <Form onFinish={onFinish}>
          <Form.Item name="name" label="Name">
            <Input placeholder="Product Name" />
          </Form.Item>
          <Form.Item name="cateId" label="Category">
            <Select placeholder="Select Category">
              {category?.length > 0 &&
                category.map((item, idx) => (
                  <Option key={idx} value={item?.id}>
                    {item?.category}
                  </Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item name="oldPrice" label="Old Price">
            <Input type="number" placeholder="Old Price" />
          </Form.Item>
          <Form.Item name="newPrice" label="New Price">
            <Input type="number" placeholder="New Price" />
          </Form.Item>
          {/* <Form.Item name="imageLink" label="image link">
            <Input type="text" placeholder="image link" />
          </Form.Item> */}
          <Form.Item name="stock" label="product stock">
            <Input type="number" placeholder="stock" />
          </Form.Item>
          <Form.Item label="Product Images">
            <input type="file" onChange={handleImageUpload} className="" />
          </Form.Item>

          {/* <Form.Item label="Image">
            <Upload
              listType="picture-card"
              onChange={handleImage}
            >
              {image ? (
                <img src={image} alt="Uploaded" style={{ width: "100%" }} />
              ) : (
                "Upload"
              )}
            </Upload>
          </Form.Item> */}
          <Form.Item label="Product Details">
            <Button
              type="dashed"
              onClick={addProductDetail}
              style={{ marginBottom: "10px" }}
            >
              Add Product Detail
            </Button>
            <List
              dataSource={productDetails}
              renderItem={(item, index) => (
                <List.Item>
                  <Input
                    placeholder="Product Detail"
                    value={item}
                    onChange={(e) => {
                      const updatedDetails = [...productDetails];
                      updatedDetails[index] = e.target.value;
                      setProductDetails(updatedDetails);
                    }}
                  />
                  <Button
                    type="link"
                    onClick={() => removeProductDetail(index)}
                  >
                    Remove
                  </Button>
                </List.Item>
              )}
            />
          </Form.Item>
          <Form.Item>
            {!loading ? (
              <Button type="primary" htmlType="submit">
                Add Product
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
