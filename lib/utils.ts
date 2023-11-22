import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimeAgo = (date: Date): string => {
  const now: Date = new Date();
  const diff = now.getTime() - date.getTime();

  const minute = 60 * 1000;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;
  const year = day * 365;

  if (diff >= year) {
    return Math.floor(diff / year) + ' year(s) ago';
  } else if (diff >= month) {
    return Math.floor(diff / month) + ' month(s) ago';
  } else if (diff >= week) {
    return Math.floor(diff / week) + ' week(s) ago';
  } else if (diff >= day) {
    return Math.floor(diff / day) + ' day(s) ago';
  } else if (diff >= hour) {
    return Math.floor(diff / hour) + ' hour(s) ago';
  } else if (diff >= minute) {
    return Math.floor(diff / minute) + ' minute(s) ago';
  } else {
    return 'Just now';
  }
};

export const formatNumber = (number: number): string => {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(2) + 'M';
  } else if (number >= 1000) {
    return (number / 1000).toFixed(2) + 'K';
  } else {
    return number.toString();
  }
};
