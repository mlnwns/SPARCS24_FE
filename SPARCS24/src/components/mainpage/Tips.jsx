import styled from "styled-components";

const TipsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  width: 100%;
`;

const TipItem = styled.div`
  width: 100%;
`;

const TipImage = styled.img`
  width: 100%;
  aspect-ratio: 5 / 3;
  object-fit: cover;
  border-radius: 10px;
`;

const TipTitle = styled.h3`
  margin: 1rem 0 0.5rem 0;
  font-size: 1.1rem;
  font-weight: bold;
`;

const TipSubtitle = styled.p`
  color: #9f9f9f;
  font-size: 0.8rem;
`;

const Tips = ({ tips }) => {
  return (
    <TipsContainer>
      {tips.map((tip, index) => (
        <TipItem key={index}>
          <TipImage src={tip.image} alt={tip.title} />
          <TipTitle>{tip.title}</TipTitle>
          <TipSubtitle>{tip.subtitle}</TipSubtitle>
        </TipItem>
      ))}
    </TipsContainer>
  );
};

export default Tips;
