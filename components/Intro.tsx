import React from 'react';

interface Props {}

const Intro = (props: Props) => {
  return (
    <div className="flex justify-between max-w-2xl mx-auto px-8 md:px-0 2xl:max-w-4xl pt-4">
      <div className="w-full md:w-4/5 space-y-6">
        <h1 className="text-3xl font-medium text-gray-800 dark:text-gray-100">
          Hey there 👋 <br />
          I&apos;m <span className="font-extrabold">Robert Renzo Rudio</span>
        </h1>
        <p className="text-lg font-light">
          I am a recent graduate from{' '}
          <a
            href="https://samueli.ucla.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-semibold"
          >
            UCLA
          </a>{' '}
          with a bachelor&apos;s degree in computer engineering in December
          2021. I am interested in full-stack, back-end, and embedded software
          development.
        </p>
      </div>
    </div>
  );
};

export default Intro;
