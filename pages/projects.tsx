import type { NextPage } from 'next';
import Container from '../components/Container';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../constants';

const Home: NextPage = () => {
  return (
    <Container meta={{ title: 'Projects' }}>
      <div className="flex flex-col max-w-2xl 2xl:max-w-4xl mx-auto w-full md:px-0 space-y-6 p-8 pb-4">
        <h1 className="text-3xl font-extrabold">Projects</h1>
        <div className="flex flex-col space-y-6 pb-4">
          {projects.map(({ name, description, imgSrc, techStack, links }) => (
            <ProjectCard
              key={name}
              name={name}
              description={description}
              imgSrc={imgSrc}
              techStack={techStack}
              links={links}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Home;
