import React from 'react';
import Link from 'next/link';
import FeaturedProjectCard from './FeaturedProjectCard';
import { Project } from '../types/Project';

interface Props {
  projects: Project[];
}

const FeatuedProjects = (props: Props) => {
  return (
    <div className="relative flex flex-col mx-auto w-full px-6 md:px-12 lg:px-0 lg:max-w-3xl 2xl:max-w-5xl space-y-10">
      <h1 className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-indigo-300">
        Projects
      </h1>
      <div className="flex flex-col space-y-10 md:space-y-24 mt-6 ">
        {props.projects
          .filter(({ isFeatured }) => isFeatured)
          .map(({ name, description, imgSrc, techStack, links }, i) => (
            <FeaturedProjectCard
              key={name}
              name={name}
              description={description}
              imgSrc={imgSrc!}
              techStack={techStack}
              links={links}
              align={i % 2 === 0 ? 'right' : 'left'}
            />
          ))}
      </div>
      <div className="w-auto h-auto">
        <Link href="/projects" passHref>
          <button className="border-2 border-indigo-700 dark:border-orange-150 text-indigo-700 dark:text-orange-150 px-5 py-2">
            View all projects
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeatuedProjects;
