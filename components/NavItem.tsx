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
            'font-medium text-gray-800 dark:text-gray-100',
            {
              'underline underline-offset-8 decoration-2 decoration-rose-500':
                isActive,
            },
            'hidden md:inline-block hover:underline underline-offset-8 decoration-2 decoration-rose-500 transition-all'
          )}
        >
          {name}
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
