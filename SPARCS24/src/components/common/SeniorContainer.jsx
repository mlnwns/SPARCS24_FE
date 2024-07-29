import styled from "styled-components";

const SeniorContainer = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

export default SeniorContainer;

const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto; /* 중앙 정렬 */
  padding: 2rem 3rem 5rem 3rem;
  box-sizing: border-box; /* 패딩을 너비에 포함 */

  @media (max-width: 768px) {
    padding: "1rem";
  }

  @media (max-width: 480px) {
    padding: "0.5rem";
  }
`;
