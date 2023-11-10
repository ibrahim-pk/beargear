import { Card, Col, Rate, Row } from "antd";
import React, { useEffect, useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Link from "next/link";
import axios from "axios";
import Spinner from "@/Component/Loader/Loader";


const HomeProduct = () => {
   //console.log(products);
   const [allProduct, setAllProduct] = useState([]);
   const [loader, setLoader] = useState(false);

   useEffect(()=>{
    //console.log(selectedBrandValue,selectedColorValue,selectedPriceValue)
   const fetchData=async()=>{
    setLoader(true)
    const{data}=await axios.get(`http://localhost:5000/api/v1/product/home/product`)
    //console.log(data);
    setLoader(false)
    if(data.error){
      setAllProduct([])
    }else{
      setAllProduct(data)
    }
   }

   fetchData()

  },[])

  // const addToCart = (product) => {
  //   const existingCartItem = JSON.parse(localStorage.getItem("Cart")) || [];

  //   const productInCart = existingCartItem?.find(
  //     (item) => item.id === product.id
  //   );

  //   if (productInCart) {
  //     productInCart.qtr += 1;
  //   } else {
  //     existingCartItem.push({ ...product, qtr: 1 });
  //   }

  //   localStorage.setItem("Cart", JSON.stringify(existingCartItem));

  //   alert("Product added to cart!");
  // };
  
  const initialValue = 3.5;
  return (
    <div className="homeProduct">
      {
        loader&&<Spinner />
      }
      <div>
      <img style={{
          width:'100%'
        }} src="/image/banner2.png" alt="" />
      </div>
      <h2 style={{ padding: "20px 0 0 20px" }}>Featured Products</h2>

      <div className="productCardHome">
        <Row gutter={[16, 16]} justify="center">
          {allProduct.map((item, idx) => (
            <Col key={idx} xs={11} sm={11} md={7} lg={5} xl={5}>
              <Link href={`/single-product/${item.id}`}>
                <Card
                className="productCard"
                  hoverable
                  cover={
                    <div style={{ position: "relative" }}>
                      <div
                        style={{
                          position: "absolute",
                          top: "10px",
                          left: "0px",
                          background: "#FE5102",
                          color: "white",
                          padding: "4px 8px",
                          borderTopRightRadius:'10px',
                          borderEndEndRadius:'10px',
                          fontSize: "14px",
                        }}
                      >
                        10% off
                      </div>
                      <img
                        src={`https://drive.google.com/uc?id=${
                          item?.image?.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)[1]
                        }`}
                        alt="product"
                        style={{
                          width:'100%',
                          height:'200px',
                          padding:'10px 10px 1px 10px'
                        }}
                      />
                    </div>
                  }
                >
                  <h3 className="productTitle">{item.title}</h3>
                  <h3>
                  <span className="newPrice" style={{ color: "#FE5102" }}>Tk{item.newPrice}</span>
                    <p style={{fontSize:'12px'}}><del className="oldPrice delPrice">Tk{item.oldPrice}</del></p>
                   
                  </h3>
                  <div>
                    <Rate style={{fontSize:'10px'}} allowHalf defaultValue={item?.rating} />
                  </div>
                  {/* <button
                    className="productSeatBtn addToCart"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart{" "}
                    <ShoppingCartOutlined
                      style={{ fontSize: "15px", color: "white" }}
                    />
                  </button> */}
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default HomeProduct;

