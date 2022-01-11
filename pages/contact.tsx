import type { NextPage } from 'next';
import Contact from '../components/Contact';
import Container from '../components/Container';
import FeatuedProjects from '../components/FeatuedProjects';
import Intro from '../components/Intro';

const Home: NextPage = () => {
  return (
    <Container meta={{ title: 'Contact' }}>
      <Contact isFull={true} />
    </Container>
  );
};

export default Home;
