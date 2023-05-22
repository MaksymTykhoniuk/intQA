import { CardList } from 'components/CardList/CardList';
import questionJS from '../json/questionJS';

const data = questionJS;

const JS = () => {
  return (
    <main>
      <h1>JS</h1>
      <CardList data={data} />
    </main>
  );
};

export default JS;
