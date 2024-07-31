import React, { useState } from "react";
import Container from "../components/common/Container";
import NavBar from "../components/common/NavBar";
import styled from "styled-components";
import Step from "../components/common/Step";
import { FaCircle, FaCheckCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import axios from "axios";

const serverUrl = import.meta.env.VITE_SERVER_URL;

const CoverLetterPage = () => {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [title, setTitle] = useState("");
  const [extraExplainText, setExtraExplainText] = useState("");
  const [leaveTime, setLeaveTime] = useState("");
  const [travelTime, setTravelTime] = useState("");
  const [showLeaveTimeDropdown, setShowLeaveTimeDropdown] = useState(false);
  const [showTravelTimeDropdown, setShowTravelTimeDropdown] = useState(false);
  const [childLeaveTime, setChildLeaveTime] = useState("");
  const [showChildLeaveTimeDropdown, setShowChildLeaveTimeDropdown] =
    useState(false);
  const [assistantRequest, setAssistantRequest] = useState("신청");

  const leaveTimeOptions = ["17:00", "18:00", "19:00", "20:00", "21:00"];
  const travelTimeOptions = [
    "30분",
    "1시간",
    "1시간 30분",
    "2시간",
    "2시간 30분",
  ];
  const childLeaveTimeOptions = [
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
  ];

  const handleSave = async () => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      alert("로그인이 필요합니다.");
      return;
    }

    try {
      const postResponse = await axios.post(
        `${serverUrl}/main/addCFeat`,
        {
          title: title,
          sex: gender === "female" ? "F" : "M",
          age: age,
          extraExplainText: extraExplainText,
        },
        {
          headers: {
            access: accessToken,
          },
        }
      );

      if (postResponse.status === 200) {
        const putResponse = await axios.put(
          `${serverUrl}/main/saveCKeyword`,
          {},
          {
            headers: {
              access: accessToken,
            },
          }
        );

        if (putResponse.status === 200) {
          alert("이력서가 성공적으로 저장되었습니다.");
        } else {
          alert("키워드 저장에 실패했습니다.");
        }
      }
    } catch (error) {
      console.error("이력서 저장 중 오류 발생:", error);
      alert("이력서 저장에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <>
      <NavBar useDetailLogo="true" hideDownNav={true}></NavBar>
      <Container>
        <PageTitle>우리 아이 소개서</PageTitle>
        <SubTitle>부모님 정보 입력</SubTitle>
        <Step number={1} required text="이력서의 제목을 작성하세요" />
        <InputGuide
          placeholder="우리아이의 특징이 보이게 하는 한 문장(최소 5자 이상)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Step
          number={2}
          text="아이와 본인의 사진, 혹은 함께찍은 사진을 업로드해주세요"
        />
        <GuideText>사진을 업로드해주세요</GuideText>
        <Step
          number={3}
          text="현재 다니고 계신 직장의 퇴근시간과 퇴근 후 집까지 걸리는 시간을 알려주세요"
        />
        <TimeContainer>
          <TimeDropdownWrapper>
            <TimeDropdown
              onClick={() => setShowLeaveTimeDropdown(!showLeaveTimeDropdown)}
            >
              <span>{leaveTime || "퇴근시간"}</span>
              <IoIosArrowDown />
            </TimeDropdown>
            {showLeaveTimeDropdown && (
              <DropdownList>
                {leaveTimeOptions.map((time) => (
                  <DropdownItem
                    key={time}
                    onClick={() => {
                      setLeaveTime(time);
                      setShowLeaveTimeDropdown(false);
                    }}
                  >
                    {time}
                  </DropdownItem>
                ))}
              </DropdownList>
            )}
          </TimeDropdownWrapper>
          <TimeDropdownWrapper>
            <TimeDropdown
              onClick={() => setShowTravelTimeDropdown(!showTravelTimeDropdown)}
            >
              <span>{travelTime || "이동시간"}</span>
              <IoIosArrowDown />
            </TimeDropdown>
            {showTravelTimeDropdown && (
              <DropdownList>
                {travelTimeOptions.map((time) => (
                  <DropdownItem
                    key={time}
                    onClick={() => {
                      setTravelTime(time);
                      setShowTravelTimeDropdown(false);
                    }}
                  >
                    {time}
                  </DropdownItem>
                ))}
              </DropdownList>
            )}
          </TimeDropdownWrapper>
        </TimeContainer>
        <SubTitle>아이 정보 입력</SubTitle>
        <Step number={1} required text="아이의 이름을 적어주세요" />
        <InputGuide placeholder="우리 아이의 이름을 적어주세요(최대 5자 이하)" />
        <Step number={2} required text="아이의 성별을 선택해주세요" />
        <GenderContainer>
          <GenderOption
            selected={gender === "female"}
            onClick={() => setGender("female")}
          >
            <span>여자 아이</span>
            {gender === "female" ? (
              <FaCheckCircle color="#FFF" />
            ) : (
              <FaCircle
                color="#d4d4d4"
                style={{ stroke: "#8b8b8b", strokeWidth: 1 }}
              />
            )}
          </GenderOption>
          <GenderOption
            selected={gender === "male"}
            onClick={() => setGender("male")}
          >
            <span>남자 아이</span>
            {gender === "male" ? (
              <FaCheckCircle color="#FFF" />
            ) : (
              <FaCircle
                color="#d4d4d4"
                style={{ stroke: "#D2D2D2", strokeWidth: 1 }}
              />
            )}
          </GenderOption>
        </GenderContainer>
        <Step number={3} required text="아이의 나이를 알려주세요" />
        <AgeContainer>
          {["6세 이하", "7세", "8세", "9세", "10세 이상"].map((ageOption) => (
            <AgeOption
              key={ageOption}
              selected={age === ageOption}
              onClick={() => setAge(ageOption)}
            >
              {ageOption}
            </AgeOption>
          ))}
        </AgeContainer>
        <Step
          number={4}
          text="아이의 하원시간과 하원 도우미 신청 여부를 알려주세요"
        />
        <ChildLeaveTimeContainer>
          <ChildLeaveTimeDropdown
            onClick={() =>
              setShowChildLeaveTimeDropdown(!showChildLeaveTimeDropdown)
            }
          >
            <span>{childLeaveTime || "하원시간"}</span>
            <IoIosArrowDown />
            {showChildLeaveTimeDropdown && (
              <DropdownList>
                {childLeaveTimeOptions.map((time) => (
                  <DropdownItem
                    key={time}
                    onClick={() => {
                      setChildLeaveTime(time);
                      setShowChildLeaveTimeDropdown(false);
                    }}
                  >
                    {time}
                  </DropdownItem>
                ))}
              </DropdownList>
            )}
          </ChildLeaveTimeDropdown>
          <AssistantRequestContainer>
            <AssistantRequestOption
              selected={assistantRequest === "신청"}
              onClick={() => setAssistantRequest("신청")}
            >
              신청
            </AssistantRequestOption>
            <AssistantRequestOption
              selected={assistantRequest === "미신청"}
              onClick={() => setAssistantRequest("미신청")}
            >
              미신청
            </AssistantRequestOption>
          </AssistantRequestContainer>
        </ChildLeaveTimeContainer>
        <Step
          number={5}
          required
          text="특별히 주의할 사항(예: 알러지)과 아이의 성격을 포함하여 아이를 소개하는 글을 작성해주세요"
        />
        <ChildDescriptionInput
          placeholder="하모니가 알아야 하는 우리 아이의 성격과 주의사항을 적어주세요.(최소 20자 필수)"
          value={extraExplainText}
          onChange={(e) => setExtraExplainText(e.target.value)}
        />
        <CenteredContent>
          <AIMatchingText>
            입력한 글을 바탕으로 최신 AI가 아이의 특징을 파악해 적합한 하모니를
            매칭시켜 줍니다.
          </AIMatchingText>
          <ButtonContainer>
            <TempSaveButton>임시저장</TempSaveButton>
            <SaveButton onClick={handleSave}>이력서 저장</SaveButton>
          </ButtonContainer>
        </CenteredContent>
      </Container>
    </>
  );
};

export default CoverLetterPage;

const TimeContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  margin-bottom: 4rem;
`;

const TimeDropdownWrapper = styled.div`
  position: relative;
  width: 50%;
`;

const TimeDropdown = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 23px 20px;
  background-color: #ffffff;
  border: 1px solid #d2d2d2;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  color: #333;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #ffffff;
  border: 1px solid #d2d2d2;
  border-top: none;
  list-style-type: none;
  padding: 0.4rem;
  margin-top: -6px;
  z-index: 1;
  max-height: 200px;
  overflow-y: auto;
`;

const ChildLeaveTimeContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  margin-bottom: 20px;
`;

const ChildLeaveTimeDropdown = styled.div`
  position: relative;
  width: 50%;
  display: flex;

  justify-content: space-between;
  align-items: center;
  padding: 23px 20px;
  background-color: #ffffff;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  color: #333;
`;

const AssistantRequestContainer = styled.div`
  display: flex;
  width: 50%;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #e0e0e0;
`;

const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 40px;
  justify-content: center;
`;

const PageTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 60px;
  font-weight: bold;
`;

const SubTitle = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 50px;
`;

const GuideText = styled.div`
  width: 97%;
  background-color: #ebebeb;
  color: #777777;
  font-size: 20px;
  padding: 25px 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const InputGuide = styled.input`
  width: 97%;
  background-color: #ebebeb;
  color: #777777;
  font-size: 20px;
  padding: 25px 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  font-family: inherit;

  &::placeholder {
    color: #777777;
    font-family: inherit;
  }
`;

const DropdownItem = styled.li`
  padding: 10px 20px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const GenderContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  margin-bottom: 20px;
`;

const GenderOption = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 23px 20px;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "#4976EF" : "#FFFFFF")};
  color: ${(props) => (props.selected ? "#FFFFFF" : "#777777")};
  border: 1px solid #e0e0e0;

  svg {
    font-size: 20px;
  }
`;

const AgeContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  margin-bottom: 20px;
`;

const AgeOption = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 23px 0;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "#4976EF" : "#EBEBEB")};
  color: ${(props) => (props.selected ? "#FFFFFF" : "#777777")};
  border: 1px solid #e0e0e0;
`;

const AssistantRequestOption = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "#4976EF" : "#FFFFFF")};
  color: ${(props) => (props.selected ? "#FFFFFF" : "#777777")};
`;

const ChildDescriptionInput = styled.textarea`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  border: 1px solid #a6a6a6;
  padding: 15px;
  font-size: 16px;
  resize: none;
  margin-bottom: 6rem;
  font-family: inherit;

  &::placeholder {
    color: #777777;
    font-family: inherit;
  }
`;

const AIMatchingText = styled.p`
  font-size: 20px;
  color: #333;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 17px 40px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  font-size: 16px;
  border: none;
`;

const TempSaveButton = styled(Button)`
  background-color: #ffffff;
  color: #333;
  border: 1px solid #e0e0e0;
`;

const SaveButton = styled(Button)`
  background-color: #4976ef;
  color: #ffffff;
`;
