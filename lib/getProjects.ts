import { prisma } from './prisma';
import { Link, Project } from 'types/Project';
import urljoin from 'url-join';

export const getProjects = async () => {
  const data = await prisma.project.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      imgName: true,
      links: true,
      isFeatured: true,
      startDate: true,
      techStack: { select: { name: true } },
    },
  });

  const projects = data.map((d) => {
    return {
      ...d,
      imgSrc: d.imgName
        ? urljoin(process.env.NEXT_PUBLIC_PORTFOLIO_STATIC_URL!, d.imgName)
        : null,
      links: d.links as Link[],
      techStack: d.techStack.map((t) => t.name),
      startDate: d.startDate.toString(),
    };
  }) as Project[];

  return projects;
};
