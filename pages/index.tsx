import type { NextPage } from 'next';
import Container from '../components/Container';
import FeatuedProjects from '../components/FeatuedProjects';
import Intro from '../components/Intro';

const Home: NextPage = () => {
  return (
    <Container>
      <Intro />
      <FeatuedProjects />
    </Container>
  );
};

export default Home;
