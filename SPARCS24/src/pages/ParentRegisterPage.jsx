import { useState } from "react";
import RegisterContainer from "../components/register/RegisterContainer";
import styled from "styled-components";
import LabeledInput from "../components/register/LabeledInput";

const ParentRegisterPage = () => {
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

  const [formData, setFormData] = useState({
    phone: "",
    name: "",
    username: "",
    password: "",
    email: "",
    address: "",
  });

  const [addressVerified, setAddressVerified] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === "address") {
      setAddressVerified(false);
    }
  };

  const handleAddressVerification = async () => {
    try {
      const response = await fetch(
        `/api/map-geocode/v2/geocode?query=${encodeURIComponent(
          formData.address
        )}`,
        {
          headers: {
            "X-NCP-APIGW-API-KEY-ID": clientId,
            "X-NCP-APIGW-API-KEY": clientSecret,
          },
        }
      );
      const data = await response.json();
      if (data.addresses && data.addresses.length > 0) {
        setAddressVerified(true);
        alert("일치하는 도로명 주소가 있습니다.");
      } else {
        setAddressVerified(false);
        alert("일치하는 도로명 주소가 없습니다.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("주소 확인 중 오류가 발생했습니다.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!addressVerified) {
      alert("주소를 먼저 확인해주세요.");
      return;
    }

    const apiData = {
      username: formData.username,
      password: formData.password,
      role: "P",
      name: formData.name,
      eMail: formData.email,
      regin: formData.address,
      age: "2000-03-17",
      phoneNum: "01075510069",
    };

    try {
      const response = await fetch("http://110.165.16.33:8080/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiData),
        credentials: "include",
      });

      if (response.ok) {
        const result = await response.json();
        console.log("회원가입 성공:", result);
        alert("회원가입이 완료되었습니다.");
        // 여기에 회원가입 성공 후 처리 (예: 로그인 페이지로 이동)
      } else {
        console.error("회원가입 실패:", response.statusText);
        alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("회원가입 중 오류가 발생했습니다.");
    }
  };

  return (
    <RegisterContainer>
      <Title>부모님 회원가입</Title>
      <form onSubmit={handleSubmit}>
        <LabeledInput
          label="휴대폰 번호"
          type="tel"
          name="phone"
          placeholder="010-0000-0000"
          buttonText="인증완료"
          completed
          value={formData.phone}
          onChange={handleInputChange}
        />
        <LabeledInput
          label="이름"
          required
          type="text"
          name="name"
          placeholder="이름을 입력하세요"
          value={formData.name}
          onChange={handleInputChange}
        />
        <LabeledInput
          label="아이디"
          type="text"
          required
          name="username"
          placeholder="아이디를 입력하세요"
          buttonText="중복확인"
          value={formData.username}
          onChange={handleInputChange}
        />
        <LabeledInput
          label="비밀번호"
          required
          type="password"
          name="password"
          placeholder="비밀번호를 입력하세요"
          value={formData.password}
          onChange={handleInputChange}
        />
        <LabeledInput
          label="이메일"
          type="email"
          name="email"
          placeholder="이메일을 입력하세요"
          value={formData.email}
          onChange={handleInputChange}
        />
        <LabeledInput
          label="거주지"
          required
          type="text"
          name="address"
          isAddress
          placeholder="도로명 주소를 입력하세요"
          value={formData.address}
          onChange={handleInputChange}
          onAddressSearch={handleAddressVerification}
          completed={addressVerified}
        />
      </form>

      <ButtonContainer>
        <PreviousButton type="button">이전</PreviousButton>
        <RegisterButton type="submit" onClick={handleSubmit}>
          가입하기
        </RegisterButton>
      </ButtonContainer>
    </RegisterContainer>
  );
};

export default ParentRegisterPage;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 4rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.8rem 6rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const PreviousButton = styled(Button)`
  background-color: #e0e0e0;
  color: #000000;

  &:hover {
    background-color: #d0d0d0;
  }
`;

const RegisterButton = styled(Button)`
  background-color: #4976ef;
  color: white;

  &:hover {
    background-color: #3a5fd9;
  }
`;
