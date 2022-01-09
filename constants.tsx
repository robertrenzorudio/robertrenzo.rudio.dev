import { CodeIcon, GlobeIcon } from '@heroicons/react/outline';

export const userData = {
  name: 'Robert Renzo Rudio',
  email: 'robertrenzorudio@gmail.com',
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
