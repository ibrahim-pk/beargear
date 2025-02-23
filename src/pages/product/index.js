import RootLayout from "@/Component/Layout/RootLayout";
import {
  Row,
  Col,
  Radio,
  Input,
  Card,
  Space,
  Slider,
  Rate,
  Empty,
  Select,
} from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Pagination } from 'antd';
import axios from "axios";
import Spinner from "@/Component/Loader/Loader";

const ProductPage = () => {
  //console.log(allProduct);
  const [allProduct, setAllProduct] = useState([]);
  const [priceRange, setPriceRange] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [reLoader, setReLoader] = useState(false);
  const [selectedPriceValue, setSelectedPriceValue] = useState(null); 
  const [selectedColorValue, setSelectedColorValue] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);
  



 
  const onPageChange = (page) => {
    //console.log(page);
    setCurrentPage(page);
  };



  useEffect(()=>{
  
   const fetchData=async()=>{
    setLoader(true)
    const{data}=await axios.get(`http://localhost:5000/api/v1/product/getProducts?color=${selectedColorValue}&minPrice=${minPrice}&maxPrice=${maxPrice}&sortAsc=${selectedPriceValue}&page=${currentPage}&perPage=8`)
    console.log(data);
    setLoader(false)
    if(data.error){
      setAllProduct([])
    }else{
      setAllProduct(data)
    }
   }

   fetchData()

  },[selectedColorValue,
    selectedPriceValue,currentPage,minPrice,maxPrice])



  const colorOptions = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    // Add more colors as needed
  ];

  return (
    <div
     className="filterProduct"
      style={{
        marginBottom: "50px",
      }}
    >
      {
        loader&&<Spinner />
      }
      <Row justify="space-evenly" gutter={[16, 16]}>
        <Col
        style={{
          marginTop:'20px'
        }}
        className="smallDeviceSideNavbar"
          xs={24}
          sm={24}
        >
         
          <div
            style={{
              margin: "10px 0",
            }}
          >
            <h3>Price</h3>
            <Select placeholder="Select Price"  onChange={(e)=>setSelectedPriceValue(e)}>
              <Select.Option value="0">Low Price</Select.Option>
              <Select.Option value="1">High Price</Select.Option>
            </Select>
          </div>
         
          {/* <div
            style={{
              margin: "10px 0",
            }}
          >
            <h3>Color</h3>
            <Select style={{
              width:'120px'
            }} mode="single" placeholder="Select Colors" onChange={(e)=>setSelectedColorValue(e)}>
              {colorOptions.map((color) => (
                <Select.Option key={color.value} value={color.value}>
                  {color.label}
                </Select.Option>
              ))}
            </Select>
          </div> */}
          <div
            style={{
              margin: "10px 0",
            }}
          ></div>
        </Col>

        {/* Left Column: Filters large device */}
        <Col
        className="LargeDeviceSideNavbar"
          style={{
            position: "fixed",
            left: "20px",
            right: 0,
            zIndex: 100,
          }}
          xs={8}
          sm={8}
          md={4}
          lg={4}
        >
          
          <div
            style={{
              margin: "10px 0",
            }}
          >
            <h3>Price</h3>
            <Radio.Group  onChange={(e)=>setSelectedPriceValue(e.target.value)}>
              <Radio value="0">Low Price</Radio> <br />
              <Radio value="1">High Price</Radio>
            </Radio.Group>
          </div>
          {/* <div
            style={{
              margin: "10px 0",
            }}
            
          >
            <h3>Color</h3>
            <Radio.Group  onChange={(e)=>setSelectedColorValue(e.target.value)}>
              <Radio value="Red">Red</Radio>
              <br />
              <Radio value="Green">Green</Radio>
              <br />
              <Radio value="Blue">Blue</Radio>
              
            </Radio.Group>
          </div> */}
          
        </Col>

        {/* Right Column: Product List (Test Data) */}
        <Col
          
          xs={24}
          sm={24}
          md={16}
          lg={16}
        >
          <h2 style={{ margin: "20px 0px",textAlign:'center' }}>Featured Products</h2>
          <Row justify='center'   gutter={[16, 16]}>
            {allProduct?.length > 0 ? (
              allProduct.map((item,idx) => (
                <Col 
                key={idx}
                xs={11}
                sm={11}
                md={7}
                lg={8}>
                <Link href={`/single-product/${item.id}`}>
                  <Card
                    className="productCard"
                    hoverable
                    
                    cover={
                      <div style={{ position: "relative" }}>
                        <div
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            background: "#FE5102",
                            color: "white",
                            padding: "2px",
                            borderTopRightRadius: "10px",
                            borderEndEndRadius: "10px",
                            fontSize: "14px",
                          }}
                        >
                          <p>
                            <small>
                              {(
                                (Math.abs(item.oldPrice - item.newPrice) /
                                  item.oldPrice) *
                                100
                              ).toFixed(1) + " "}
                              %OFF
                            </small>
                          </p>
                        </div>

                        <img
                          src={item?.image}
                          alt="product"
                        
                        />
                      </div>
                    }
                  >
                    <h3 className="productTitle">{item.title}</h3>
                    <h3>
                      <span className="newPrice" style={{ color: "#FE5102" }}>
                        Tk{item.newPrice}
                      </span>
                      <p style={{ fontSize: "12px" }}>
                        <del className="oldPrice delPrice">
                          Tk{item.oldPrice}
                        </del>
                      </p>
                    </h3>
                    <div>
                      <Rate
                        style={{ fontSize: "10px" }}
                        allowHalf
                        defaultValue={item.rating}
                      />
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
              ))
            ) : (
              <Empty />
            )}
            </Row>
            <div style={{
              margin:'20px 0',
              textAlign:'center'
            }}>
            <Pagination current={currentPage} onChange={onPageChange} total={allProduct.length} />
            </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductPage;

ProductPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// export const getServerSideProps = async () => {
//   const res = await fetch(");
//   const data = await res.json();
//   console.log(data);

//   return {
//     props: {
//       allProduct: data,
//     },
//   };
// };
