import { useState, useEffect } from "react";
import axios from "axios";
import SeniorContainer from "../components/common/SeniorContainer";
import NavBar from "../components/common/NavBar";
import styled from "styled-components";
import { MdAddPhotoAlternate, MdAdd } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

const ResumePage = () => {
  const [selectedPersonalityKeywords, setSelectedPersonalityKeywords] =
    useState([]);
  const [selectedChildKeywords, setSelectedChildKeywords] = useState([]);
  const [isGenerateButtonEnabled, setIsGenerateButtonEnabled] = useState(false);
  const [generatedProfile, setGeneratedProfile] = useState("");
  const serverUrl = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {
    setIsGenerateButtonEnabled(
      selectedPersonalityKeywords.length === 3 &&
        selectedChildKeywords.length === 3
    );
  }, [selectedPersonalityKeywords, selectedChildKeywords]);

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

  const sendKeywordsToBackend = async () => {
    const data = {
      f1C: selectedChildKeywords[0],
      f2C: selectedChildKeywords[1],
      f3C: selectedChildKeywords[2],
      f1H: selectedPersonalityKeywords[0],
      f2H: selectedPersonalityKeywords[1],
      f3H: selectedPersonalityKeywords[2],
    };

    const accessToken = localStorage.getItem("accessToken");

    try {
      const putResponse = await axios.put(`${serverUrl}/main/addFeat`, data, {
        headers: {
          access: accessToken,
        },
      });
      console.log("Keywords sent successfully:", putResponse.data);

      const getResponse = await axios.get(`${serverUrl}/main/makeHProfile`, {
        headers: {
          access: accessToken,
        },
      });
      console.log("Profile generated successfully:", getResponse.data);
      setGeneratedProfile(getResponse.data);
    } catch (error) {
      console.error("Error in request:", error);
      alert("요청 중 오류가 발생했습니다.");
    }
  };

  const handleProfileChange = (e) => {
    setGeneratedProfile(e.target.value);
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
                <UploadIcon>
                  <MdAddPhotoAlternate size={24} />
                </UploadIcon>
                사진을 업로드해주세요 (최소 3개)
              </UploadButton>
            </PhotoUploadSection>
            <KeywordSection>
              <TitleWrapper>
                <SectionTitle>어떤 성격을 가지고 계신가요?</SectionTitle>
                <KeywordInstruction>
                  *키워드를 정확히 3개 선택해주세요 (
                  {selectedPersonalityKeywords.length}/3)
                </KeywordInstruction>
              </TitleWrapper>
              <KeywordGrid>
                {personalityKeywords.map((keyword, index) => (
                  <KeywordButton
                    key={index}
                    onClick={() => handleKeywordClick(keyword, "personality")}
                    isSelected={selectedPersonalityKeywords.includes(keyword)}
                    disabled={
                      selectedPersonalityKeywords.length >= 3 &&
                      !selectedPersonalityKeywords.includes(keyword)
                    }
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
                  *키워드를 정확히 3개 선택해주세요 (
                  {selectedChildKeywords.length}/3)
                </KeywordInstruction>
              </TitleWrapper>
              <KeywordGrid>
                {childKeywords.map((keyword, index) => (
                  <KeywordButton
                    key={index}
                    onClick={() => handleKeywordClick(keyword, "child")}
                    isSelected={selectedChildKeywords.includes(keyword)}
                    disabled={
                      selectedChildKeywords.length >= 3 &&
                      !selectedChildKeywords.includes(keyword)
                    }
                  >
                    {keyword}
                  </KeywordButton>
                ))}
              </KeywordGrid>
            </KeywordSection>
            <KeywordSection>
              <TitleWrapper>
                <SectionTitle>은퇴 전 경력을 작성해주세요</SectionTitle>
              </TitleWrapper>
              <AddCareerButton>
                <AddIcon>
                  <MdAdd size={24} />
                </AddIcon>
                경력사항 추가
              </AddCareerButton>
            </KeywordSection>
            <GenerateButtonWrapper>
              <GenerateButton
                onClick={sendKeywordsToBackend}
                disabled={!isGenerateButtonEnabled}
              >
                <span>생성하기</span>
                <IoIosArrowForward size={20} />
              </GenerateButton>
            </GenerateButtonWrapper>
          </LeftSection>
          <RightSection>
            {generatedProfile ? (
              <ProfileTextArea
                value={generatedProfile}
                onChange={handleProfileChange}
                placeholder="생성된 자기소개서를 편집할 수 있습니다."
              />
            ) : (
              <>
                자기소개서 작성을 위한 기본 정보를 입력해주세요
                <br /> 인공지능이 만든 글이 여기에 노출됩니다
              </>
            )}
          </RightSection>
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
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.6;
  text-align: center;
`;

const PhotoUploadSection = styled.div`
  margin-bottom: 20px;
`;

const UploadLabel = styled.p`
  font-size: 16px;
  margin-bottom: 1.2rem;
`;

const RequiredMark = styled.span`
  color: #e14942;
`;

const UploadButton = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 7px;
  cursor: pointer;
  background-color: #ebebeb;
  color: #777777;
`;

const UploadIcon = styled.span`
  margin-right: 10px;
  display: flex;
  align-items: center;
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
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background-color: ${(props) =>
    props.isSelected
      ? "#4976EF"
      : props.disabled
      ? "#CCCCCC"
      : "rgba(180, 200, 255, 0.4)"};
  color: ${(props) =>
    props.isSelected ? "white" : props.disabled ? "#999999" : "#A6A6A6"};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const AddCareerButton = styled(UploadButton)``;

const AddIcon = styled(UploadIcon)`
  margin-right: 5px;
`;

const GenerateButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;

const GenerateButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 230px;
  padding: 14px 16px;
  background-color: ${(props) => (props.disabled ? "#8ba3e6" : "#4976ef")};
  color: white;
  border: none;
  border-radius: 7px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-size: 16px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  span {
    margin-right: 20px;
  }
`;

const ProfileTextArea = styled.textarea`
  width: 90%;
  height: 70%;
  border: none;
  border-radius: 10px;
  padding: 5rem 1rem;
  margin-right: 20px;
  resize: none;
  font-size: 16px;
  line-height: 1.6;
  background-color: #f4f4f4;
  font-family: inherit; // 기존 폰트 상속
  &:focus {
    outline: none;
    box-shadow: none; // 포커스 시 테두리 제거
  }
`;

export default ResumePage;
