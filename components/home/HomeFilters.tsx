import { HomePageFilters } from '@/constants/filters';
import React from 'react';
import { Button } from '../ui/button';

const HomeFilters = () => {
  const active: string = 'newest';

  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {HomePageFilters.map(el => (
        <Button
          key={el.value}
          className={`body-medium rounded-lg px-6 py-3 capitalize shadow-[0px] ${
            active === el.value
              ? 'bg-primary-100 text-primary-500 dark:bg-dark-200'
              : 'bg-light-800 text-light-500 hover:bg-light-700 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-500'
          }`}
        >
          {el.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilters;
