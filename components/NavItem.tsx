import cn from 'classnames';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

interface Props {
  href: string;
  name: string;
}

const NavItem: React.FC<Props> = ({ href, name }) => {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <li>
      <Link href={href}>
        <a
          href="#"
          className={cn(
            'underline-animation',
            'text-blue-1100 dark:text-indigo-100',
            {
              'font-extrabold': isActive,
            },
            'decoration-2 decoration-indigo-700 dark:decoration-orange-500'
          )}
        >
          {name}
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
