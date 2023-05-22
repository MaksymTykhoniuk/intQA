import { useState } from 'react';

import { CardWrapper, CardText } from './Card.styled';

export const Card = ({ data }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleShowAnswer = () => {
    setShowAnswer(prev => !prev);
  };

  return (
    <>
      <CardWrapper>
        <CardText> Q: {data.question} </CardText>
        <button onClick={handleShowAnswer} type="button">
          {showAnswer ? 'hide' : 'show'}
        </button>

        {showAnswer && <CardText>A: {data.answer}</CardText>}
      </CardWrapper>
    </>
  );
};
