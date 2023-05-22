import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <h1>Welcome</h1>
      <img src="https://via.placeholder.com/960x240" alt="" />
      <ul>
        <li>
          <Link to="/html">HTML</Link>
        </li>
        <li>
          <Link to="/js">JS</Link>
        </li>
        <li>
          <Link to="/react">REACT</Link>
        </li>
      </ul>
    </main>
  );
};

export default Home;
