import React from 'react';
import { UserButton } from '@clerk/nextjs';

const Home = () => {
  return (
    <div>
      <h1 className="h1-bold">This is a pice of text!</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Home;
