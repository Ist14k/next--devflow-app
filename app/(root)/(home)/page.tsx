import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { Fragment } from 'react';
import LocalSearch from '@/components/shared/search/LocalSearch';
import Filter from '@/components/shared/Filter';
import { HomePageFilters } from '@/constants/filters';
import HomeFilters from '@/components/home/HomeFilters';
import NoResults from '@/components/shared/NoResults';
import QuestionCard from '@/components/cards/QuestionCard';

const questions = [
  {
    _id: '1',
    title: 'How to code in TypeScript?',
    tags: [
      { _id: '101', name: 'TypeScript' },
      { _id: '102', name: 'Programming' },
    ],
    author: {
      _id: '201',
      name: 'John Doe',
      picture: 'https://example.com/johndoe.jpg',
    },
    upvotes: 1560,
    views: 100,
    answers: [
      {
        /* Structure of an answer object can be defined here */
      },
    ],
    createdAt: new Date('2023-11-20'),
  },
  {
    _id: '2',
    title: 'What is the best way to learn React?',
    tags: [
      { _id: '103', name: 'React' },
      { _id: '104', name: 'JavaScript' },
    ],
    author: {
      _id: '202',
      name: 'Jane Smith',
      picture: 'https://example.com/janesmith.jpg',
    },
    upvotes: 20,
    views: 1250,
    answers: [
      {
        /* Structure of an answer object can be defined here */
      },
    ],
    createdAt: new Date('2021-11-18'),
  },
  // Add more question objects as needed
];

const Home = () => {
  const renderedQuestions =
    questions.length > 0 ? (
      questions.map(el => (
        <QuestionCard
          key={el._id}
          _id={el._id}
          title={el.title}
          tags={el.tags}
          author={el.author}
          upvotes={el.upvotes}
          views={el.views}
          answers={el.answers}
          createdAt={el.createdAt}
        />
      ))
    ) : (
      <NoResults
        title="There's no question to show"
        body="Be the first to break silence! 🚀 Ask a Question and Kickstart the discussion. Our query could be the
        next big thing others learn from. Get involved! 💡"
        link="/"
        linkTitle="Ask a Question"
      />
    );

  return (
    <Fragment>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">Ask a Question</Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/"
          iconPosition="left"
          iconSrc="/assets/icons/search.svg"
          placeholder="Search for Questions"
          otherClass="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClass="min-h-[56px] sm:min-w-[170px]"
          containerClass="hidden max-md:flex"
        />
      </div>
      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">{renderedQuestions}</div>
    </Fragment>
  );
};

export default Home;
