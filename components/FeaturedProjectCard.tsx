import React from 'react';
import Image from 'next/image';
import Action from './Action';

interface MyImageProp {
  imgSrc: string;
  alt: string;
  w: number;
}
const MyImage = ({ imgSrc, alt }: MyImageProp) => {
  return (
    <div
      className={`md:w-[22rem] lg:w-[26rem] 2xl:w-[34rem] h-80 relative transition ease-out duration-[2000ms] hover:scale-125`}
    >
      <Image src={imgSrc} layout="fill" alt={alt} />
    </div>
  );
};

interface FeaturedProjectCardProps {
  align?: 'left' | 'right';
  name: string;
  description: string;
  imgSrc: string;
  techStack: string[];
  links: {
    link: string;
    linkName: string;
    icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
  }[];
}

const FeaturedProjectCard = ({
  align = 'left',
  name,
  imgSrc,
  description,
  links,
  techStack,
}: FeaturedProjectCardProps) => {
  return (
    <div
      className={`p-5 border-2 border-indigo-300 md:border-0 md:p-0 relative w-full h-auto md:h-80 flex ${
        align === 'left' ? 'flex-row-reverse' : ''
      } overflow-hidden`}
    >
      <div className="hidden md:block w-2/5" />
      <div className="absolute overflow-hidden rounded-2xl">
        <MyImage imgSrc={imgSrc} w={96} alt={name} />
      </div>

      <div
        className={`relative flex flex-col justify-center space-y-6 w-full md:w-3/5 items-${
          align === 'left' ? 'start' : 'end'
        }`}
      >
        <div className="">
          <h1 className="font-semibold text-2xl text-orange-150">{name}</h1>
        </div>

        <div className="md:border md:border-indigo-300 bg-orange-150 md:bg-nightowl-100 p-5 sm:w-full md:w-11/12 h-auto md:max-h-32 overflow-scroll">
          <p className="font-semibold md:font-light text-gray-800 md:text-indigo-100">
            {description}
          </p>
        </div>

        <div
          className={`flex flex-col space-y-3 items-${
            align === 'left' ? 'start' : 'end'
          }`}
        >
          <div className="flex flex-row flex-wrap space-x-2 -mt-1 -ml-2 md:-mt-0 md:-ml-2">
            {techStack.map((tech) => (
              <h5 key={tech} className=" text-sm text-indigo-100 mt-1 ml-2">
                {tech}
              </h5>
            ))}
          </div>
          <div className="flex flex-row p-1 space-x-2">
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

export default FeaturedProjectCard;
