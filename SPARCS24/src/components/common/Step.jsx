import styled from "styled-components";

const Step = ({ number, text, required }) => {
  return (
    <StepContainer>
      <StepNumber>STEP{number}</StepNumber>
      <StepText>
        {text}
        {required && <RequiredAsterisk>*</RequiredAsterisk>}
      </StepText>
    </StepContainer>
  );
};

const StepContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0;
`;

const StepNumber = styled.span`
  color: #4976ef;
  font-size: 18px;
  font-weight: bold;
  margin-right: 1.5rem;
`;

const StepText = styled.span`
  font-size: 22px;
  display: flex;
  align-items: center;
`;

const RequiredAsterisk = styled.span`
  color: red;
  margin-left: 4px;
`;

export default Step;
