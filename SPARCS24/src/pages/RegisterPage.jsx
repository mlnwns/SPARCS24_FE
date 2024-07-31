import Container from "../components/common/Container";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleParentRegister = () => {
    navigate("/register/parent");
  };

  const handleSeniorRegister = () => {
    navigate("/register/senior");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <StyledContainer>
      <TitleContainer>
        <Logo src="logo.png" alt="Logo" onClick={handleLogoClick} />
        <Subtitle>안녕하세요! 하모니 회원가입을 환영합니다.</Subtitle>
      </TitleContainer>
      <CardContainer>
        <Card>
          <CardTitle>부모님</CardTitle>
          <ButtonGroup>
            <RegisterButton onClick={handleParentRegister}>
              가입하기
            </RegisterButton>
            <SNSButton>카카오로 가입하기</SNSButton>
          </ButtonGroup>
        </Card>
        <Card>
          <CardTitle>시니어</CardTitle>
          <ButtonGroup>
            <RegisterButton onClick={handleSeniorRegister}>
              가입하기
            </RegisterButton>
            <SNSButton>카카오로 가입하기</SNSButton>
          </ButtonGroup>
        </Card>
      </CardContainer>
    </StyledContainer>
  );
};

export default RegisterPage;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  color: #666;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
`;

const Card = styled.div`
  width: 300px;
  height: 350px;
  border-radius: 10px;
  display: flex;
  background-color: #f5f5f5;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  margin-bottom: 4rem;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 3rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const RegisterButton = styled.button`
  padding: 0.9rem 7rem;
  font-size: 1rem;
  background-color: #d2d2d2;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #a8a8a8;
  }
`;

const SNSButton = styled(RegisterButton)`
  padding: 0.9rem 5.3rem;
  background-color: #ffeb00;
  color: #000000;

  &:hover {
    background-color: #ffcc00;
  }
`;

const Logo = styled.img`
  width: 55%;
  height: 100px;
  margin-bottom: 10px;
  margin-top: 100px;
  cursor: pointer;
`;
