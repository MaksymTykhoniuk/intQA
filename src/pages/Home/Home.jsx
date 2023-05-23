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
const randomREACT = Math.floor(Math.random() * dataREACT.length);
const randomJS = Math.floor(Math.random() * dataJS.length);

const Home = () => {
  return (
    <Section>
      <Title>Welcome</Title>
      <Container>
        <CardWrapper>
          <SectionLink to="/html"> go to HTML</SectionLink>
          <Card data={dataHTML[random]} index={random} />
        </CardWrapper>
        <CardWrapper>
          <SectionLink to="/js"> go to JS</SectionLink>
          <Card data={dataJS[randomJS]} index={randomJS} />
        </CardWrapper>
        <CardWrapper>
          <SectionLink to="/react"> go to REACT</SectionLink>
          <Card data={dataREACT[randomREACT]} index={randomREACT} />
        </CardWrapper>
      </Container>
    </Section>
  );
};

export default Home;
