import styled from "styled-components";

const RegisterContainer = ({ children, ...props }) => {
  return (
    <OuterContainer>
      <InnerContainer {...props}>{children}</InnerContainer>
    </OuterContainer>
  );
};

export default RegisterContainer;

const OuterContainer = styled.div`
  background-color: #f5f5f5; // 좌우 여백 색상
  width: 100%;
  min-height: 100vh; // 최소 화면 높이만큼 배경 적용
  display: flex;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 100%;
  max-width: 700px; // 내용의 최대 너비 설정
  padding: 2.5rem 3rem;
  box-sizing: border-box;
  background-color: white; // 내용 영역 배경색

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;
