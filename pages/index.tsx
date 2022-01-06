import type { NextPage } from 'next';
import Container from '../components/Container';

const Home: NextPage = () => {
  return (
    <Container>
      <div className="flex max-w-2xl w-full mx-auto items-center justify-center">
        <p className="text-red">Hello World</p>
      </div>
    </Container>
  );
};

export default Home;
