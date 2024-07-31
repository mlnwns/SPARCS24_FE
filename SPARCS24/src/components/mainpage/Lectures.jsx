import styled from "styled-components";

const LecturesContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 4rem;
`;

const LectureImage = styled.div`
  height: 254px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: 10px; // 추가된 부분
  overflow: hidden; // 추가된 부분
`;

const LectureOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
`;

const LectureTitle = styled.h3`
  color: white;
  font-size: 1.2em;
  margin: 0;
`;

const LectureLink = styled.p`
  color: white;
  font-size: 1em;
  margin: 8px 0 8px 0;
  text-decoration: underline;
`;

const Lectures = () => {
  const lectures = [
    { image: "/lecture1.png", title: "아동학대 예방교육" },
    { image: "/lecture2.png", title: "성희롱 예방교육" },
    { image: "/lecture3.png", title: "아이돌봄 지원사업 이해" },
    { image: "/lecture4.png", title: "직업윤리 및 서비스마인드" },
  ];

  return (
    <LecturesContainer>
      {lectures.map((lecture, index) => (
        <LectureImage key={index} image={lecture.image}>
          <LectureOverlay>
            <LectureTitle>{lecture.title}</LectureTitle>
            <LectureLink>바로가기</LectureLink>
          </LectureOverlay>
        </LectureImage>
      ))}
    </LecturesContainer>
  );
};

export default Lectures;
