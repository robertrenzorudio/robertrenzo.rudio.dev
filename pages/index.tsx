import { NextPage, GetStaticProps } from 'next';
import Skills from 'components/Skills';
import Contact from 'components/Contact';
import Container from 'components/Container';
import FeatuedProjects from 'components/FeatuedProjects';
import Intro from 'components/Intro';
import { Project } from 'types/Project';
import { getProjects } from 'lib/getProjects';

interface Props {
  projects: Project[];
}
const Home: NextPage<Props> = ({ projects }) => {
  return (
    <Container>
      <Intro />
      <FeatuedProjects projects={projects} />
      <Skills />
      <Contact />
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects();
  return {
    props: {
      projects,
    },
    revalidate: 3600 * 24, // one day.
  };
};

export default Home;
