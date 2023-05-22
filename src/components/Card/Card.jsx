import { useState } from 'react';

import {
  CardWrapper,
  CardText,
  Button,
  TextWrapper,
  CardAnswer,
} from './Card.styled';

export const Card = ({ data }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleShowAnswer = () => {
    setShowAnswer(prev => !prev);
  };

  return (
    <>
      <CardWrapper>
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
