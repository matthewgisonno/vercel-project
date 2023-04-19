import classNames from "classnames";

interface PProps {
  className?: string;
  children: React.ReactNode;
}

const P = ({ className, children }: PProps): JSX.Element => {
  return (
    <p className={classNames("[&:not(:last-child)]:mb-5", className)}>
      {children}
    </p>
  );
};

export default P;
