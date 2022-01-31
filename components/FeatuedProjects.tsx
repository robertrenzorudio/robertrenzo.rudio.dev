import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../constants';
import FeaturedProjectCard from './FeaturedProjectCard';

interface Props {}

const FeatuedProjects = (props: Props) => {
  return (
    <div className="relative flex flex-col mx-auto w-full px-6 md:px-12 lg:px-0 lg:max-w-3xl 2xl:max-w-5xl">
      <h1 className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-indigo-300">
        Projects
      </h1>
      {/* <div className="isolate">
        <div className="absolute top-10 -left-4 md:top-16 md:left-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blobTop "></div>
        <div className="absolute top-64 md:top-16 md:right-10 w-96 h-96 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blobTop animation-delay-6000"></div>
        <div className="absolute -bottom-8 md:bottom-0 -left-4 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blobBot animation-delay-2000"></div>
        <div className="invisible md:visible absolute bottom-0 -right-4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blobBot animation-delay-4000"></div>
      </div> */}
      <div className="flex flex-col space-y-10 mt-6 ">
        {projects
          .filter(({ isFeatured }) => isFeatured)
          .map(({ name, description, imgSrc, techStack, links }, i) => (
            <FeaturedProjectCard
              key={name}
              name={name}
              description={description}
              imgSrc={imgSrc}
              techStack={techStack}
              links={links}
              align={i % 2 === 0 ? 'right' : 'left'}
            />
          ))}
      </div>
    </div>
  );
};

export default FeatuedProjects;
