import { Card } from '../Card/Card';
import { Container, TweetsUsersList } from './CardList.styled';

export const CardList = ({ data }) => {
  return (
    <Container>
      <TweetsUsersList>
        {data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </TweetsUsersList>
    </Container>
  );
};
