import { Button, Carousel, Col, Image, Row } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
const Header = () => {

  const [banner, setBanner] = useState([]);
  const [loader,setLoader]=useState(false)
  const [reLoader,setReLoader]=useState(false)

  useEffect(()=>{
    const fetchData=async()=>{
      setLoader(true)
      const {data}=await axios.get('http://localhost:5000/api/v1/banner/get')
      setLoader(false)
      setBanner(data)
    }
    fetchData()

  },[reLoader])


  return (
    <div className="header">
       <div className="header-carousel">
            <Carousel autoplay>
             {
               banner.length>0&&
               banner.map((item,idx)=>(
                <div key={idx}>
                <img
                 
                 src={item?.imageLink}
                  
                  alt=""
                  width="100%"
                  height="auto"
                />
              </div>

               ))
             }

              
             
            </Carousel>
          </div>
    </div>
  );
};

export default Header;
