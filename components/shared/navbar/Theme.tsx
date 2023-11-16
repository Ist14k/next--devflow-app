'use client';

import React from 'react';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar';

import { useTheme } from '@/context/ThemeProvider';
import Image from 'next/image';
import { themes } from '@/constants';

const Theme = () => {
  const { mode, setMode } = useTheme();

  return (
    <Menubar className="relative border-none bg-transparent shadow-[0px]">
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
          {mode === 'light' ? (
            <Image src="/assets/icons/sun.svg" alt="sun" width={20} height={20} className="active-theme" />
          ) : (
            <Image src="/assets/icons/moon.svg" alt="moon" width={20} height={20} className="active-theme" />
          )}
        </MenubarTrigger>
        <MenubarContent className="absolute right-[-3rem] mt-3 min-w-[120px] rounded border py-2 dark:border-dark-200 dark:bg-dark-300">
          {themes.map(el => (
            <MenubarItem
              key={el.value}
              className="flex cursor-pointer items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400"
              onClick={() => {
                setMode(el.value);

                if (el.value !== 'system') {
                  localStorage.theme = el.value;
                } else {
                  localStorage.removeItem('theme');
                }
              }}
            >
              <Image
                src={el.icon}
                alt={el.value}
                width={16}
                height={16}
                className={mode === el.value ? 'active-theme' : ''}
              />
              <p
                className={
                  'body-semibold text-light-500' +
                  (mode === el.value ? ' text-primary-500' : ' text-dark100_light900')
                }
              >
                {el.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
