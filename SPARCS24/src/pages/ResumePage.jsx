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
    "체력 좋은",
    "소통 능한",
    "응급 대처 능한",
    "인내 좋은",
    "문제 해결 능한",
    "관찰 능한",
    "요리 솜씨 좋은",
    "위생 철저한",
    "감정 조절 능한",
    "안정 있는",
    "문화 존중하는",
    "교육 지식 있는",
    "기술 활용 능한",
    "심리 이해 능한",
    "놀이 능한",
    "정리 능한",
    "적응 능한",
    "세심한",
    "부모 의견에 동의하는",
    "기록을 잘하는",
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
    "잘먹는",
    "집중력있는",
    "규칙을잘지키는",
    "신중한",
    "도전적인",
    "명량한",
    "조심스러운",
    "창의적인",
    "마음이 따듯한",
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
              <SectionTitle>어떤 성격을 가지고 계신가요?</SectionTitle>
              <KeywordInstruction>
                *키워드는 최대 3개까지 선택해주세요
              </KeywordInstruction>
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
              <SectionTitle>어떤 아이를 만나고 싶으신가요?</SectionTitle>
              <KeywordInstruction>
                *키워드는 최대 3개까지 선택해주세요
              </KeywordInstruction>
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

const SectionTitle = styled.h2`
  font-size: 16px;
  margin-bottom: 5px;
`;

const KeywordInstruction = styled.p`
  font-size: 14px;
  color: #f66832;
  margin-bottom: 10px;
`;

const KeywordGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
`;

const KeywordButton = styled.div`
  font-size: 14px;
  padding: 10px 10px;
  border-radius: 6px;
  text-align: center;
  cursor: pointer;
  background-color: ${(props) =>
    props.isSelected ? "#4976EF" : "rgba(180, 200, 255, 0.4)"};
  color: ${(props) => (props.isSelected ? "white" : "#A6A6A6")};
`;

export default ResumePage;
