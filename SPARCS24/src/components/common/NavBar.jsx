import { useState, useEffect } from "react";
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const UpNavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) =>
    props.senior ? "3rem 3rem 0 3rem" : "3rem 5rem 0 5rem"};
  font-size: 1rem;
`;

const DownNavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.15rem;
  padding: ${(props) => (props.senior ? "1rem 3rem" : "1rem 5rem")};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: #2f2f2f;
  }
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

const LogoWrapper = styled.div`
  img {
    width: 10rem;
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 13.5rem;
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

const NavBar = ({ senior, hideDownNav, useDetailLogo }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userRole");
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleLogoClick = () => {
    const userRole = JSON.parse(localStorage.getItem("userRole"));
    if (userRole === true || userRole === "true") {
      navigate("/");
    } else if (userRole === false || userRole === "false") {
      navigate("/senior");
    } else {
      navigate("/");
    }
  };

  const logoSrc = useDetailLogo ? "/detail-logo.png" : "/logo.png";

  return (
    <>
      <UpNavBarContainer senior={senior}>
        <LogoWrapper onClick={handleLogoClick}>
          <img src={logoSrc} alt="logo" />
        </LogoWrapper>
        <NavList>
          <NavItem>
            {isLoggedIn ? (
              <StyledLink to="/" onClick={handleLogout}>
                로그아웃
              </StyledLink>
            ) : (
              <StyledLink to="/login">로그인/회원가입</StyledLink>
            )}
          </NavItem>
          <NavItem>
            <NavLink href="#">고객센터</NavLink>
          </NavItem>
        </NavList>
      </UpNavBarContainer>
      {!hideDownNav && (
        <DownNavBarContainer senior={senior}>
          {senior ? (
            <NavList>
              <NavItem>
                <NavLink href="#">필수 교육</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/senior/resume">자기소개 작성</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">하모니 사례</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">문서 작성</NavLink>
              </NavItem>
            </NavList>
          ) : (
            <NavList>
              <NavItem>
                <NavLink href="/parent/cover-letter">자녀 정보 등록</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/list">하모니 찾기</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">하모니 사례</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">육아 꿀팁</NavLink>
              </NavItem>
            </NavList>
          )}
          <NavList>
            <Search>
              <Input placeholder="하모니를 찾아보세요" type="text" />
              <IconSpace>
                <IoIosSearch />
              </IconSpace>
            </Search>
          </NavList>
        </DownNavBarContainer>
      )}
    </>
  );
};

export default NavBar;
