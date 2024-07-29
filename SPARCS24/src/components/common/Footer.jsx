import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: #f5f5f5;
  padding: 2rem 0;
  margin-top: 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const FooterSection = styled.div`
  flex: 1;
  margin-right: 2rem;

  &:last-child {
    margin-right: 0;
  }
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterSection>
          <FooterTitle>하모니 지원</FooterTitle>
          <FooterList>
            <FooterListItem>고객 센터: 1588-1234</FooterListItem>
            <FooterListItem>이메일: support@harmony.co.kr</FooterListItem>
            <FooterListItem>운영 시간: 평일 09:00 - 18:00</FooterListItem>
          </FooterList>
        </FooterSection>
        <FooterSection>
          <FooterTitle>회사 정보</FooterTitle>
          <FooterList>
            <FooterListItem>㈜하모니</FooterListItem>
            <FooterListItem>대표: 김하모</FooterListItem>
            <FooterListItem>사업자등록번호: 123-45-67890</FooterListItem>
            <FooterListItem>
              주소: 서울특별시 강남구 테헤란로 123
            </FooterListItem>
          </FooterList>
        </FooterSection>
        <FooterSection>
          <FooterTitle>빠른 링크</FooterTitle>
          <FooterList>
            <FooterListItem>서비스 소개</FooterListItem>
            <FooterListItem>이용 방법</FooterListItem>
            <FooterListItem>자주 묻는 질문</FooterListItem>
            <FooterListItem>채용 정보</FooterListItem>
          </FooterList>
        </FooterSection>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
