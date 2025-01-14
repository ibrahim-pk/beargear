// components/RatingsAndReviews.js
import React, { useEffect, useState } from 'react';
import { Divider, Rate, List, Progress } from 'antd';
import ReviewItem from './ReviewItem';
import axios from 'axios';
import {NotificationContainer, NotificationManager} from 'react-notifications';


const reviewsData = [
  // Add your review data here
  {
    username: 'User1',
    avatarUrl: 'user1-avatar.jpg',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 4,
    createdAt: '2023-09-21 10:00 AM',
  },
  {
    username: 'User1',
    avatarUrl: 'user1-avatar.jpg',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 4,
    createdAt: '2023-09-21 10:00 AM',
  },
  // Add more reviews as needed
];




const RatingsAndReviews = ({id}) => {
  //const totalRatings = reviewsData.reduce((acc, review) => acc + review.rating, 0) / reviewsData.length;
  const [loader, setLoader] = useState(false);
  const [reviewsData, setReviewsData] = useState([]);
 //console.log(id);

 useEffect(()=>{
  const fetchData=async()=>{
    setLoader(true)
    const{data}=await axios.get(`http://localhost:5000/api/v1/product/get/review/${id}`)
    console.log(data);
    setLoader(false)
    if(data.error){
      NotificationManager.error('Error message', data.error, 4000);
    }else{
      setReviewsData(data?.review.lenght>0?data?.review:[])
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
      <List
        dataSource={reviewsData}
        renderItem={(item) => <ReviewItem review={item} />}
      />

      <NotificationContainer />
    </div>
  );
};

export default RatingsAndReviews;
