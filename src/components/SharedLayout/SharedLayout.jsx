import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Logo, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>
          Tweets
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/html">HTML</Link>
          <Link to="/js">JS</Link>
          <Link to="/react">REACT</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
