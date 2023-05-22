import React from 'react';
import { CardList } from 'components/CardList/CardList';
import questionREACT from '../json/questionREACT';

const data = questionREACT;

const REACT = () => {
  return (
    <main>
      <h1>REACT</h1>
      <CardList data={data} />
    </main>
  );
};

export default REACT;
