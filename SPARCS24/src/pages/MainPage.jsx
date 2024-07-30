import NavBar from "../components/common/NavBar";
import Container from "../components/common/Container";
import SwiperComponent from "../components/common/SwiperComponent";
import Subtitle from "../components/mainpage/Subtitle";
import Profiles from "../components/mainpage/Profiles";
import Tips from "../components/mainpage/Tips";
import NewUserGuide from "../components/mainpage/NewUserGuide";
import Footer from "../components/common/Footer";

const images = [
  { src: "/img1.png", alt: "Image 1" },
  { src: "/img2.png", alt: "Image 2" },
];

const profiles = [
  { src: "/img2.png", alt: "Profile 1" },
  { src: "/img2.png", alt: "Profile 2" },
  { src: "/img2.png", alt: "Profile 3" },
  { src: "/img2.png", alt: "Profile 4" },
];

const tips = [
  {
    image: "/img2.png",
    title: "엄마가 싫어요",
    subtitle: "1시간•아동인권과 아동학대 예방교육",
  },
  {
    image: "/img2.png",
    title: "[필수교육] 성희롱 예방교육",
    subtitle: "1시간•성희롱 예방 교육",
  },
  {
    image: "/img2.png",
    title: "[필수교육] 아이돌봄 지원 사업 ",
    subtitle: "1시간•아이돌봄 지원사업 및 제도 이해",
  },
  {
    image: "/img2.png",
    title: "직업윤리 및 서비스마인드",
    subtitle: "1시간•직업윤리 및 서비스마인드 교육",
  },
];

const guideImages = [
  { src: "/img2.png", alt: "Guide 1" },
  { src: "/img2.png", alt: "Guide 2" },
  { src: "/img2.png", alt: "Guide 3" },
];

const MainPage = () => {
  return (
    <>
      <NavBar />
      <Container>
        <SwiperComponent images={images} />
        <Subtitle>우리 동네 하모니는 누가 있을까요?</Subtitle>
        <Profiles profiles={profiles} />
        <Subtitle>하모니가 처음이신가요?</Subtitle>
        <NewUserGuide images={guideImages} />
        <Subtitle>맞벌이 부부를 위한 육아 꿀팁</Subtitle>
        <Tips tips={tips} />
      </Container>
      <Footer />
    </>
  );
};

export default MainPage;
