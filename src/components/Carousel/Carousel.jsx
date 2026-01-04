
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import prevImage from "../../assets/prev.png";
import nextImage from "../../assets/next.png";
import Card from "../Card/Card.jsx";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Carousel.module.css";

const Carousel = ({ data, type="" }) => {
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className={styles.carouselWrapper}>
      <button 
        onClick={handlePrev} 
        className={`${styles.navButton} ${styles.prevButton}`}
        aria-label="Previous"
      > 
        <img src={prevImage} alt="Previous" />
      </button>

      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        slidesPerView={7}
        slidesPerGroup={4}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },
          640: { slidesPerView: 3, spaceBetween: 15 },
          768: { slidesPerView: 4, spaceBetween: 20 },
          1024: { slidesPerView: 5, spaceBetween: 20 },
          1280: { slidesPerView: 7, spaceBetween: 20 },
  
        }}
        className={styles.swiper}
      >
        {data.map((album) => (
          <SwiperSlide key={album.id}>
            <Card album={album} type={type}/>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <button 
        onClick={handleNext} 
        className={`${styles.navButton} ${styles.nextButton}`}
        aria-label="Next"
      >
        <img src={nextImage} alt="Next" />
      </button>
    </div>
  );
};

export default Carousel;
