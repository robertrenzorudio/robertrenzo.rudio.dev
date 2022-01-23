import Image from 'next/image';

interface Props {
  title: string;
  href: string;
  src: string;
  alt: string;
}

const Icon = ({ title, href, src, alt }: Props) => {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="__blank"
      className="relative w-14 h-14 ml-2 mt-2 rounded-2xl overflow-hidden border-2 border-gray-500 bg-white transition ease-in-out hover:-translate-y-1 hover:scale-110"
    >
      <Image title={title} src={src} layout="fill" alt={alt} />
    </a>
  );
};

export default Icon;
