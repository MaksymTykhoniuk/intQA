import { Card } from 'components/Card/Card';

import {
  Section,
  Container,
  CardWrapper,
  SectionLink,
  Title,
} from './Home.styled';
import questionHTML from '../../json/questionHTML';
import questionREACT from '../../json/questionREACT';
import questionJS from '../../json/questionJS';

const dataJS = questionJS;
const dataREACT = questionREACT;
const dataHTML = questionHTML;
const random = Math.floor(Math.random() * dataHTML.length);

const Home = () => {
  return (
    <Section>
      <Title>Welcome</Title>
      <Container>
        <CardWrapper>
          <SectionLink to="/html">HTML</SectionLink>
          <Card data={dataHTML[random]} />
        </CardWrapper>
        <CardWrapper>
          <SectionLink to="/js">JS</SectionLink>
          <Card data={dataJS[random]} />
        </CardWrapper>
        <CardWrapper>
          <SectionLink to="/react">REACT</SectionLink>
          <Card data={dataREACT[random]} />
        </CardWrapper>
      </Container>
    </Section>
  );
};

export default Home;
