import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../constants';

interface Props {}

const FeatuedProjects = (props: Props) => {
  return (
    <div className="relative flex flex-col max-w-2xl 2xl:max-w-4xl mx-auto w-full md:px-0 p-8 pb-4 ">
      <h1 className="relative text-3xl font-extrabold">Projects</h1>
      <div className="absolute top-32 -left-4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply dark:mix-blend-luminosity filter blur-xl opacity-60 dark:opacity-30 animate-blob "></div>
      <div className="absolute top-32 -right-4 w-96 h-96 bg-red-300 rounded-full mix-blend-multiply dark:mix-blend-luminosity filter blur-xl opacity-60 dark:opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 -left-4 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply dark:mix-blend-luminosity filter blur-xl opacity-60 dark:opacity-30 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-0 -right-4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply dark:mix-blend-luminosity filter blur-xl opacity-60 dark:opacity-30 animate-blob animation-delay-6000"></div>
      <div className="flex flex-col space-y-6 pt-6 pb-4">
        {projects
          .filter(({ isFeatured }) => isFeatured)
          .map(
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
  );
};

export default FeatuedProjects;
