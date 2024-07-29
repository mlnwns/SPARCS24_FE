import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 20rem;
  margin-bottom: 4rem;

  .swiper-slide {
    width: 100%;
    height: 100%;
  }

  .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-button-next,
  .swiper-button-prev {
    width: 2rem;
    height: 2rem;
    background-color: #fff;
    border-radius: 50%;
    color: #000;

    &::after {
      font-size: 0.8rem;
      font-weight: 900; /* 화살표를 더 두껍게 만듭니다 */
    }
  }

  .swiper-button-next {
    right: 10px;
    &::after {
      margin-left: 2px;
    }
  }

  .swiper-button-prev {
    left: 10px;
    &::after {
      margin-right: 2px;
    }
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    background: #868686;
  }
`;

// Swiper 컴포넌트를 정의합니다.
const SwiperComponent = ({ images, loop = true }) => {
  return (
    <StyledSwiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop={loop}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image.src} alt={image.alt} />
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};

export default SwiperComponent;
