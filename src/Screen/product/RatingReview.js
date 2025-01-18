// components/RatingsAndReviews.js
import React, { useEffect, useState } from 'react';
import { Divider, Rate, List, Progress, Avatar } from 'antd';
import ReviewItem from './ReviewItem';
import axios from 'axios';
import {NotificationContainer, NotificationManager} from 'react-notifications';







const RatingsAndReviews = ({id}) => {
  //const totalRatings = reviewsData.reduce((acc, review) => acc + review.rating, 0) / reviewsData.length;
  const [loader, setLoader] = useState(false);
  const [reviewsData, setReviewsData] = useState([]);
 //console.log(id);

 useEffect(()=>{
  const fetchData=async()=>{
    setLoader(true)
    const{data}=await axios.get(`http://localhost:5000/api/v1/product/get/review/${id}`)
    console.log("review",data);
    setLoader(false)
    if(data.error){
      NotificationManager.error('Error message', data.error, 4000);
    }else{
      setReviewsData(data?.review || [])
    }
      
  }
  fetchData()
 },[])



  return (
    <div>
      <h2 style={{marginBottom:'10px',marginTop:'10px'}}>Product Reviews</h2>
      {/* <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Rate disabled allowHalf defaultValue={reviewsData[0].rating} />
        <span style={{ marginLeft: 8 }}>{reviewsData[0].rating.toFixed(1)}</span>
      </div>
      <Progress
        percent={(reviewsData[0].rating / 5) * 100} // Assuming a rating scale of 0 to 5
        showInfo={false}
        status="active"
        style={{ marginTop: 8 }}
      />
      <p>{totalRatings} ratings</p>
    </div> */}
      <Divider />


      <div>
        {
         reviewsData.length>0&&reviewsData.map((review)=>(
            <div className="review-item">
          <div className="review-header">
            <Avatar src={review?.avatarUrl} alt={review?.userName} />
            <span style={{fontSize:"20px",marginLeft:"5px"}} className="review-author">{review?.userName}</span>
            {/* <Tooltip title={review.createdAt}>
              <span className="review-datetime">{review.createdAt}</span>
            </Tooltip> */}
          </div>
          <p className="review-content">{review?.review}</p>
          <div className="review-actions">
            <Rate disabled defaultValue={4} />
          </div>
        </div>
          ))
        }
      </div>


      {/* <List
        dataSource={reviewsData}
        renderItem={(item) => <ReviewItem review={item} />}
      /> */}

      <NotificationContainer />
    </div>
  );
};

export default RatingsAndReviews;
