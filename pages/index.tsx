import type { NextPage } from 'next';
import Container from '../components/Container';
import Intro from '../components/Intro';

const Home: NextPage = () => {
  return (
    <Container>
      <Intro />
    </Container>
  );
};

export default Home;
