// pages/index.js

import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../Loader/Loader";
import BestSellerCarousel from "@/Screen/product/BestProduct/BSCarousel";




const CrossbodyBags=()=> {
  const [topProduct,setTopProduct]=useState([])
  const [loader, setLoader] = useState(false);

  useEffect(()=>{
   const fetchData=async()=>{
    setLoader(true)
    const{data}=await axios.get(`https://server.beargear.com.bd/api/v1/product/home/top-rated`)
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
    <div className="homeProduct">
      {
        loader&&<Spinner />
      }
      <h2 style={{ padding: "20px 0 0 20px" }}>Cross Body Bag</h2>
      <div className="top-rated-carousel-item">
      <BestSellerCarousel bestSellers={topProduct} />
      </div>
      
    </div>
  );
}





export default CrossbodyBags;
