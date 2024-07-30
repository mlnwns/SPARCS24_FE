import styled from "styled-components";
import {
  IoSearchOutline,
  IoDocumentTextOutline,
  IoHelpCircleOutline,
} from "react-icons/io5";
import { HiOutlinePencilSquare } from "react-icons/hi2";

const TabContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 3rem;
  border: 0.0625rem solid #ccc;
  border-radius: 10px;
  background-color: #ffffff;
  margin-top: 1rem;
`;

const TabList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
  justify-content: space-between;
`;

const TabItem = styled.li`
  flex: 1;
  text-align: center;
  padding: 1rem 0;
  color: #343434;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:last-child) {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 1rem;
      background-color: #4a4a4a;
    }
  }
`;

const TabLink = styled.a`
  text-decoration: none;
  color: #4d4d4d;
  font-weight: 500;
  display: flex;
  align-items: center;

  &:hover {
    color: #4a4a4a;
  }

  svg {
    margin-right: 0.5rem;
  }
`;

const TabComponent = () => {
  return (
    <TabContainer>
      <TabList>
        <TabItem>
          <TabLink href="#">
            <IoSearchOutline /> 진행 상태 조회
          </TabLink>
        </TabItem>
        <TabItem>
          <TabLink href="#">
            <IoDocumentTextOutline /> AI 자기소개
          </TabLink>
        </TabItem>
        <TabItem>
          <TabLink href="#">
            <HiOutlinePencilSquare /> AI 문서작성
          </TabLink>
        </TabItem>
        <TabItem>
          <TabLink href="#">
            <IoHelpCircleOutline fontSize={"1.1rem"} /> 도움말
          </TabLink>
        </TabItem>
      </TabList>
    </TabContainer>
  );
};

export default TabComponent;
