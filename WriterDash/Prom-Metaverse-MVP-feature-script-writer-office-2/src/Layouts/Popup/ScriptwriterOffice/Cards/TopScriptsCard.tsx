import * as React from "react";
import FilterImage from '../../../../assets/Filter-2--Streamline-Core.svg';
import FrenchTwist from '../../../../assets/french-twist-small.svg';
import FourStars from '../../../../assets/stars4.svg';

interface BookItemProps {
  imageSrc: string;
  title: string;
  pages: number;
  votes: number;
  reviews: number;
  coverage: number;
  ratingImageSrc: string;
}

const BookItem: React.FC<BookItemProps> = ({
  imageSrc,
  title,
  pages,
  votes,
  reviews,
  coverage,
  ratingImageSrc
}) => (
  <article className="flex flex-col justify-center w-full max-md:max-w-full">
    <div className="flex gap-5 justify-between w-full border-0 border-gray-400 border-solid max-md:flex-wrap max-md:max-w-full">
      <div className="flex gap-4 items-center">
        <img loading="lazy" src={imageSrc} alt={`Cover of ${title}`} className="shrink-0 aspect-square w-[50px] center" />
        <div className="flex flex-col">
          <h3 className="text-xl font-medium text-slate-900">{title}</h3>
          <p className="text-base leading-5 text-gray-700">{pages} pages</p>
        </div>
      </div>
      <div className="flex flex-col justify-center py-2 whitespace-nowrap">
        <p className="text-xl font-medium text-slate-900">{votes}</p>
        <p className="mt-3 text-base leading-5 text-gray-700">Votes</p>
      </div>
      <div className="flex flex-col justify-center py-2 whitespace-nowrap">
        <p className="text-xl font-medium text-slate-900">{reviews}</p>
        <p className="mt-3 text-base leading-5 text-gray-700">Reviews</p>
      </div>
      <div className="flex flex-col justify-center pt-2 pb-0.5 whitespace-nowrap">
        <p className="self-center text-xl font-medium text-slate-900">{coverage}</p>
        <p className="mt-3.5 text-base leading-5 text-gray-700">Coverage</p>
      </div>
      <img loading="lazy" src={ratingImageSrc} alt={`Rating for ${title}`} className="shrink-0 my-auto aspect-[5.88] w-[99px]" />
    </div>
  </article>
);

interface TopScriptProps {}

const TopScript: React.FC<TopScriptProps> = () => {
  const bookItems: BookItemProps[] = [
    {
      imageSrc: FrenchTwist,
      title: "French Twist",
      pages: 135,
      votes: 123,
      reviews: 10,
      coverage: 7,
      ratingImageSrc: FourStars
    },
    {
        imageSrc: FrenchTwist,
        title: "French Twist",
        pages: 135,
        votes: 123,
        reviews: 10,
        coverage: 7,
        ratingImageSrc: FourStars
      },
      {
        imageSrc: FrenchTwist,
        title: "French Twist",
        pages: 135,
        votes: 123,
        reviews: 10,
        coverage: 7,
        ratingImageSrc: FourStars
      },
      {
        imageSrc: FrenchTwist,
        title: "French Twist",
        pages: 135,
        votes: 123,
        reviews: 10,
        coverage: 7,
        ratingImageSrc: FourStars
      },
      {
        imageSrc: FrenchTwist,
        title: "French Twist",
        pages: 135,
        votes: 123,
        reviews: 10,
        coverage: 7,
        ratingImageSrc: FourStars
      }
  ];

  return (
    <div className="flex flex-col max-w-[824px]">
      <div className="flex gap-5 justify-between self-end">
        <div className="flex gap-1.5 px-5">
            <div className='filter-text-icon'>
                <img src={FilterImage} alt='filter' className='filter-image' />
                <p>Filter By</p>
            </div>
            </div>
      </div>
      <section className="flex flex-col mt-6 w-full max-md:max-w-full">
        {bookItems.map((item, index) => (
          <BookItem key={index} {...item} />
        ))}
      </section>
    </div>
  );
};

export default TopScript;