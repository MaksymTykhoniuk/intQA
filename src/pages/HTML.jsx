import React from 'react';
import { CardList } from 'components/CardList/CardList';
import questionHTML from '../json/questionHTML';

const data = questionHTML;

const HTML = () => {
  return (
    <main>
      <h1>HTML</h1>
      <CardList data={data} />
    </main>
  );
};

export default HTML;
