import Skills from 'components/Skills';
import type { NextPage } from 'next';
import Contact from '../components/Contact';
import Container from '../components/Container';
import FeatuedProjects from '../components/FeatuedProjects';
import Intro from '../components/Intro';

const Home: NextPage = () => {
  return (
    <Container>
      <Intro />
      <FeatuedProjects />
      <Skills />
      <Contact />
    </Container>
  );
};

export default Home;
