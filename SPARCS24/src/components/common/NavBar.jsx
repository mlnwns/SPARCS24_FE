import styled from "styled-components";

const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f8f9fa;
`;

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 1.3rem;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #6b6b6b;
  font-weight: 500;

  &:hover {
    color: #2f2f2f;
  }
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavList>
        <NavItem>
          <NavLink href="#">자기소개서 작성</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">문서 작성</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">AI 연결</NavLink>
        </NavItem>
      </NavList>
      <NavList>
        <NavItem>
          <NavLink href="#">검색</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">마이페이지</NavLink>
        </NavItem>
      </NavList>
    </NavBarContainer>
  );
};

export default NavBar;
