import React from 'react';

interface Props {}

const Intro = (props: Props) => {
  return (
    <div className="flex justify-between max-w-2xl mx-auto px-8 md:px-0 2xl:max-w-4xl">
      <div className="w-4/5 space-y-6">
        <div>
          <h1 className="text-3xl font-medium">
            Hey there 👋 <br />
            I&apos;m Robert Renzo Rudio
          </h1>
        </div>

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
          with a degree in Computer Engineering. Blah Blah Blah....
        </p>

        <h5 className="text-lg underline underline-offset-4 font-light">
          robertrenzorudio@gmail.com
        </h5>
      </div>
    </div>
  );
};

export default Intro;
