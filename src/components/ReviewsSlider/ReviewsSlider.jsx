import ReviewItem from 'components/ReviewItem/ReviewItem';
import { MissedReviewsMessage, NextIconArrow, PrevIconArrow, ReviewSection, ReviewSectionHeader } from './ReviewsSlider.styled';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useRef, useState } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import './swiper.css';
import { getAll } from 'api/reviews';


const ReviewSlider = () => { 

  const [reviews, setreviews] = useState([]);

  useEffect(() => {
    (async () => {
      try {
          const data = await getAll();
          setreviews(data);
        }
       catch (e){
        console.log(e);
      }
    })();
  }, [])
  
  const swiperInstance = useRef(null);

  const slidePrev = () => {
    if (swiperInstance.current) {
      swiperInstance.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (swiperInstance.current) {
      swiperInstance.current.slideNext();
    }
  };


  return (
    <ReviewSection>
      <ReviewSectionHeader>Reviews</ReviewSectionHeader>
      {reviews.length ? <>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1440: {
              slidesPerView: 2,
            },
          }}
          onSwiper={(swiper) => {
            swiperInstance.current = swiper;
          }}
        >
          {reviews.map(review => <SwiperSlide key={review.avatarURL}><ReviewItem name={review.name} comment={review.comment} rate={review.rating} avatar={review.avatarURL} /></SwiperSlide>)}
        
        </Swiper>
      
        <div>
          <PrevIconArrow onClick={slidePrev} alt="previous slide" />
          <NextIconArrow onClick={slideNext} alt="next slide" />
        </div>
      </> : <MissedReviewsMessage>Here can be your review, just sign up and express your thoughts about our service ;)</MissedReviewsMessage>
      }
    </ReviewSection>
  )
}

export default ReviewSlider;