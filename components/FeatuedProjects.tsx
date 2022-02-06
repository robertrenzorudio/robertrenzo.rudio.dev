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
      <div className="flex flex-col space-y-10 md:space-y-24">
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
      <div className="hidden md:block" />
      <div className="w-full">
        <Link href="/projects" passHref>
          <button className="border-2 border-indigo-700 dark:border-orange-150 px-5 py-2 w-full md:w-auto">
            <span className="inline-flex items-center text-indigo-700 dark:text-orange-150 ">
              View all projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 ml-4"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeatuedProjects;
