import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from './Footer';
import Nav from './Nav';

interface Props {}

const Container: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const meta = {
    title: 'Robert Renzo Rudio',
    description: 'Back-end developer',
    image: '/favicon.ico',
    type: 'website',
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://robertrenzorudio.dev${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://robertrenzorudio.dev${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Robert Renzo Rudio" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
      </Head>
      <div className="flex flex-col justify-center px-8">
        <Nav />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Container;
