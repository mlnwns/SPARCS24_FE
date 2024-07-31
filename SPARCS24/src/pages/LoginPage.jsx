import Container from "../components/common/Container";
import InputComponent from "../components/common/InputComponent";
import styled from "styled-components";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const serverUrl = import.meta.env.VITE_SERVER_URL;

  const handleSignUp = () => {
    navigate("/register");
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("password", password);

      const response = await fetch(`${serverUrl}/login`, {
        method: "POST",
        body: formData,
      });

      if (response.status === 200) {
        const accessToken = response.headers.get("Authorization");

        if (accessToken) {
          localStorage.setItem("accessToken", accessToken);
          console.log("Access token saved to localStorage");

          const storedAccessToken = localStorage.getItem("accessToken");
          const roleResponse = await fetch(`${serverUrl}/main/role`, {
            method: "GET",
            headers: {
              access: storedAccessToken,
            },
          });

          if (roleResponse.ok) {
            const roleData = await roleResponse.json();

            localStorage.setItem("userRole", JSON.stringify(roleData));
            console.log("User role saved to localStorage");

            if (roleData === false || roleData === "false") {
              navigate("/senior");
            } else if (roleData === true || roleData === "true") {
              navigate("/");
            } else {
              navigate("/");
            }
          } else {
            console.warn("Failed to fetch user role");
            navigate("/");
          }
        } else {
          console.warn("Access token not found in response headers");
          navigate("/");
        }
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error("로그인 실패:", error);
      alert("로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.");
    }
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div>
      <Container>
        <form onSubmit={handleLogin}>
          <FormWrapper>
            <Logo src="logo.png" alt="Logo" onClick={handleLogoClick} />
            <InputComponent
              label="아이디"
              name="username"
              size="m"
              type="text"
              placeholder="아이디를 입력하세요"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <InputComponent
              label="비밀번호"
              name="password"
              type="password"
              size="m"
              placeholder="비밀번호를 입력하세요"
              showToggle={true}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              하모니가 처음이라면?
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
  width: 45%;
  height: 100px;
  margin-bottom: 50px;
  margin-top: 15px;
  margin-left: 25%;
  cursor: pointer;
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
  background-color: #4976ef;
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
