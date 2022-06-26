import { Link, useLocation } from 'react-router-dom';

const PrevURLLink: React.FC<React.ComponentProps<typeof Link>> = ({ state, ...props }) => {
  const location = useLocation();

  return (
    <Link state={{ ...state, prevURL: location.pathname }} {...props} />
  );
};

export default PrevURLLink;
