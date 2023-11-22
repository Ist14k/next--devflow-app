import React from 'react';
import Link from 'next/link';
import Tag from '../shared/elements/Tag';
import Metric from '../shared/elements/Metric';
import { getTimeAgo } from '@/lib/utils';

interface QuestionProps {
  _id: string;
  title: string;
  tags: [{ _id: string; name: string }];
  author: { _id: string; name: string; picture: string };
  upvotes: number;
  views: number;
  answers: [{ _id: string }];
  createdAt: Date;
}

const QuestionCard = (props: QuestionProps) => {
  const { _id, title, tags, author, upvotes, views, answers, createdAt } = props;

  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div className="">
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimeAgo(createdAt)}
          </span>
          <Link href={'/question/' + _id}>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
              {title}
            </h3>
          </Link>
        </div>
      </div>
      <div className="mt-3.5 flex flex-wrap gap-2">
        {tags.map(el => (
          <Tag key={el._id} _id={el._id} name={el.name} />
        ))}
      </div>

      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <Metric
          imgUrl="/assets/icons/avatar.svg"
          alt="author"
          value={author.name}
          title={`- asked ${getTimeAgo(createdAt)}`}
          href={`profile/${author._id}`}
          isAuthor={true}
          textStyle="body-medium text-dark400_light700"
        />
        <Metric
          imgUrl="/assets/icons/like.svg"
          alt="upvotes"
          value={upvotes}
          title="votes"
          textStyle="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/message.svg"
          alt="message"
          value={answers.length}
          title="Answers"
          textStyle="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/eye.svg"
          alt="views"
          value={views}
          title="Views"
          textStyle="small-medium text-dark400_light800"
        />
      </div>
    </div>
  );
};

export default QuestionCard;