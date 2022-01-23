import { CodeIcon, GlobeIcon } from '@heroicons/react/outline';

export const userData = {
  name: 'Robert Renzo Rudio',
  email: 'robertrenzo@rudio.dev',
  socialLinks: {
    github: 'https://github.com/robertrenzorudio',
    linkedin: 'https://linkedin.com/in/robertrenzorudio',
  },
};

type Project = {
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
};

export const projects: Project[] = [
  {
    name: 'GeographQL',
    description:
      'A country, state, and city GraphQL API. It features cursor-based pagination ' +
      'that follows the GraphQL cursor connection specification and rate limiting.',
    imgSrc: '/images/geographql.svg',
    links: [
      {
        link: 'https://github.com/robertrenzorudio/geographql',
        linkName: 'Repo',
        icon: CodeIcon,
      },
      {
        link: 'https://geographql.netlify.app',
        linkName: 'Website',
        icon: GlobeIcon,
      },
    ],
    techStack: [
      'Typescript',
      'GraphQL',
      'PostgreSQL',
      'Prisma',
      'Redis',
      'Docker',
    ],
    isFeatured: true,
  },
  {
    name: 'NightLight',
    description:
      'A system design capstone group project where we built an IoT security camera device. ' +
      'It features noise/movement detection, voice commands, notification system, cloud storage ' +
      'and a GUI.',
    imgSrc: '/images/nightlight.svg',
    links: [
      {
        link: 'https://github.com/robertrenzorudio/nightlight',
        linkName: 'Repo',
        icon: CodeIcon,
      },
    ],
    techStack: ['Python', 'AWS EC2/S3/RDS', 'Raspberry Pi'],
    isFeatured: true,
  },
  {
    name: 'ReactShop',
    description: 'A simple e-commerce web app.',
    imgSrc: '/images/reactshop.svg',
    links: [
      {
        link: 'https://github.com/robertrenzorudio/react-shop',
        linkName: 'Repo',
        icon: CodeIcon,
      },
      {
        link: 'https://react-shop-tau.vercel.app',
        linkName: 'Website',
        icon: GlobeIcon,
      },
    ],
    techStack: ['React', 'Typescript', 'Prisma'],
    isFeatured: true,
  },
];

type Skills = {
  title: string;
  href: string;
  src: string;
  alt: string;
};

export const languages: Skills[] = [
  {
    title: 'TypeScript',
    href: 'https://www.typescriptlang.org',
    src: '/images/typescript.png',
    alt: 'TypeScript Logo',
  },
  {
    title: 'JavaScript',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    src: '/images/javascript.svg',
    alt: 'JavaScript Logo',
  },
  {
    title: 'Python',
    href: 'https://www.python.org',
    src: '/images/python.svg',
    alt: 'Python Logo',
  },
  {
    title: 'C',
    href: 'https://en.wikipedia.org/wiki/C_(programming_language)',
    src: '/images/c.png',
    alt: 'C Logo',
  },
  {
    title: 'C++',
    href: 'https://www.cplusplus.com',
    src: '/images/c++.png',
    alt: 'C++ Logo',
  },
];

export const technologies: Skills[] = [
  {
    title: 'Node.js',
    href: 'https://nodejs.org/en/',
    src: '/images/nodejs.svg',
    alt: 'Node.js Logo',
  },
  {
    title: 'GraphQL',
    href: 'https://graphql.org',
    src: '/images/graphql.svg',
    alt: 'GrahpQL Logo',
  },
  {
    title: 'Express.js',
    href: 'https://expressjs.com',
    src: '/images/expressjs.svg',
    alt: 'Express Logo',
  },
  {
    title: 'React.js',
    href: 'https://reactjs.org/',
    src: '/images/reactjs.svg',
    alt: 'React.js Logo',
  },
  {
    title: 'Next.js',
    href: 'https://nextjs.org/',
    src: '/images/nextjs.png',
    alt: 'Next.js Logo',
  },
  {
    title: 'Prisma',
    href: 'https://www.prisma.io/',
    src: '/images/prisma.svg',
    alt: 'Prisma Logo',
  },
  {
    title: 'PostgreSQL',
    href: 'https://www.postgresql.org',
    src: '/images/postgresql.svg',
    alt: 'PostgreSQL Logo',
  },
  {
    title: 'Redis',
    href: 'https://redis.com',
    src: '/images/redis.svg',
    alt: 'Redis Logo',
  },
  {
    title: 'AWS',
    href: 'https://aws.amazon.com',
    src: '/images/aws.svg',
    alt: 'AWS Logo',
  },
  {
    title: 'Digital Ocean',
    href: 'https://www.digitalocean.com',
    src: '/images/digitalocean.svg',
    alt: 'Digital Ocean Logo',
  },
];
//
