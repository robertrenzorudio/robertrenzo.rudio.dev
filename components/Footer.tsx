import Link from 'next/link';
import React from 'react';
import { userData } from '../constants';
import Image from 'next/image';

interface Props {}

const Footer = (props: Props) => {
  return (
    <footer className="flex flex-col mx-auto w-full px-6 pt-20 pb-8 md:px-12 lg:px-0 lg:max-w-3xl 2xl:max-w-5xl">
      <hr className="pb-8 border-1 border-rose-600 dark:border-orange-500"></hr>

      <div className="grid grid-cols-2">
        <div className="flex flex-col space-y-4 ">
          <Link href="/">
            <a className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-400">
              Home
            </a>
          </Link>
          <Link href="/projects">
            <a className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-400">
              Projects
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4 overflow-scroll">
          <a
            href={userData.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-400"
          >
            Github
          </a>

          <a
            href={userData.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="flex space-x-2 relative items-center mt-4">
        <p className="text-gray-600">Built with</p>
        <a
          href="https://nextjs.org/"
          rel="noopener noreferrer"
          target="__blank"
          className="relative w-6 h-6"
        >
          <Image src="/images/nextjs.png" layout="fill" alt="Nextjs Logo" />
        </a>
        <a
          href="https://www.typescriptlang.org"
          rel="noopener noreferrer"
          target="__blank"
          className="relative w-6 h-6"
        >
          <Image
            src="/images/typescript.png"
            layout="fill"
            alt="TypeScript Logo"
          />
        </a>
        <p className="text-gray-600">and</p>
        <a
          href="https://tailwindcss.com"
          rel="noopener noreferrer"
          target="__blank"
          className="relative w-6 h-6"
        >
          <Image
            src="/images/tailwindcss.svg"
            layout="fill"
            alt="Tailwindcss Logo"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
