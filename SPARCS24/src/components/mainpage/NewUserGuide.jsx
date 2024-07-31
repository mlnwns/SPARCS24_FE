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

  height: 98%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.05); // 검정색 배경에 50% 투명도
`;

const StarRating = styled.div`
  position: absolute;
  left: 20px;
  bottom: 105px; // 위치를 약간 위로 조정
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
  line-height: 1.6;
  margin: 0;
`;

const Reviewer = styled.p`
  position: absolute;
  left: 20px;
  bottom: 30px; // 위치를 약간 위로 조정
  color: white;
  font-size: 12px;
`;

const NewUserGuide = () => {
  const guides = [
    {
      src: "/New1.png",
      alt: "Guide 1",
      rating: "4.8",
      review:
        "103동 할머니랑 오늘 처음 같이 유치원 갔네요. 평소 길가다가 몇번 봬서 인사만 드렸었는데, 인상처럼 역시나 너무 좋으신 분이었어요!",
      reviewer: "서*경 부모님의 후기",
    },

    {
      src: "/New2.png",
      alt: "Guide 2",
      rating: "4.9",
      review:
        "오늘 소망이가 윗집 할아버지 얘기를 하더라구요~ 할아버지가 같이 집에 오면서 해주시는 옛날 얘기가 얼마나 재밌다던지, 맨날...",
      reviewer: "김*지 부모님의 후기",
    },
    {
      src: "/New3.png",
      alt: "Guide 3",
      rating: "4.7",
      review:
        "3층 할머니는 우리 은지가 제일 좋아하는 할머니입니다. 할머니는 항상 은지를 위해 맛있는 저녁을 해주세요. 은지는 편식을 많이 하는 편인데...",
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
