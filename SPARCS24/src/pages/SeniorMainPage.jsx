import NavBar from "../components/common/NavBar";
import SeniorContainer from "../components/common/SeniorContainer";
import SwiperComponent from "../components/common/SwiperComponent";
import Subtitle from "../components/mainpage/Subtitle";
import Footer from "../components/common/Footer";
import TabComponent from "../components/mainpage/TabComponent";
import Stories from "../components/mainpage/Stories";
import Lectures from "../components/mainpage/Lectures";
import Questions from "../components/mainpage/Questions";

const images = [
  { src: "/img1.png", alt: "Image 1" },
  { src: "/img2.png", alt: "Image 2" },
];

const SeniorMainPage = () => {
  return (
    <>
      <NavBar senior />
      <SeniorContainer main>
        <SwiperComponent images={images} height="432px" />
        <TabComponent />
        <Subtitle senior>하모니의 이야기</Subtitle>
        <Stories />
        <Subtitle senior>하모니가 꼭 들어야하는 강의</Subtitle>
        <Lectures />
        <Subtitle senior>하모니들이 자주 묻는 질문</Subtitle>
        <Questions />
      </SeniorContainer>
      <Footer />
    </>
  );
};

export default SeniorMainPage;
