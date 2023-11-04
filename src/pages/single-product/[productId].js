// components/ProductDetails.js
import RootLayout from "@/Component/Layout/RootLayout";
import Spinner from "@/Component/Loader/Loader";
import RatingsAndReviews from "@/Screen/product/RatingReview";
import ReviewForm from "@/Screen/product/Review";
import { Card, Row, Col, Button, Divider, Image, Empty } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";

const ProductDetails = ({singleProduct}) => {
  const router = useRouter();
  const[loader,setLoader]=useState(false)
  
  const productDetailsArray = JSON.parse(singleProduct?.productDetails);
  //console.log(productDetailsArray)

  const addToCart = (product) => {
    setLoader(true)
    const existingCartItem = JSON.parse(localStorage.getItem("Cart")) || [];

    const productInCart = existingCartItem?.find(
      (item) => item.id === product.id
    );

    if (productInCart) {
      productInCart.qtr += 1;
    } else {
      existingCartItem.push({ ...product, qtr: 1 });
    }

    localStorage.setItem("Cart", JSON.stringify(existingCartItem));
    setLoader(false)
    router.reload();
    
  };

  return (
    <div style={{ marginTop: "20px" }}>
      {
        loader&&<Spinner />
      }
      <Row justify="space-evenly" gutter={[16, 16]}>
        <Col xs={20} sm={20} md={6} lg={6} xl={6}>
          <Image
            src={`https://drive.google.com/uc?id=${singleProduct?.image.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)[1]}`}
            alt="Product"
            height="400px"
            width="auto"
          />
        </Col>
        <Col xs={20} sm={20} md={14} lg={14} xl={14}>
          <div>
            <Card title={<h3><b>{singleProduct.title}</b></h3>}>
              <h4 style={{marginBottom:'15px'}}>Price:{singleProduct.newPrice}Tk</h4>
              <Button onClick={() => addToCart(singleProduct)} type="primary">Add to Cart</Button>
              <Button type="danger">Buy Now</Button>
            </Card>
          </div>
          <div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Card title="Product Details">
              <ul style={{
                padding:'20px'
              }}>
                {productDetailsArray!==null?productDetailsArray.map((item, index) => {
                        const [key, value] = item.split(':');
                        return (
                          <li key={index}>
                            <strong>{key}:</strong> {value}
                          </li>
                        );
                      }):<div style={{
                        textAlign:'center'
                      }}>
                        <Empty />
                      </div>
                    
                    }
              </ul>
            </Card>
          </div>
        </Col>
      </Row>

      <Row justify="space-around" gutter={[16, 16]}>
        <Col xs={20} sm={20} md={14} lg={14} xl={14}>
          <Divider />
          <RatingsAndReviews id={singleProduct} /> 
          <Divider />
          <ReviewForm  id={singleProduct?.id}/>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async ({params}) => {
  console.log(params);
  const res = await fetch(`http://localhost:5000/api/v1/product/getProduct/${params.productId}`);
  const data = await res.json();

  return {
    props: {
      singleProduct: data,
    },
  };
};