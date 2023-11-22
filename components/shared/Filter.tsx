'use client';
import React from 'react';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SelectGroup } from '@radix-ui/react-select';

interface FilterProps {
  filters: {
    name: string;
    value: string;
  }[];
  otherClass?: string;
  containerClass?: string;
}

const Filter = ({ filters, otherClass, containerClass }: FilterProps) => {
  return (
    <div className={`relative ${containerClass}`}>
      <Select>
        <SelectTrigger
          className={`${otherClass} body-regular light-border background-light800_dark300 text-dark500_light700 border px-5 py-2.5`}
        >
          <div className="line-clamp-1 flex-1 text-left">
            <SelectValue placeholder="Select a Value" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {filters.map(el => (
              <SelectItem key={el.value} value={el.value}>
                {el.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filter;