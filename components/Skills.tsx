import React from 'react';
import { languages, technologies } from '../constants';
import Icon from './Icon';

interface Props {}

const Skills = (props: Props) => {
  return (
    <div className="flex flex-col mx-auto w-full px-6 md:px-12 lg:px-0 lg:max-w-4xl 2xl:max-w-6xl space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-indigo-300">
        Skills
      </h1>

      <div className="space-y-1">
        <h3 className="text-lg font-light text-indigo-700 dark:text-orange-150">
          Programming Languages
        </h3>

        <div className="relative flex flex-row space-x-2 flex-wrap space-between -ml-2 -mt-2 md:px-2 w-full md:w-8/12 lg:w-7/12 2xl:w-1/2">
          {languages.map(({ title, href, src, alt }) => (
            <Icon key={alt} title={title} href={href} src={src} alt={alt} />
          ))}
        </div>
      </div>

      <div className="space-y-1">
        <h3 className="text-lg font-light text-indigo-700 dark:text-orange-150">
          Frameworks & Technologies
        </h3>

        <div className="relative flex flex-row space-x-2 flex-wrap space-between -ml-2 -mt-2 md:px-2 w-full md:w-8/12 lg:w-7/12 2xl:w-1/2">
          {technologies.map(({ title, href, src, alt }) => (
            <Icon key={alt} title={title} href={href} src={src} alt={alt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
