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
    <Link href={href}>
      <a
        href="#"
        className={cn(
          'font-medium text-blue-1100 dark:text-indigo-100',
          {
            'underline underline-offset-8 decoration-2 decoration-indigo-700 dark:decoration-orange-150':
              isActive,
          },
          'hover:underline underline-offset-8 decoration-2 decoration-indigo-700 dark:decoration-orange-150'
        )}
      >
        {name}
      </a>
    </Link>
  );
};

export default NavItem;
