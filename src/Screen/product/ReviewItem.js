// components/ReviewItem.js
import React from 'react';
import { Avatar, Rate, Tooltip } from 'antd';

const ReviewItem = ({ review }) => {
  console.log("reviewItem",review)
  return (
    <div className="review-item">
      <div className="review-header">
        <Avatar src={review?.avatarUrl} alt={review?.userName} />
        <span className="review-author">{review?.userName}</span>
        {/* <Tooltip title={review.createdAt}>
          <span className="review-datetime">{review.createdAt}</span>
        </Tooltip> */}
      </div>
      <p className="review-content">{review?.review}</p>
      <div className="review-actions">
        <Rate disabled defaultValue={4} />
      </div>
    </div>
  );
};

export default ReviewItem;
