import Head from 'next/head';
import { useRouter } from 'next/router';
import Drawer from './Drawer';
import Footer from './Footer';
import Nav from './Nav';
import { useState } from 'react';

interface Props {
  meta?: { [key: string]: string };
}

const Container: React.FC<Props> = ({ children, meta: cMeta }) => {
  const router = useRouter();
  const meta = {
    title: 'Robert Renzo Rudio',
    description: 'Back-end developer',
    image: '/favicon.ico',
    type: 'website',
    ...cMeta,
  };

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://rudio.dev${router.asPath}`} />
        <link rel="canonical" href={`https://rudio.dev${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Robert Renzo Rudio" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta
          name="theme-color"
          content="#f3f4f6"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#1f2937"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      <div className="w-full flex-col min-h-screen overflow-x-hidden bg-gray-100 dark:bg-gray-800 selection:bg-teal-250 dark:selection:bg-rose-500">
        <Nav isOpen={drawerIsOpen} setIsOpen={setDrawerIsOpen} />
        <Drawer isOpen={drawerIsOpen} setIsOpen={setDrawerIsOpen} />
        <main className="space-y-14 mt-28">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Container;
