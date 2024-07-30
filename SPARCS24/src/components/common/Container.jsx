import styled from "styled-components";

const Container = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

export default Container;

const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto; /* 중앙 정렬 */
  padding: 2rem 5rem 2rem 5rem; /* 여백 조정 */
  box-sizing: border-box; /* 패딩을 너비에 포함 */

  @media (max-width: 768px) {
    padding: 1rem; /* 모바일에서 여백 조정 */
  }

  @media (max-width: 480px) {
    padding: 0.5rem; /* 더 작은 화면에서 여백 조정 */
  }
`;
