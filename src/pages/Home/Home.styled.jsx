import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Section = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 24px;
  color: black;
  font-weight: 500;
  font-size: 40px;
  align-self: center;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 770px;
  margin-bottom: 24px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
`;

export const SectionLink = styled(Link)`
  padding: 8px 16px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 40px;
  align-self: center;

  &:hover {
    color: orange;
  }
`;
