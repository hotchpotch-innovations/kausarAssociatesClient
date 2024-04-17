import Image from "next/image";
import React from "react";

const ReviewCard = () => {
  return (
    <div className="w-full md:w-4/5 mx-auto mb-8">
      {/* Image Part */}
      <div className="flex justify-start items-start">
        <div className="avatar mr-8">
          <div className="w-24 rounded-full ring ring-blue-600 ring-offset-base-100 ring-offset-4">
            <Image
              src={
                "https://img.freepik.com/free-photo/young-beautiful-woman-smiling-posing-purple-wall_176420-2852.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699228800&semt=ais"
              }
              alt=""
              width={200}
              height={200}
            />
          </div>
        </div>

        {/* Review Part */}
        <div className="mt-6">
          
            {/* Name  */}
            <div className="">
              <div>
                <h5 className="font-semibold text-xs md:text-sm text-blue-600">
                  <em>Zara Ahmed</em>
                </h5>
              </div>
            </div>

            {/* Ratting  */}
            <div className="rating rating-xs mb-4">
              <input
                type="radio"
                name={''}
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name={''}
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name={''}
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name={''}
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name={''}
                className="mask mask-star-2 bg-orange-400"
              />
            </div>

            {/* Review  */}
            <div className="">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident cupiditate nostrum natus modi ea nesciunt ab ad
                recusandae vel repellat?
              </p>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
