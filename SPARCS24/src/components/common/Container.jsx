import styled from "styled-components";

const Container = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

export default Container;

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1200px; // 최대 너비 설정
  margin: 0 auto; // 중앙 정렬
  padding: 5rem 2rem;
  box-sizing: border-box; // 패딩을 너비에 포함

  @media (max-width: 768px) {
    padding: 0 15px;
  }

  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;
