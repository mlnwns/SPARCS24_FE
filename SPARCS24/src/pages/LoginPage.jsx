import Container from "../components/common/Container";
import InputComponent from "../components/common/InputComponent";
import NavBar from "../components/common/NavBar";

const LoginPage = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <form>
          <div>
            <InputComponent
              label="아이디"
              name="username"
              size="lg"
              placeholder="아이디를 입력하세요"
            />
          </div>
          <div>
            <InputComponent
              label="비밀번호"
              type="password"
              name="password"
              size="lg"
              placeholder="비밀번호를 입력하세요"
              showToggle={true}
            />
          </div>
          <button type="submit">로그인</button>
        </form>
      </Container>
    </div>
  );
};

export default LoginPage;
