// components/RatingsAndReviews.js
import React from 'react';
import { Divider, Rate, List, Progress } from 'antd';
import ReviewItem from './ReviewItem';


const reviewsData = [
  // Add your review data here
  {
    username: 'User1',
    avatarUrl: 'user1-avatar.jpg',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 4,
    createdAt: '2023-09-21 10:00 AM',
  },
  // Add more reviews as needed
];

const RatingsAndReviews = () => {
  const totalRatings = reviewsData.reduce((acc, review) => acc + review.rating, 0) / reviewsData.length;

  return (
    <div>
      <h2 style={{marginBottom:'10px',marginTop:'10px'}}>Product Ratings And Reviews</h2>
      <div>
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
    </div>
      <Divider />
      <List
        dataSource={reviewsData}
        renderItem={(item) => <ReviewItem review={item} />}
      />
    </div>
  );
};

export default RatingsAndReviews;
