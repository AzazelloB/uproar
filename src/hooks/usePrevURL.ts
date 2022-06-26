import { useLocation } from 'react-router-dom';

export const usePrevURL = () => {
  const location = useLocation();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return location.state?.prevURL || '/';
};
