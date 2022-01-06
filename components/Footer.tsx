import Link from 'next/link';
import React from 'react';
import { userData } from '../constants';

interface Props {}

const Footer = (props: Props) => {
  return (
    <footer className="flex flex-col max-w-2xl 2xl:max-w-4xl mx-auto w-full py-8 ">
      <hr className="pb-8 border-1 border-gray-600"></hr>

      <div className="grid grid-cols-2">
        <div className="flex flex-col space-y-4 text-center">
          <Link href="/">
            <a className="text-gray-600 hover:text-gray-800">Home</a>
          </Link>
          <Link href="/projects">
            <a className="text-gray-600 hover:text-gray-800">Projects</a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4 text-center overflow-scroll">
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
    </footer>
  );
};

export default Footer;
