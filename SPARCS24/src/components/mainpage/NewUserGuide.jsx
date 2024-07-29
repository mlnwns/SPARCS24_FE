import styled from "styled-components";

const GuideContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 4rem;
`;

const GuideCard = styled.div`
  width: 32%;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
`;

const GuideImage = styled.img`
  width: 100%;
  aspect-ratio: 2 / 1;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); // 검정색 배경에 50% 투명도
`;

const StarRating = styled.div`
  position: absolute;
  left: 20px;
  bottom: 90px; // 위치를 약간 위로 조정
  background-color: #ffd700;
  color: black;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 1rem;
`;

const ReviewText = styled.p`
  position: absolute;
  left: 20px;
  bottom: 50px; // 위치를 약간 위로 조정
  right: 10px;
  color: white;
  font-size: 0.8rem;
  line-height: 1.2;
  margin: 0;
`;

const Reviewer = styled.p`
  position: absolute;
  left: 20px;
  bottom: 20px; // 위치를 약간 위로 조정
  color: white;
  font-size: 12px;
`;

const NewUserGuide = () => {
  const guides = [
    {
      src: "/img2.png",
      alt: "Guide 1",
      rating: "4.8",
      review:
        "3층 할머니는 우리 은지가 제일 좋아하는 할머니입니다. 할머니는 항상 은지를 위해 맛있는 저녁을 해주세요. 은지는 편식을 많이 하는 편인데",
      reviewer: "서*경 부모님의 후기",
    },

    {
      src: "/img2.png",
      alt: "Guide 2",
      rating: "4.9",
      review:
        "맞벌이 부부에게 큰 도움이 되었습니다. 안심하고 아이를 맡길 수 있어요.",
      reviewer: "김*지 부모님의 후기",
    },
    {
      src: "/img2.png",
      alt: "Guide 3",
      rating: "4.7",
      review: "하모니 서비스 덕분에 육아 스트레스가 많이 줄었어요. 감사합니다!",
      reviewer: "주*철 부모님의 후기",
    },
  ];

  return (
    <GuideContainer>
      {guides.map((guide, index) => (
        <GuideCard key={index}>
          <GuideImage src={guide.src} alt={guide.alt} />
          <Overlay />

          <StarRating>★ {guide.rating}</StarRating>
          <ReviewText>{guide.review}</ReviewText>
          <Reviewer>{guide.reviewer}</Reviewer>
        </GuideCard>
      ))}
    </GuideContainer>
  );
};

export default NewUserGuide;
