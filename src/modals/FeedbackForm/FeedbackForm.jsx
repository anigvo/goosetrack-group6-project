import React, { useState, useEffect } from 'react';
import StarRatings from 'react-star-ratings';
import { FeedbackFormWrapper, StyledRatingContainer, PencilIcon, TrashIcon, LoaderCont } from './FeedbackForm.styled';
import { createReview, getReview, updateReview, deleteReview } from '../../api/reviews'; 
import { toast } from 'react-hot-toast';
import { nanoid } from '@reduxjs/toolkit';

const FeedbackForm = ({ onCancel, onReviewStatusChange, onUpdateStyles, onEditStatusChange }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [userHasComment, setUserHasComment] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUserReview() {
      try {
        const userReviewArray = await getReview();

        if (userReviewArray && userReviewArray.length > 0) {
          const userReview = userReviewArray[0];
          setRating(userReview.rating);
          setReview(userReview.comment);
          setUserHasComment(true);

          if (onReviewStatusChange) {
            onReviewStatusChange(true);
          }
        }
      } catch (error) {
        console.error('Error fetching user review:', error);
      } finally {
        setIsLoading(false); 
      }
    }

    fetchUserReview();
  }, [onReviewStatusChange]);

  const handleRatingChange = (newRating) => {
    if (!userHasComment || isEditing) { 
      setRating(newRating);
    }
  };

  const handleReviewChange = (e) => {
    if (!userHasComment || isEditing) {
      setReview(e.target.value);
    }
  };
  
  const handleEnterKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); 
      handleSubmit(); 
    }
  };

  const handleEditClick = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing); 
    if (onEditStatusChange) {
      onEditStatusChange(!isEditing); 
    }
  };

  const handleDeleteClick = async () => {
    try {
      await deleteReview();
      toast.success('Comment deleted successfully!');
      setUserHasComment(false); 
      setReview(''); 
      setRating(0); 

      if (onReviewStatusChange) {
        onReviewStatusChange(false);
      }
    } catch (error) {
      console.error('Error deleting review:', error);
      toast.error('An error occurred while deleting the comment.');
    }
    if (onCancel) {
      onCancel();
    }
  };

  const handleSubmit = async () => {
    if (review.trim() === '') {
      toast.error('Please enter a comment before submitting.');
      return;
    }

    
    if (!rating) {
      toast.error('Please select a rating before submitting.');
      return;
    }
  
    const feedbackData = {
      rating: rating,
      comment: review,
    };
  
    try {
      if (userHasComment && isEditing) {
        await updateReview(feedbackData);
        toast.success('Review updated successfully!');
        if (onEditStatusChange) {
          onEditStatusChange(false);
        }
      } else {
        await createReview(feedbackData);
        toast.success('Review posted successfully!');
      }
      setUserHasComment(true);
      setIsEditing(false);
  
      if (onUpdateStyles) {
        onUpdateStyles();
      }
  
      if (onCancel) {
        onCancel();
      }
    } catch (error) {
      toast.error('An error occurred while processing your request.');
    }
  };
  const textId = nanoid();
  return (
    <FeedbackFormWrapper >
      {isLoading ? (
        <LoaderCont></LoaderCont>
      ) : (
        <div>
          <StyledRatingContainer>
            <span>Rating</span>
            <StarRatings
              rating={rating}
              starRatedColor="#FFAC33"
              starEmptyColor="#ccc"
              changeRating={handleRatingChange}
              numberOfStars={5}
              name="rating"
              starDimension="24px"
              starSpacing="1px"
              readOnly={userHasComment && !isEditing}
            />
          </StyledRatingContainer>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
              <label style={{ margin: '0' }} htmlFor={textId}>Review</label>
              <div style={{ display: 'flex', gap: '10px' }}>
                {userHasComment && (
                  <button className="fakeIcon" type="button" onClick={handleEditClick}>
                    <PencilIcon />
                  </button>
                )}
                {userHasComment && (
                  <button className="fakeDelIcon" type="button" onClick={handleDeleteClick}>
                    <TrashIcon />
                  </button>
                )}
              </div>
            </div>
            <textarea
              placeholder="Enter text"
              value={review}
              onChange={handleReviewChange}
              onKeyDown={handleEnterKey} 
              rows={4}
              cols={50}
              id={textId}
              readOnly={userHasComment && !isEditing}
            />
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            {!userHasComment && !isEditing && (
              <button className="BtnSave" type="button" onClick={handleSubmit}>
                Save
              </button>
            )}
            {!userHasComment && !isEditing && (
              <button className="BtnCancel" type="button" onClick={onCancel}>
                Cancel
              </button>
            )}
          </div>
          {isEditing && (
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              <button className="BtnSave" type="button" onClick={handleSubmit}>
                Edit
              </button>
              <button className="BtnCancel" type="button" onClick={onCancel}>
                Cancel
              </button>
            </div>
          )}
        </div>
      )}
    </FeedbackFormWrapper>
  );
};

export default FeedbackForm;
