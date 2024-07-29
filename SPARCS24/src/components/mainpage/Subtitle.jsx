import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
const SubtitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.5rem;
`;

const Subtitle = styled.h2`
  font-size: 1.3em;
  font-weight: 700;
  margin: 0;
`;

const Icon = styled(IoIosArrowForward)`
  font-size: 1.3em;
`;

const SubtitleWithIcon = ({ children }) => {
  return (
    <SubtitleContainer>
      <Subtitle>{children}</Subtitle>
      <Icon />
    </SubtitleContainer>
  );
};
export default SubtitleWithIcon;
