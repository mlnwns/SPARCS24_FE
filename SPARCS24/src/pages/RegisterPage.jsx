import { useState } from "react";
import styled from "styled-components";
import Container from "../components/common/Container";
import InputComponent from "../components/common/InputComponent";
import NavBar from "../components/common/NavBar";

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.3rem;
  margin-bottom: 1.5rem;
`;

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateUsername = (username) => {
    const regex = /^[a-zA-Z0-9]+$/; // 영문자와 숫자만 허용
    return regex.test(username);
  };

  const validatePassword = (password) => {
    return password.length >= 8 && password.length <= 20; // 8자 이상 20자 이하
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!validateUsername(username)) {
      newErrors.username = "아이디는 영문자와 숫자만 입력 가능합니다.";
    }
    if (!validatePassword(password)) {
      newErrors.password = "비밀번호는 8자 이상 20자 이하여야 합니다.";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // 유효성 검사 통과 시 처리 로직
      console.log("Form submitted");
    }
  };

  return (
    <div>
      <NavBar />
      <Container>
        <form onSubmit={handleSubmit}>
          <div>
            <InputComponent
              label="아이디"
              name="username"
              size="lg"
              placeholder="아이디를 입력하세요"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
          </div>
          <div>
            <InputComponent
              label="비밀번호"
              type="password"
              name="password"
              size="lg"
              placeholder="비밀번호를 입력하세요"
              showToggle={true}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              maxLength={20} // 최대 20자로 제한
            />
            {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
          </div>
          <button type="submit">로그인</button>
        </form>
      </Container>
    </div>
  );
};

export default RegisterPage;
