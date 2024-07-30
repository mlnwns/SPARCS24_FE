import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const InputWithIconWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

const LabelWrapper = styled.div`
  width: 120px;
  position: relative;
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
`;

const RequiredDot = styled.span`
  color: red;
  font-size: 1.2rem;
  margin-left: 2px;
`;

const InputWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border-radius: 4px;
  background-color: ${(props) => (props.$completed ? "#f0f0f0" : "white")};
  border: ${(props) => (props.$completed ? "0px" : "1px solid #ccc")};
`;

const Button = styled.button`
  margin-left: 0.5rem;
  padding: 0.8rem 0.75rem;
  font-size: 0.9rem;
  background-color: ${(props) => (props.$completed ? "#a0a0a0" : "#424242")};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.$completed ? "default" : "pointer")};
  white-space: nowrap;

  &:hover {
    background-color: ${(props) => (props.$completed ? "#a0a0a0" : "#0056b3")};
  }
`;

const InputWithIcon = styled(Input)`
  padding-right: 35px;
  width: calc(100% - 35px);
`;

const LabeledInput = ({
  label,
  required,
  buttonText,
  completed,
  isAddress,
  onAddressSearch,
  ...inputProps
}) => {
  return (
    <InputContainer>
      <LabelWrapper>
        <Label>{label}</Label>
        {required && <RequiredDot>*</RequiredDot>}
      </LabelWrapper>
      <InputWrapper>
        {isAddress ? (
          <InputWithIconWrapper>
            <InputWithIcon {...inputProps} $completed={completed} />
            <IconWrapper onClick={onAddressSearch}>
              <FaSearch />
            </IconWrapper>
          </InputWithIconWrapper>
        ) : (
          <Input {...inputProps} $completed={completed} />
        )}
        {buttonText && <Button $completed={completed}>{buttonText}</Button>}
      </InputWrapper>
    </InputContainer>
  );
};

export default LabeledInput;
