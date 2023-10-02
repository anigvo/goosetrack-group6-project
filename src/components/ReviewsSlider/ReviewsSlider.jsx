import ReviewItem from 'components/ReviewItem/ReviewItem';
import { NextIconArrow, PrevIconArrow, ReviewSection, ReviewSectionHeader } from './ReviewsSlider.styled';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './swiper.css';

const ReviewSlider = () => { 
  
  let swiperInstance;

  const slidePrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const slideNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  return (
    <ReviewSection>
      <ReviewSectionHeader>Reviews</ReviewSectionHeader>
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
          swiperInstance = swiper;
        }}
      >
      <SwiperSlide><ReviewItem name="Olena Doe" comment="Wow, the developer of this page is incredibly good, and the reviews change so beautifully and smoothly, he must also be very handsome" rate={5} /></SwiperSlide>
      <SwiperSlide><ReviewItem name="Olena Doe" comment="GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended." rate={4} /></SwiperSlide>
      <SwiperSlide><ReviewItem name="Olena Doe" comment="Wow, the developer of this page is incredibly good, and the reviews change so beautifully and smoothly, he must also be very handsome" rate={3} /></SwiperSlide>
      <SwiperSlide><ReviewItem name="Olena Doe" comment="GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended." rate={2} /></SwiperSlide>
    </Swiper>
      
    <div>
        <PrevIconArrow onClick={slidePrev} alt="previous slide" />
        <NextIconArrow onClick={slideNext} alt="next slide" />
    </div>
      
    </ReviewSection>
  )
}

export default ReviewSlider;