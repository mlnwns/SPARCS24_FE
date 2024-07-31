import React, { useState, useEffect } from "react";
import NavBar from "../components/common/NavBar";
import SeniorContainer from "../components/common/SeniorContainer";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import axios from "axios";

const serverUrl = import.meta.env.VITE_SERVER_URL;

const DetailPage = () => {
  const [harmonyData, setHarmonyData] = useState(null);
  const [showFullIntroduction, setShowFullIntroduction] = useState(false);
  const accountId = 0; // 우선 0으로 설정

  useEffect(() => {
    const fetchHarmonyData = async () => {
      const accessToken = localStorage.getItem("accessToken");

      if (!accessToken) {
        console.error("액세스 토큰이 없습니다.");
        return;
      }

      try {
        const response = await axios.get(
          `${serverUrl}/main/Harmony/${accountId}`,
          {
            headers: {
              access: accessToken,
            },
          }
        );

        if (response.status === 200) {
          setHarmonyData(response.data);
        }
      } catch (error) {
        console.error("하모니 데이터 가져오기 실패:", error);
      }
    };

    fetchHarmonyData();
  }, [accountId]);

  if (!harmonyData) return null; // 데이터 로딩 중일 때

  const toggleIntroduction = () => {
    setShowFullIntroduction(!showFullIntroduction);
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <>
      <NavBar useDetailLogo="true" senior="true" hideDownNav="true" />
      <SeniorContainer>
        <PageLayout>
          <LeftSection>
            <Title>{harmonyData.extraExplainText}</Title>
            <NameSection>
              <NameAddressRow>
                <Name>{harmonyData.name}</Name>
                <Address>• {harmonyData.regin}</Address>
              </NameAddressRow>
              <AgeInfo>{harmonyData.age}</AgeInfo>
            </NameSection>
            <IntroductionHeader>
              <SubTitle>자기소개</SubTitle>
              <ViewAll onClick={toggleIntroduction}>
                {showFullIntroduction ? "접기" : "전체보기"}
              </ViewAll>
            </IntroductionHeader>
            <Introduction>
              {showFullIntroduction
                ? harmonyData.explainText
                : truncateText(harmonyData.explainText, 200)}
            </Introduction>
            <SectionTitle>성격</SectionTitle>
            <KeywordContainer>
              <Keyword>#{harmonyData.f1H}</Keyword>
              <Keyword>#{harmonyData.f2H}</Keyword>
              <Keyword>#{harmonyData.f3H}</Keyword>
            </KeywordContainer>
            <SectionTitle>만나고 싶은 아이 유형</SectionTitle>
            <KeywordContainer>
              <Keyword>#{harmonyData.f1C}</Keyword>
              <Keyword>#{harmonyData.f2C}</Keyword>
              <Keyword>#{harmonyData.f3C}</Keyword>
            </KeywordContainer>
          </LeftSection>
          <RightSection>
            <ImageContainer>
              <Image src="/seniordetail1.png" alt="Image 1" />
              <Image src="/seniordetail2.png" alt="Image 2" />
              <Image src="/seniordetail3.png" alt="Image 3" />
            </ImageContainer>
            <SectionCareer>경력</SectionCareer>
            <InfoBox>
              <InfoText>Naver | 영양사 • 2022.03-07</InfoText>
              <FaCheck color="#858585" size={18} />
            </InfoBox>
            <SectionTitle>학부모 한줄평</SectionTitle>
            <InfoBox>
              <NoReviewText>아직 이용고객이 없습니다.</NoReviewText>
            </InfoBox>
          </RightSection>
        </PageLayout>
      </SeniorContainer>
    </>
  );
};

export default DetailPage;

const PageLayout = styled.div`
  display: flex;
  gap: 50px;
`;

const LeftSection = styled.div`
  flex: 1;
`;

const RightSection = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
  font-weight: bold;
`;

const NameSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const NameAddressRow = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 8px;
  font-weight: bold;
`;

const Name = styled.h2`
  font-size: 20px;
  margin-right: 8px;
`;

const Address = styled.span`
  font-size: 20px;
  color: #656565;
`;

const AgeInfo = styled.span`
  font-size: 18px;
  color: #c7c7c7;
  margin-top: 5px;
`;

const IntroductionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 3rem;
`;

const SubTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
`;

const ViewAll = styled.span`
  font-size: 16px;
  color: #797979;
  cursor: pointer;
`;

const Introduction = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: #656565;
`;

const SectionTitle = styled.h3`
  font-size: 24px;
  margin-top: 3rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const SectionCareer = styled.h3`
  font-size: 24px;
  margin-top: 0rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const KeywordContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 3rem;
`;

const Keyword = styled.div`
  padding: 15px 16px;
  border-radius: 10px;
  background-color: rgba(180, 200, 255, 0.3);
  font-size: 16px;
  color: #656565;
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 3.8rem;
`;

const Image = styled.img`
  height: 290px;
  object-fit: cover;
  flex: 1;
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  margin-bottom: 3rem;
`;

const InfoText = styled.p`
  font-size: 18px;
  color: #656565;
`;

const NoReviewText = styled(InfoText)`
  color: #bababa;
`;
