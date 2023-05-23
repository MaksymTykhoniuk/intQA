import { useState } from 'react';

import {
  CardWrapper,
  CardText,
  Button,
  TextWrapper,
  CardAnswer,
  Count,
} from './Card.styled';

export const Card = ({ data, index }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleShowAnswer = () => {
    setShowAnswer(prev => !prev);
  };

  return (
    <>
      <CardWrapper>
        <Count>{index + 1}</Count>

        <Button onClick={handleShowAnswer} type="button">
          {showAnswer ? 'hide' : 'show'}
        </Button>

        <TextWrapper showAnswer={showAnswer}>
          <CardText showAnswer={showAnswer}> Q: {data.question} </CardText>

          {showAnswer && <CardAnswer>A: {data.answer}</CardAnswer>}
        </TextWrapper>
      </CardWrapper>
    </>
  );
};
