// components/ReviewItem.js
import React from 'react';
import { Avatar, Rate, Tooltip } from 'antd';

const ReviewItem = ({ review }) => {
  return (
    <div className="review-item">
      <div className="review-header">
        <Avatar src={review.avatarUrl} alt={review.username} />
        <span className="review-author">{review.username}</span>
        <Tooltip title={review.createdAt}>
          <span className="review-datetime">{review.createdAt}</span>
        </Tooltip>
      </div>
      <p className="review-content">{review.comment}</p>
      <div className="review-actions">
        <Rate disabled defaultValue={review.rating} />
      </div>
    </div>
  );
};

export default ReviewItem;
