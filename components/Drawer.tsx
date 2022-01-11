import { XIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';
import DrawerItem from './DrawerItem';

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const navItems = [
  { href: '/', name: 'Home' },
  { href: '/projects', name: 'Projects' },
  { href: '/contact', name: 'Contact' },
];

const Drawer = ({ isOpen, setIsOpen }: Props) => {
  return (
    <div
      className={
        ' fixed overflow-hidden backdrop-blur-md z-20 inset-0 transform ease-in-out ' +
        (isOpen
          ? ' transition-opacity opacity-100 duration-500 -translate-x-0  '
          : ' transition-all delay-500 opacity-0 -translate-x-full  ')
      }
    >
      <div
        className={
          ' w-4/5 py-4 px-8 left-0 flex flex-col absolute bg-gray-200 dark:bg-nightowl-100 h-full delay-400 duration-500 ease-in-out transition-all transform' +
          (isOpen ? ' -translate-x-0 ' : ' -translate-x-full ')
        }
      >
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className={`w-9 h-9 rounded-lg flex items-center md:hidden flex-none`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <XIcon className="w-4/5 h-4/5 text-gray-800 dark:text-gray-100" />
        </button>
        <div className="flex flex-col items-center mt-6 flex-grow pt-6 space-y-6">
          {navItems.map(({ href, name }) => (
            <Fragment key={name}>
              <DrawerItem href={href} name={name} />
            </Fragment>
          ))}
        </div>
      </div>
      <div
        className="h-full cursor-pointer"
        onClick={() => {
          setIsOpen(false);
        }}
      ></div>
    </div>
  );
};

export default Drawer;
