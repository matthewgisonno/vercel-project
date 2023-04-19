interface HighlightProps {
  children: React.ReactNode;
}

const Highlight = ({ children }: HighlightProps): JSX.Element => {
  return <span className="bg-gray-300 px-1">{children}</span>;
};

export default Highlight;
