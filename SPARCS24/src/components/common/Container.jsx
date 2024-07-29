import styled from "styled-components";

const Container = ({ children, main = false, ...props }) => {
  return (
    <StyledContainer main={main} {...props}>
      {children}
    </StyledContainer>
  );
};

export default Container;

const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto; /* 중앙 정렬 */
  padding: ${(props) =>
    props.main ? "2rem 5rem 5rem 5rem" : "10rem 7rem"}; /* 여백 조정 */
  box-sizing: border-box; /* 패딩을 너비에 포함 */

  @media (max-width: 768px) {
    padding: ${(props) =>
      props.main ? "1rem" : "0 15px"}; /* 모바일에서 여백 조정 */
  }

  @media (max-width: 480px) {
    padding: ${(props) =>
      props.main ? "0.5rem" : "0 10px"}; /* 더 작은 화면에서 여백 조정 */
  }
`;
