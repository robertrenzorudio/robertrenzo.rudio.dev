export type Link = {
  link: string;
  linkName: string;
};

export type Project = {
  name: string;
  description: string;
  imgSrc?: string;
  techStack: string[];
  links: Link[];
  isFeatured: boolean;
  startDate: string;
};
