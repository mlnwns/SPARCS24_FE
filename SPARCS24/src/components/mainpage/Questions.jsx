import styled from "styled-components";

const QuestionsContainer = styled.div`
  width: 100%;
`;

const QuestionItem = styled.div`
  background-color: #e8e8e8;
  border-radius: 10px;
  padding: 20px 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const QuestionText = styled.p`
  color: black;
  margin: 0;
`;

const DetailLink = styled.a`
  color: #5d5d5d;
  text-decoration: none;
`;

const Questions = () => {
  const questions = [
    { text: "질문 1. 하모니란 무엇인가요?" },
    { text: "질문 2. 어떻게 해야 하모니가 될 수 있나요?" },
    { text: "질문 3. 하모니 활동 시 주의사항은 무엇인가요?" },
  ];

  return (
    <QuestionsContainer>
      {questions.map((question, index) => (
        <QuestionItem key={index}>
          <QuestionText>{question.text}</QuestionText>
          <DetailLink href="#">자세히보기</DetailLink>
        </QuestionItem>
      ))}
    </QuestionsContainer>
  );
};

export default Questions;
