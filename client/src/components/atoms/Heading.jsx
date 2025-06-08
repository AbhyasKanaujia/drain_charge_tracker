const Heading = ({ level = 1, children }) => {
  const Tag = `h${level}`;
  const sizes = {
    1: 'text-2xl font-bold',
    2: 'text-xl font-semibold',
    3: 'text-lg font-medium',
  };

  return <Tag className={`${sizes[level] || sizes[3]} text-gray-800`}>{children}</Tag>;
};

export default Heading;
