import GraphemeSplitter from 'grapheme-splitter';
import Typewriter from 'typewriter-effect';

interface Props {}

const Intro = (props: Props) => {
  const stringSplitter: any = (str: string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(str);
  };
  return (
    <div className="flex justify-between mx-auto px-6 md:px-12 lg:px-0 lg:max-w-3xl 2xl:max-w-5xl">
      <div className="w-11/12 lg:w-4/5 flex flex-col text-blue-1100 dark:text-indigo-100 space-y-3 ">
        <span className="text-lg font-light">Hey there, I am</span>
        <span className="text-3xl md:text-5xl text-rose-600 dark:text-orange-500 font-extrabold">
          <Typewriter
            options={{ delay: 50, stringSplitter }}
            onInit={(typewriter) =>
              typewriter.typeString('Robert Renzo Rudio 👋 ').start()
            }
          />
        </span>
        <p className="text-lg font-light">
          I am a recent graduate from{' '}
          <a
            href="https://samueli.ucla.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-semibold"
          >
            UCLA
          </a>{' '}
          with a Bachelor&apos;s Degree in Computer Engineering (December 2021).
          I am interested in full-stack, back-end, and embedded software
          development.
        </p>
      </div>
    </div>
  );
};

export default Intro;
