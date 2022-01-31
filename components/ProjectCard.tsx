import React from 'react';
import Action from './Action';

interface ProjectCardProps {
  name: string;
  description: string;
  imgSrc?: string;
  techStack: string[];
  links: {
    link: string;
    linkName: string;
    icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
  }[];
  isFeatured: boolean;
}

const ProjectCard = ({
  name,
  description,
  links,
  techStack,
}: ProjectCardProps) => {
  return (
    <div className="group relative w-full h-96 md:w-80 md:h-80">
      <div className="absolute border-4 bottom-0 w-full border-orange-600 dark:border-indigo-300"></div>
      <div className="bg-gray-100 dark:bg-gray-800 p-5 border-2 border-orange-600 dark:border-indigo-300 relative w-full h-full flex flex-col overflow-hidden justify-between transition-all hover:-translate-y-2">
        <div className="">
          <h1 className="font-semibold text-2xl text-indigo-700 dark:text-orange-150">
            {name}
          </h1>
        </div>

        <div className="overflow-scroll">
          <p className="font-light text-blue-1100 dark:text-indigo-100">
            {description}
          </p>
        </div>

        <div className="flex flex-col space-y-3">
          <div className="flex flex-row flex-wrap space-x-2 -mt-1 -ml-2 md:-mt-0 md:-ml-2 ">
            {techStack.map((tech) => (
              <h5
                key={tech}
                className="text-sm  mt-1 ml-2 text-gray-600 dark:text-gray-400"
              >
                {tech}
              </h5>
            ))}
          </div>
          <div className="flex flex-row space-x-2">
            {links.map(({ link, linkName, icon }) => (
              <Action
                key={linkName}
                link={link}
                linkName={linkName}
                icon={icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
