// pages/index.js

import { useEffect, useState } from "react";
import BestSellerCarousel from "./BSCarousel";
import axios from "axios";
import Spinner from "@/Component/Loader/Loader";

const bestSellers = [
  {
    name: 'Product 1',
    images: ['/image/bugpack.png', '/image/bugpack.png', '/image/bugpack.png'],
    description: 'Lorem ipsum dolor sit amet.',
    oldPrice: 89.99,
    newPrice: 80.99,
  },
  {
    name: 'Product 2',
    images: ['/image/bugpack.png', 'image5.jpg', 'image6.jpg'],
    description: 'Lorem ipsum dolor sit amet.',
    oldPrice: 89.99,
    newPrice: 80.99,
  },
  {
    name: 'Product 3',
    images: ['/image/bugpack.png', 'image8.jpg', 'image9.jpg'],
    description: 'Lorem ipsum dolor sit amet.',
    oldPrice: 89.99,
    newPrice: 80.99,
  },
  {
    name: 'Product 4',
    images: ['/image/bugpack.png', 'image11.jpg', 'image12.jpg'],
    description: 'Lorem ipsum dolor sit amet.',
    oldPrice: 89.99,
    newPrice: 80.99,
  },
  {
    name: 'Product 5',
    images: ['/image/bugpack.png', 'image14.jpg', 'image15.jpg'],
    description: 'Lorem ipsum dolor sit amet.',
    oldPrice: 89.99,
    newPrice: 80.99,
  },
  {
    name: 'Product 6',
    images: ['/image/bugpack.png', 'image14.jpg', 'image15.jpg'],
    description: 'Lorem ipsum dolor sit amet.',
    oldPrice: 89.99,
    newPrice: 80.99,
  },
  {
    name: 'Product 7',
    images: ['/image/bugpack.png', 'image14.jpg', 'image15.jpg'],
    description: 'Lorem ipsum dolor sit amet.',
    oldPrice: 89.99,
    newPrice: 80.99,
  },
  {
    name: 'Product 8',
    images: ['/image/bugpack.png', 'image14.jpg', 'image15.jpg'],
    description: 'Lorem ipsum dolor sit amet.',
    oldPrice: 89.99,
    newPrice: 80.99,
  },
  {
    name: 'Product 9',
    images: ['/image/bugpack.png', 'image14.jpg', 'image15.jpg'],
    description: 'Lorem ipsum dolor sit amet.',
    oldPrice: 89.99,
    newPrice: 80.99,
  },
];

const BestProduct=()=> {
  const [topProduct,setTopProduct]=useState([])
  const [loader, setLoader] = useState(false);

  useEffect(()=>{
   const fetchData=async()=>{
    setLoader(true)
    const{data}=await axios.get(`http://localhost:5000/api/v1/product/home/top-rated`)
    console.log(data);
    setLoader(false)
    if(data.error){
      setTopProduct([])
    }else{
      setTopProduct(data)
    }
   }

   fetchData()

  },[])
  return (
    <div>
      {
        loader&&<Spinner />
      }
      <div>
        <img style={{
          width:'100%'
        }} src="/image/banner1.png" alt="" />
      </div>
      <h2 style={{ padding: "20px 0 0 20px" }}>Top Rated Product</h2>
      <div className="top-rated-carousel-item">
      <BestSellerCarousel bestSellers={topProduct} />
      </div>
      
    </div>
  );
}
export default BestProduct;


