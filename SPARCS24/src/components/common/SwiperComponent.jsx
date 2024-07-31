import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: ${(props) => props.height || "20rem"};
  border-radius: 10px;

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
      font-weight: 900;
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

const SwiperComponent = ({ images, loop = true, height = "20rem" }) => {
  return (
    <StyledSwiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={loop}
      height={height}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image.src} alt={image.alt || `Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};

export default SwiperComponent;
