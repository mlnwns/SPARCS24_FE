import Container from "../components/common/Container";
import NavBar from "../components/common/NavBar";
import styled from "styled-components";

const ListPage = () => {
  const harmonyData = [
    {
      id: 1,
      location: "정릉동",
      description: "아이의 모든 것을 책임지는 하모니입니다.",
      imagePath: "/vector1.png",
    },
    {
      id: 2,
      location: "정릉동",
      description: "아이의 모든 것을 책임지는 하모니입니다.",
      imagePath: "/vector2.png",
    },
    {
      id: 3,
      location: "정릉동",
      description: "아이의 모든 것을 책임지는 하모니입니다.",
      imagePath: "/vector3.png",
    },
    {
      id: 4,
      location: "정릉동",
      description: "아이의 모든 것을 책임지는 하모니입니다.",
      imagePath: "/vector4.png",
    },
    {
      id: 5,
      location: "정릉동",
      description: "아이의 모든 것을 책임지는 하모니입니다.",
      imagePath: "/vector5.png",
    },
    {
      id: 6,
      location: "정릉동",
      description: "아이의 모든 것을 책임지는 하모니입니다.",
      imagePath: "/vector6.png",
    },
    {
      id: 7,
      location: "정릉동",
      description: "아이의 모든 것을 책임지는 하모니입니다.",
      imagePath: "/vector7.png",
    },
    {
      id: 8,
      location: "정릉동",
      description: "아이의 모든 것을 책임지는 하모니입니다.",
      imagePath: "/vector8.png",
    },
  ];

  return (
    <>
      <NavBar useDetailLogo="true" hideDownNav></NavBar>
      <Container>
        <PageTitle>우리동네 하모니</PageTitle>
        <HarmonyGrid>
          {harmonyData.map((harmony) => (
            <HarmonyItem key={harmony.id}>
              <Location>{harmony.location} 하모니</Location>
              <Image src={harmony.imagePath} alt="Harmony" />
              <Description>{harmony.description}</Description>
            </HarmonyItem>
          ))}
        </HarmonyGrid>
      </Container>
    </>
  );
};

export default ListPage;

const PageTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: bold;
`;

const HarmonyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 20px;
`;

const HarmonyItem = styled.div`
  background-color: #eeeeee;
  border-radius: 10px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Location = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 100%;
  margin-bottom: 20px;
`;

const Description = styled.p`
  text-align: center;
  font-size: 16px;
`;
