import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import {FeedbackFormWrapper , StyledRatingContainer} from './FeedbackForm.styled';

const FeedbackForm = ({ onSave, onCancel, initialRating = 0, initialReview = '' }) => {
  const [rating, setRating] = useState(initialRating);
  const [review, setReview] = useState(initialReview);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = () => {
    const feedbackData = {
      rating: rating,
      review: review,
    };

    onSave(feedbackData);
  };

  return (
    <FeedbackFormWrapper>
      <div>
    <StyledRatingContainer>
        <label>Rating</label>
        <StarRatings
          rating={rating}
          starRatedColor="#FFAC33"
          starEmptyColor="#ccc"
          changeRating={handleRatingChange}
          numberOfStars={5}
          name="rating"
          starDimension="24px"
          starSpacing="1px" 
        />
    </StyledRatingContainer>
      </div> 
      <div>
      <label>Review</label>
        <textarea placeholder="Enter text" value={review} onChange={handleReviewChange} rows={4} cols={50} />
      </div>
      <div style={{ display: 'flex', gap: '10px'}}>
        <button type="button" onClick={handleSubmit}>Save</button> 
        <button type="button" style={{ backgroundColor: '#E5EDFA', color: '#343434'}} onClick={onCancel}>Cancel</button>
      </div>
    </FeedbackFormWrapper>
  );
};

export default FeedbackForm;
