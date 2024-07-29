import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";

const UpNavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 5rem 0 5rem;
  font-size: 0.9rem;
`;

const DownNavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
`;

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 1.65rem;

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
    <>
      <UpNavBarContainer>
        <LogoWrapper>
          <img src="/logo.png" alt="SPARCS 24th" />
        </LogoWrapper>
        <NavList>
          <NavItem>
            <NavLink href="#">로그인/회원가입</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">고객센터</NavLink>
          </NavItem>
        </NavList>
      </UpNavBarContainer>
      <DownNavBarContainer>
        <NavList>
          <NavItem>
            <NavLink href="#">전체 카테고리</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">교육 강의</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">자기소개 작성</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">문서 작성</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">하모니 찾기</NavLink>
          </NavItem>
        </NavList>
        <NavList>
          <Search>
            <Input placeholder="하모니를 찾아보세요" type="text" />
            <IconSpace>
              <IoIosSearch />
            </IconSpace>
          </Search>
        </NavList>
      </DownNavBarContainer>
    </>
  );
};

export default NavBar;

const LogoWrapper = styled.div`
  img {
    width: 4rem;
  }
`;

const Input = styled.input`
  width: 12.375rem;
  height: 2.1875rem;
  padding: 0.25rem 2rem 0.25rem 0.625rem;
  border: 0.0625rem solid #fff;
  background-color: #ececec;
  box-sizing: border-box;
  border-radius: 0.5rem;
  outline: none;
  position: relative;
  &::placeholder {
    color: #b7b7b7;
  }
`;

const Search = styled.div`
  position: relative;
  height: 2.1875rem;
  margin: auto 0 auto 30.625rem;
`;

const IconSpace = styled.div`
  position: absolute;
  right: 9px;
  top: 9px;
  cursor: pointer;
`;
