import Image from 'next/image';
import React from 'react';
import { Input } from '@/components/ui/input';

interface LocalSearchPropsType {
  route: string;
  iconPosition: string;
  iconSrc: string;
  placeholder: string;
  otherClass: string;
}

const LocalSearch = ({ route, iconPosition, iconSrc, placeholder, otherClass }: LocalSearchPropsType) => {
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[50px] grow ${
        iconPosition === 'right' ? 'flex-row-reverse' : ''
      } items-center gap-4 rounded-xl px-4 ${otherClass}`}
    >
      <Image
        src="/assets/icons/search.svg"
        alt="search-icon"
        width={24}
        height={24}
        className="cursor-pointer"
      />
      <Input
        type="text"
        placeholder={placeholder}
        className="paragraph-regular no-focus placeholder text-dark400_light700 border-none bg-transparent shadow-[0px]"
      />
    </div>
  );
};

export default LocalSearch;
