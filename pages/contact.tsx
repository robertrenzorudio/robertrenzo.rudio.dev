import type { NextPage } from 'next';
import Contact from '../components/Contact';
import Container from '../components/Container';

const Home: NextPage = () => {
  return (
    <Container meta={{ title: 'Contact' }}>
      <Contact />
    </Container>
  );
};

export default Home;
