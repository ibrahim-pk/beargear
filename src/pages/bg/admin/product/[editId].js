
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

const EditProduct = ({singleProduct}) => {
  //console.log(singleProduct);

  const [productDetails, setProductDetails] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState();
  const [loader, setLoader] = useState(false);
  const [reLoader, setReLoader] = useState(false);
  let jwtToken;
  if (typeof window !== "undefined") {
    jwtToken = JSON.parse(localStorage.getItem("User")) || [];
  }
  // console.log(jwtToken.token);
  const headers = {
    Authorization: `Bearer ${jwtToken?.token}`,
  };

  const handleImage = (info) => {
    // if (info.file.status === 'done') {
    //   console.log(info.file.response.url);
    //   setImage(info.file.response.url);
    // }
  };

  const reviewArr=JSON.parse(singleProduct?.review)
  const arrayOfObjects =reviewArr&&reviewArr.length>0&&reviewArr.map(JSON.parse);
  console.log(arrayOfObjects);

  const onFinish = async (values) => {
    console.log('Received values:', values,productDetails);
    // setLoader(true);
    // const { data } = await axios.post(
    //   "https://server.beargear.com.bd/api/v1/product/addProduct",
    //   { values, productDetails },
    //   {
    //     headers,
    //   }
    // );
    // setLoader(false);
    // if (data.error) {
    //   NotificationManager.error("Error message", data.error, 4000);
    // } else {
    //   NotificationManager.success("Success message", data.msg, 4000);
    //   //console.log(data);
    // }
  };

  

  const [initialValues, setInitialValues] = useState({
    name:singleProduct?.title,
    imageLink:singleProduct?.image,
    oldPrice: singleProduct?.oldPrice,
    newPrice:singleProduct?.newPrice,
    stock:singleProduct?.stock,
  });
  
  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      const { data } = await axios.get(
        "https://server.beargear.com.bd/api/v1/category/get"
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
  const handleImageChange = (e) => {
    const files = e.target.files;
    setSelectedImages([...selectedImages, ...files]);
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
        title="Add Product"
      >
        <Form 
        onFinish={onFinish}
        initialValues={initialValues}
        >
          <Form.Item name="name" label="Name">
            <Input  placeholder="Product Name" />
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
          <Form.Item name="imageLink" label="image link">
            <Input type="text" placeholder="image link" />
          </Form.Item>
          <Form.Item name="stock" label="product stock">
            <Input type="number" placeholder="stock" />
          </Form.Item>
          {/* <Form.Item label="Product Images">
        <input
          type="file"
          multiple
          onChange={handleImageChange}
        />
        </Form.Item> */}
          {/* <Form.Item label="Image">
            <Upload
              action="/api/upload"
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
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <NotificationContainer />
    </div>
  );
};

export default EditProduct;

EditProduct.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};

export const getServerSideProps = async ({params}) => {
    //console.log(params);
    const res = await fetch(`https://server.beargear.com.bd/api/v1/product/getProduct/${params.editId}`);
    const data = await res.json();
  
    return {
      props: {
        singleProduct: data,
      },
    };
  };