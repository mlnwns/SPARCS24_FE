import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/common/Container";
import NavBar from "../components/common/NavBar";
import styled from "styled-components";
import axios from "axios";

const serverUrl = import.meta.env.VITE_SERVER_URL;

const ListPage = () => {
  const [harmonyData, setHarmonyData] = useState([]);
  const navigate = useNavigate();

  const imagePaths = [
    "/vector1.png",
    "/vector2.png",
    "/vector3.png",
    "/vector4.png",
    "/vector5.png",
    "/vector6.png",
    "/vector7.png",
    "/vector8.png",
  ];

  useEffect(() => {
    const fetchHarmonyData = async () => {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        console.error("액세스 토큰이 없습니다.");
        return;
      }
      try {
        const response = await axios.get(`${serverUrl}/main/listOfALlHarmony`, {
          headers: {
            access: accessToken,
          },
        });
        if (response.status === 200) {
          const processedData = response.data
            .slice(0, 8)
            .map((item, index) => ({
              ...item,
              imagePath: imagePaths[index],
            }));
          setHarmonyData(processedData);
        }
      } catch (error) {
        console.error("하모니 데이터 가져오기 실패:", error);
      }
    };
    fetchHarmonyData();
  }, []);

  const handleHarmonyClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <NavBar useDetailLogo="true" hideDownNav></NavBar>
      <Container>
        <PageTitle>우리동네 하모니</PageTitle>
        <AI src="aireco.png" />
        <HarmonyGrid>
          {harmonyData.map((harmony) => (
            <HarmonyItem
              key={harmony.id}
              onClick={() => handleHarmonyClick(harmony.id)}
            >
              <Location>{harmony.regin} 하모니</Location>
              <ImageContainer>
                <Image src={harmony.imagePath} alt="Harmony" />
              </ImageContainer>
              <Description>{harmony.title}</Description>
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
  height: 470px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Location = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Description = styled.p`
  text-align: center;
  font-size: 14.9px;
  margin: 10px 0;
`;

const AI = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-bottom: 20px;
`;
