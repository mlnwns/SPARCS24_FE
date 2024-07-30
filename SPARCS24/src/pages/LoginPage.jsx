import Container from "../components/common/Container";
import InputComponent from "../components/common/InputComponent";
import styled from "styled-components";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/register");
  };

  return (
    <div>
      <Container>
        <form>
          <FormWrapper>
            <Logo src="logo.png" alt="Logo" />
            <InputComponent
              label="아이디"
              name="username"
              size="m"
              type="text"
              placeholder="아이디를 입력하세요"
            />
            <InputComponent
              label="비밀번호"
              name="password"
              type="password"
              size="m"
              placeholder="비밀번호를 입력하세요"
              showToggle={true}
            />
            <CheckboxWrapper onClick={() => setIsChecked(!isChecked)}>
              {isChecked ? (
                <MdCheckBox size={24} color="#aeaeae" />
              ) : (
                <MdCheckBoxOutlineBlank size={24} color="#aeaeae" />
              )}
              <label>아이디 저장</label>
            </CheckboxWrapper>
            <LoginButton type="submit">로그인하기</LoginButton>
            <SignUpText>
              하모니케어가 처음이라면?
              <SignUpLink onClick={handleSignUp}>가입하기</SignUpLink>
            </SignUpText>
            <Divider />
            <SnsLoginWrapper>
              <KakaoIcon src="kakao.png" alt="Kakao" />
              <span>SNS계정으로 간편하게 시작하기</span>
            </SnsLoginWrapper>
          </FormWrapper>
        </form>
      </Container>
    </div>
  );
};

export default LoginPage;

const FormWrapper = styled.div`
  width: 440px;
  margin: 0 auto;
  padding: 20px;
`;

const Logo = styled.img`
  width: 100%;
  height: 100px;
  margin-bottom: 30px;
  margin-top: 15px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  gap: 5px;
  cursor: pointer;
  margin-bottom: 10px;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 15px 10px;
  font-size: 1.2rem;
  margin-top: 20px;
  background-color: #d2d2d2;
  color: white;
  border: none;
  border-radius: 7px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const SignUpText = styled.p`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 25px;
  color: #666;
`;

const SignUpLink = styled.span`
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
  margin-left: 10px;
  font-size: 1.1rem;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #d2d2d2;
  margin-top: 20px;
`;

const SnsLoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  font-size: 1.1rem;
  color: #666;
`;

const KakaoIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;
