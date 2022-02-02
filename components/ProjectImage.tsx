import React from 'react';
import Image from 'next/image';

interface Props {
  imgSrc: string;
  alt: string;
  projLink: string;
  w: string;
  h: string;
}

const ProjectImage = ({ imgSrc, alt, projLink, w, h }: Props) => {
  return (
    <div className={`${w} ${h} group relative`}>
      <Image
        src={imgSrc}
        layout="fill"
        alt={alt}
        className="transition-all ease  group-hover:blur-sm group-hover:scale-105"
      />
      <div className="absolute w-full h-full group-hover:visible invisible flex items-center justify-center">
        <a
          href={projLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-400"
        >
          <button className="bg-indigo-700 dark:bg-orange-150 rounded-full h-24 w-24 font-semibold text-indigo-100 dark:text-gray-800">
            View
            <br />
            Project
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectImage;
