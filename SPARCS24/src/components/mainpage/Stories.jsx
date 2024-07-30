import styled from "styled-components";

const StoriesContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  margin-bottom: 4rem;
`;

const StoryImage = styled.div`
  width: calc(50% - 10px);
  height: 162px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: 10px; // 추가된 부분
  overflow: hidden; // 추가된 부분
`;

const StoryOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(101, 101, 101, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
`;

const StoryTitle = styled.h3`
  color: white;
  font-size: 1.4em;
  margin: 0;
`;

const StorySubtitle = styled.h4`
  color: white;
  font-size: 1.4em;
  margin: 5px 0;
`;

const StoryLink = styled.p`
  color: white;
  font-size: 0.9em;
  margin-top: 5px;
`;

const Stories = () => {
  const stories = [
    { image: "/img1.png", title: "성북동 길양희", subtitle: "하모니의 이야기" },
    { image: "/img2.png", title: "강남구 김미영", subtitle: "하모니의 이야기" },
  ];

  return (
    <StoriesContainer>
      {stories.map((story, index) => (
        <StoryImage key={index} image={story.image}>
          <StoryOverlay>
            <StoryTitle>{story.title}</StoryTitle>
            <StorySubtitle>{story.subtitle}</StorySubtitle>
            <StoryLink>지금 바로 확인하기</StoryLink>
          </StoryOverlay>
        </StoryImage>
      ))}
    </StoriesContainer>
  );
};

export default Stories;
