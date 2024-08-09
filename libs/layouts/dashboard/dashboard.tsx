import { Footer, Header } from '@libs/layouts';
import type { ReactNode } from 'react';

import Baner from '../headerBaner';

interface myprop {
  children: ReactNode;
}

const Dashboard: React.FC<myprop> = ({ children }) => {
  return (
    <div>
      <Header />
      <Baner />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default Dashboard;
