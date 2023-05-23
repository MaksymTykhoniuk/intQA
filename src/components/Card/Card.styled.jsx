import styled from '@emotion/styled';

export const CardWrapper = styled.li`
  position: relative;
  display: flex;
  padding: 20px;
  gap: 30px;
  border: 1px solid #ff4400bd;
  border-radius: 14px;
  align-items: start;
`;

export const Count = styled.p`
  position: absolute;
  top: 8px;
  left: 10px;
  align-self: center;
  font-size: 18px;
  background-color: #ffffff;
  color: #212112;
`;

export const Button = styled.button`
  display: block;
  cursor: pointer;
  font-size: 18px;
  background-color: #ff4400bd;
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 8px 18px;
  overflow: none;
  max-height: 32px;
  text-align: center;
  width: 100px;
  margin-left: 25px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 20px;

  padding: ${props => (props.showAnswer ? '20px' : '0')};
  background-color: ${props => (props.showAnswer ? 'lightgrey' : '#fff')};
`;

export const CardText = styled.h3`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: ${props => (props.showAnswer ? '700' : '500')};
  font-size: 18px;
  text-transform: uppercase;
  max-width: 600px;
  text-align: ${props => (props.showAnswer ? 'center' : 'start')};
`;

export const CardAnswer = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  max-width: 600px;
  text-align: center;
`;
