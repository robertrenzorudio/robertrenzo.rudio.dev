import Image from 'next/image';
import React from 'react';

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

interface ActionsProp {
  link: string;
  linkName: string;
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
}

const Action = (props: ActionsProp) => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className="h-9 rounded-lg flex items-center justify-center hover:ring-2 ring-rose-500 transition-all p-1 ml-2"
    >
      <props.icon className="w-5 h-5 text-gray-800 dark:text-gray-100" />
      <h5 className="text-sm ml-1">{props.linkName}</h5>
    </a>
  );
};

const ProjectCard = ({
  name,
  imgSrc,
  description,
  links,
  techStack,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-row bg-gray-200 dark:bg-gray-900 p-6 border border-gray-900 dark:border-gray-100 rounded-lg w-full md:w-11/12 mx-auto space-x-1">
      <div
        className={`flex flex-col justify-between overflow-hidden w-full ${
          imgSrc ? 'md:w-4/5' : ''
        } p-1`}
      >
        <div className="mb-3">
          <h5 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            {name}
          </h5>
          <p className="text-sm text-gray-900 dark:text-gray-100">
            {description}
          </p>
        </div>
        <div className="flex space-x-2 flex-wrap space-between -mt-1 -ml-2">
          {techStack.map((tech) => (
            <h5
              key={tech}
              className="bg-gray-300 dark:bg-gray-800 italic text-sm mt-1 ml-2"
            >
              {tech}
            </h5>
          ))}
        </div>
        <div className="flex space-x-2 mt-3 flex-wrap -ml-2">
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

      {imgSrc && (
        <div className="hidden sm:block md:flex w-1/5 relative">
          <Image src={imgSrc} alt={`${name} Logo`} layout="fill" />
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
