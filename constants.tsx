export const userData = {
  name: 'Robert Renzo Rudio',
  email: 'robertrenzorudio@gmail.com',
  socialLinks: {
    github: 'https://github.com/robertrenzorudio',
    linkedin: 'https://linkedin.com/in/robertrenzorudio',
  },
};

export const featuredProjects = [
  {
    name: 'GeographQL',
    description:
      'A country, state, and city GraphQL API. It features cursor-based pagination ' +
      'that follows the GraphQL cursor connection specification and rate limiting',
    imgSrc: '/images/geographql.svg',
    imgAlt: 'GeographQL Image',
    links: {
      repo: 'https://github.com/robertrenzorudio/geographql',
      website: 'https://geographql.netlify.app',
    },
    techStack: [
      'Typescript',
      'GraphQL',
      'PostgreSQL',
      'Prisma',
      'Redis',
      'Docker',
    ],
  },
  {
    name: 'NightLight',
    description:
      'A system design capstone group project where we built an IoT security camera device. ' +
      'It features noise/movement detection, voice commands, notification system, cloud storage' +
      'and a GUI',
    imgSrc: '/images/nightlight.svg',
    imgAlt: 'NightLight Image',
    links: {
      repo: 'https://github.com/robertrenzorudio/nightlight',
    },
    techStack: ['Python', 'AWS EC2/S3/RDS', 'Raspberry Pi'],
  },
  {
    name: 'ReactShop',
    description: 'A simple e-commerce web app.',
    imgSrc: '/images/reactshop.svg',
    imgAlt: 'NightLight Image',
    links: {
      repo: 'https://github.com/robertrenzorudio/react-shop',
      website: 'https://react-shop-tau.vercel.app',
    },
    techStack: ['React', 'Typescript', 'Prisma'],
  },
];
