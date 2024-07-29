import NavBar from "../components/common/NavBar";
import Container from "../components/common/Container";
import SwiperComponent from "../components/common/SwiperComponent";
import Subtitle from "../components/mainpage/Subtitle";

const images = [
  { src: "/img1.png", alt: "Image 1" },
  { src: "/img2.png", alt: "Image 2" },
];

const MainPage = () => {
  return (
    <>
      <NavBar />
      <Container main>
        <SwiperComponent images={images} />
        <Subtitle>우리 동네 하모니는 누가 있을까요?</Subtitle>
      </Container>
    </>
  );
};

export default MainPage;
