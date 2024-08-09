import type { ReactNode } from 'react';

interface myprop {
  children?: ReactNode;
}

const Home: React.FC<myprop> = ({ children }) => {
  return <div>{children}</div>;
};
export default Home;
