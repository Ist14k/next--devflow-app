import React, { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formatNumber } from '@/lib/utils';

interface MetricProps {
  imgUrl: string;
  alt: string;
  value: number | string;
  title: string;
  href?: string;
  textStyle?: string;
  isAuthor?: boolean;
}

const Metric = ({ imgUrl, alt, value, title, href, textStyle, isAuthor }: MetricProps) => {
  const metricContent = (
    <Fragment>
      <Image
        src={imgUrl}
        alt={alt}
        width={16}
        height={16}
        className={`object-contain ${href ? 'rounded-full' : ''}`}
      />

      <p className={`${textStyle} flex items-center gap-1`}>
        {isAuthor ? value : formatNumber(value)}
        <span className={`small-regular line-clamp-1 ${isAuthor && 'max-sm:hidden'}`}>{title}</span>
      </p>
    </Fragment>
  );
  return (
    <div className="flex-center flex-wrap gap-1">
      {href ? (
        <Link className="flex-center gap-1" href={href}>
          {metricContent}
        </Link>
      ) : (
        metricContent
      )}
    </div>
  );
};

export default Metric;
