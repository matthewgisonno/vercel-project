import classNames from "classnames";

interface TitleProps {
  className?: string;
  children: React.ReactNode;
}

const Title = ({ className, children }: TitleProps): JSX.Element => {
  return (
    <h1
      className={classNames("text-xl text-bold mb-10 lg:text-3xl", className)}
    >
      {children}
    </h1>
  );
};

export default Title;
