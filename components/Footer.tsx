import Link from 'next/link';
import React from 'react';
import { userData } from '../constants';

interface Props {}

const Footer = (props: Props) => {
  return (
    <footer className="flex flex-col max-w-2xl 2xl:max-w-4xl mx-auto w-full p-8 md:px-0">
      <hr className="pb-8 border-1 border-gray-600"></hr>

      <div className="grid grid-cols-2">
        <div className="flex flex-col space-y-4 ">
          <Link href="/">
            <a className="text-gray-600 hover:text-gray-800">Home</a>
          </Link>
          <Link href="/projects">
            <a className="text-gray-600 hover:text-gray-800">Projects</a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4 overflow-scroll">
          <a
            href={userData.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800"
          >
            Github
          </a>

          <a
            href={userData.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <p className="flex flex-row text-gray-600 mt-4 space-x-1">
        Built with &nbsp;
        <a
          href="https://nextjs.org/"
          rel="noopener noreferrer"
          target="__blank"
        >
          <img src="/images/nextjs.png" className="h-6 w-6" />
        </a>
        &nbsp;
        <a
          href="https://www.typescriptlang.org/"
          rel="noopener noreferrer"
          target="__blank"
        >
          <img src="/images/typescript.png" className="h-6 w-6" />
        </a>
        &nbsp; and &nbsp;
        <a
          href="https://tailwindcss.com/"
          rel="noopener noreferrer"
          target="__blank"
        >
          <img src="/images/tailwindcss.svg" className="h-6 w-6" />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
