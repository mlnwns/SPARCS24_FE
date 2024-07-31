import React, { useState } from "react";
import SeniorContainer from "../components/common/SeniorContainer";
import NavBar from "../components/common/NavBar";
import styled from "styled-components";

const ResumePage = () => {
  const [selectedPersonalityKeywords, setSelectedPersonalityKeywords] =
    useState([]);
  const [selectedChildKeywords, setSelectedChildKeywords] = useState([]);

  const handleKeywordClick = (keyword, type) => {
    if (type === "personality") {
      if (selectedPersonalityKeywords.includes(keyword)) {
        setSelectedPersonalityKeywords(
          selectedPersonalityKeywords.filter((k) => k !== keyword)
        );
      } else if (selectedPersonalityKeywords.length < 3) {
        setSelectedPersonalityKeywords([
          ...selectedPersonalityKeywords,
          keyword,
        ]);
      }
    } else if (type === "child") {
      if (selectedChildKeywords.includes(keyword)) {
        setSelectedChildKeywords(
          selectedChildKeywords.filter((k) => k !== keyword)
        );
      } else if (selectedChildKeywords.length < 3) {
        setSelectedChildKeywords([...selectedChildKeywords, keyword]);
      }
    }
  };

  const personalityKeywords = [
    "책임감 있는",
    "강건한",
    "사교적인",
    "따뜻한",
    "예리한",
    "손맛 좋은",
    "깔끔한",
    "정돈된",
    "해결가능한",
    "통찰력 있는",
    "차분한",
    "끈기있는",
    "포용적인",
    "학식있는",
    "활용 능숙한",
    "다재다능한",
    "유연한",
    "세심한",
    "협조적인",
    "꼼꼼한",
    "다정한",
  ];

  const childKeywords = [
    "활발한",
    "예의바른",
    "사교적인",
    "감성적인",
    "잘웃는",
    "차분한",
    "독립적인",
    "용감한",
    "잘 먹는",
    "집중력있는",
    "준법적인",
    "신중한",
    "도전적인",
    "명량한",
    "조심스러운",
    "창의적인",
    "자상한",
    "엉뚱한",
    "유머러스한",
    "다정한",
    "수다스러운",
  ];

  return (
    <>
      <NavBar senior="true" hideDownNav="true" />
      <SeniorContainer>
        <PageTitle>하모니 자기소개서</PageTitle>
        <ContentWrapper>
          <LeftSection>
            <PhotoUploadSection>
              <UploadLabel>
                사진을 업로드 해주세요. <RequiredMark>*필수</RequiredMark>
              </UploadLabel>
              <UploadButton>
                <UploadIcon>📷</UploadIcon>
                사진을 추가해주세요
              </UploadButton>
            </PhotoUploadSection>
            <KeywordSection>
              <TitleWrapper>
                <SectionTitle>어떤 성격을 가지고 계신가요?</SectionTitle>
                <KeywordInstruction>
                  *키워드는 최대 3개까지 선택해주세요
                </KeywordInstruction>
              </TitleWrapper>
              <KeywordGrid>
                {personalityKeywords.map((keyword, index) => (
                  <KeywordButton
                    key={index}
                    onClick={() => handleKeywordClick(keyword, "personality")}
                    isSelected={selectedPersonalityKeywords.includes(keyword)}
                  >
                    {keyword}
                  </KeywordButton>
                ))}
              </KeywordGrid>
            </KeywordSection>
            <KeywordSection>
              <TitleWrapper>
                <SectionTitle>어떤 아이를 만나고 싶으신가요?</SectionTitle>
                <KeywordInstruction>
                  *키워드는 최대 3개까지 선택해주세요
                </KeywordInstruction>
              </TitleWrapper>
              <KeywordGrid>
                {childKeywords.map((keyword, index) => (
                  <KeywordButton
                    key={index}
                    onClick={() => handleKeywordClick(keyword, "child")}
                    isSelected={selectedChildKeywords.includes(keyword)}
                  >
                    {keyword}
                  </KeywordButton>
                ))}
              </KeywordGrid>
            </KeywordSection>
          </LeftSection>
          <RightSection>{/* 생성된 글 노출 영역 */}</RightSection>
        </ContentWrapper>
      </SeniorContainer>
    </>
  );
};

const PageTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const LeftSection = styled.div`
  width: 50%;
  padding-right: 20px;
`;

const RightSection = styled.div`
  width: 50%;
  padding-left: 20px;
  background-color: #f4f4f4;
`;

const PhotoUploadSection = styled.div`
  margin-bottom: 20px;
`;

const UploadLabel = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const RequiredMark = styled.span`
  color: #e14942;
`;

const UploadButton = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
`;

const UploadIcon = styled.span`
  margin-right: 10px;
`;

const KeywordSection = styled.div`
  margin-bottom: 20px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
  margin-top: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 16px;
  margin-right: 10px;
`;

const KeywordInstruction = styled.p`
  font-size: 14px;
  color: #f66832;
`;

const KeywordGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
`;

const KeywordButton = styled.div`
  font-size: 14px;
  padding: 13px 0px;
  border-radius: 6px;
  text-align: center;
  cursor: pointer;
  background-color: ${(props) =>
    props.isSelected ? "#4976EF" : "rgba(180, 200, 255, 0.4)"};
  color: ${(props) => (props.isSelected ? "white" : "#A6A6A6")};
`;

export default ResumePage;
