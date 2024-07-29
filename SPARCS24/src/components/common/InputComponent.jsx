import { useState } from "react";
import styled from "styled-components";
import { BiShow, BiHide } from "react-icons/bi";
import PropTypes from "prop-types";

const widthSizes = {
  sm: "300px",
  m: "400px",
  lg: "600px",
};

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
  width: ${(props) => widthSizes[props.size] || widthSizes.m};
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 0.75rem; /* 간격 조정 */
  font-weight: bold;
  font-size: 1.2rem; /* 폰트 크기 증가 */
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem 0;
  padding-right: 2.5rem;

  border: none;
  border-bottom: 1px solid #ccc; /* 하단에만 선 */
  border-radius: 0;
  font-size: 1rem;
  outline: none; /* 클릭 시 외곽선 제거 */
`;

const ToggleButton = styled.button`
  font-size: 1.2rem;
  position: absolute;
  right: -2.5rem; /* 원하는 위치로 조정 */
  top: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  color: #aaa; /* 아이콘 색상 변경 */
`;

const InputComponent = ({
  label,
  type = "text",
  showToggle = false,
  size = "m",
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <InputWrapper size={size}>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput type={isVisible && showToggle ? "text" : type} {...props} />
      {showToggle && (
        <ToggleButton type="button" onClick={toggleVisibility}>
          {isVisible ? <BiHide /> : <BiShow />}
        </ToggleButton>
      )}
    </InputWrapper>
  );
};

InputComponent.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  showToggle: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "m", "lg"]),
};

export default InputComponent;
