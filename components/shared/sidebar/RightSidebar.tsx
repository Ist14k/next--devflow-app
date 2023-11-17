import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Tag from '../elements/Tag';

function RightSidebar() {
  const randomQuestions = [
    { _id: 1, question: 'How do CSS preprocessors streamline efficient web development workflows?' },
    {
      _id: 2,
      question: 'What factors distinguish mobile responsiveness optimization from desktop optimization?',
    },
    { _id: 3, question: 'Contrast client-side scripting and server-side scripting in web development.' },
    { _id: 4, question: 'Why is semantic HTML crucial for accessibility and SEO?' },
    { _id: 5, question: 'Explain the significance of Git in collaborative web development projects.' },
  ];

  const randomTags = [
    { _id: 1, name: 'JavaScript', totalQuestions: 5 },
    { _id: 1, name: 'React', totalQuestions: 4 },
    { _id: 1, name: 'Next', totalQuestions: 4 },
    { _id: 1, name: 'TypeScript', totalQuestions: 3 },
    { _id: 1, name: 'Angular', totalQuestions: 1 },
  ];
  const renderedQuestions = randomQuestions.map(el => {
    return (
      <Link
        key={el._id}
        href={'/questions/' + el._id}
        className="flex cursor-pointer items-center justify-between gap-7"
      >
        <p className="body-medium text-dark500_light500">{el.question}</p>
        <Image
          src="/assets/icons/chevron-right.svg"
          alt="chevron-right"
          width={20}
          height={20}
          className="invert-colors"
        />
      </Link>
    );
  });

  const renderedTags = randomTags.map(el => (
    <Tag key={el._id} _id={el._id} name={el.name} totalQuestions={el.totalQuestions} showCount />
  ));

  return (
    <section className="background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-dark-100 max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-8">{renderedQuestions}</div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">{renderedTags}</div>
      </div>
    </section>
  );
}

export default RightSidebar;
