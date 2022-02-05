import { CodeIcon, GlobeIcon } from '@heroicons/react/outline';

let siteToIconMap = new Map<
  string,
  (props: React.ComponentProps<'svg'>) => JSX.Element
>([
  ['Website', GlobeIcon],
  ['Repo', CodeIcon],
]);

const siteToIcon = (name: string) => {
  return siteToIconMap.get(name);
};

export default siteToIcon;
