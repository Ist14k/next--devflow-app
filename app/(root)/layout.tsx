import React from 'react';

import Navbar from '@/components/shared/navbar/Navbar';
import LeftSidebar from '@/components/shared/sidebar/LeftSidebar';
import RightSidebar from '@/components/shared/sidebar/RightSidebar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex">
        <LeftSidebar />
        <section className="flex min-h-screen flex-1 flex-col p-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        <RightSidebar />
      </div>
      Toaster
    </main>
  );
};

export default Layout;