"use client";
import { useState } from "react";
import { ProductsWReviews } from "@api";
import { Review } from "@fullstackdemo/db";

type ProductCardProps = {
  product: ProductsWReviews[number];
};
const ProductCard = ({ product: { name, description, price, reviews } }: ProductCardProps) => {
  return (
    <div className="p-4 border border-gray-200 rounded-lg shadow">
      <p className="font-bold text-lg">{name}</p>
      <p className="text-justify">{description}</p>
      <p className="text-[1.2rem] font-bold text-slate-700 text-right">$ {price}</p>
      <SeeReviewsToggle reviews={reviews} />
    </div>
  );
};

// from heroicons: https://heroicons.com/
const EyeOpen = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const EyeSlash = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
    />
  </svg>
);
type SeeReviewsToggleProps = {
  reviews: Review[];
};
const SeeReviewsToggle = ({ reviews }: SeeReviewsToggleProps) => {
  const [showReviews, setShowReviews] = useState(false);

  const reviewDate = (dateData: Date) => {
    return new Intl.DateTimeFormat("en-US").format(new Date(dateData));
  };
  return (
    <div>
      <button
        onClick={() => setShowReviews((bool) => !bool)}
        className=" flex gap-2 items-center text-green-700 hover:text-white border border-green-700 
        hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-100 font-medium rounded-lg text-sm 
        px-4 py-2 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white 
        dark:hover:bg-green-600 dark:focus:ring-green-800"
      >
        <span>Reviews</span>
        <span className="w-6 h-6">{showReviews ? EyeSlash : EyeOpen}</span>
      </button>
      {showReviews && (
        <div>
          {reviews.map((r) => (
            <div key={r.id}>
              <p>{r.body.slice(0, 30)}</p>
              <p>{reviewDate(r.createdAt)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { ProductCard };
