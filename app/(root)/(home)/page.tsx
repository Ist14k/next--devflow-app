import React from 'react';
import { UserButton } from '@clerk/nextjs';

const Home = () => {
  return (
    <div>
      <h1>Root Page</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Home;
