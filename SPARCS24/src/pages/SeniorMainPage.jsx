import NavBar from "../components/common/NavBar";
import SeniorContainer from "../components/common/SeniorContainer";
import SwiperComponent from "../components/common/SwiperComponent";
import Subtitle from "../components/mainpage/Subtitle";
import TabComponent from "../components/mainpage/TabComponent";
import Stories from "../components/mainpage/Stories";
import Lectures from "../components/mainpage/Lectures";
import Questions from "../components/mainpage/Questions";

const images = [
  { src: "/SeniorBanner2.png", alt: "Image 1" },
  { src: "/SeniorBanner3.png", alt: "Image 2" },
  { src: "/SeniorBanner1.png", alt: "Image 2" },
];

const SeniorMainPage = () => {
  return (
    <>
      <NavBar senior="true" />
      <SeniorContainer>
        <SwiperComponent images={images} height="432px" />
        <TabComponent />
        <Subtitle senior="true">하모니의 이야기</Subtitle>
        <Stories />
        <Subtitle senior="true">하모니가 꼭 들어야하는 강의</Subtitle>
        <Lectures />
        <Subtitle senior="true">하모니들이 자주 묻는 질문</Subtitle>
        <Questions />
      </SeniorContainer>
      <img
        src="/Footer.png"
        alt="Footer"
        style={{ marginTop: "8rem", width: "100%" }}
      />
    </>
  );
};

export default SeniorMainPage;
