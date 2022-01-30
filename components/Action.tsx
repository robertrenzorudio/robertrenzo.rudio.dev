interface ActionsProp {
  link: string;
  linkName: string;
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
}

const Action = (props: ActionsProp) => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className="h-9 flex items-center justify-center border-2 border-rose-600 dark:border-orange-150 p-1 text-rose-600 dark:text-orange-150 space-x-1"
    >
      <props.icon className="w-5 h-5" />
      <h5 className="">{props.linkName}</h5>
    </a>
  );
};

export default Action;
