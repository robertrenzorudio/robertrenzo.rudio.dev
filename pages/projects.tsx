import type { GetStaticProps, NextPage } from 'next';
import { Project } from 'types/Project';
import Container from 'components/Container';
import ProjectCard from 'components/ProjectCard';
import { getProjects } from 'lib/getProjects';

interface Props {
  projects: Project[];
}
const ProjectsPage: NextPage<Props> = ({ projects }) => {
  const sortedProjects = [...projects]
    .sort(
      (a, b) =>
        new Date(a.startDate).valueOf() - new Date(b.startDate).valueOf()
    )
    .sort((a) => (a.isFeatured ? -1 : 1));

  return (
    <Container meta={{ title: 'Projects - Robert Renzo Rudio' }}>
      <div className="relative flex flex-col mx-auto w-full px-6 md:px-12 lg:px-0 lg:max-w-4xl 2xl:max-w-5xl space-y-6">
        <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6 lg:gap-3">
          <div className="flex flex-col self-center md:space-y-8 ">
            <h1 className="text-3xl md:text-5xl font-bold text-orange-600 dark:text-indigo-300">
              Projects
            </h1>
            <p className="text-blue-1100 dark:text-indigo-100 text-lg font-light">
              These are some of my projects.
            </p>
          </div>

          {sortedProjects.map(
            ({ name, description, imgSrc, techStack, links, isFeatured }) => (
              <ProjectCard
                key={name}
                name={name}
                description={description}
                imgSrc={imgSrc}
                techStack={techStack}
                links={links}
                isFeatured={isFeatured}
              />
            )
          )}
        </div>
      </div>
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

export default ProjectsPage;
