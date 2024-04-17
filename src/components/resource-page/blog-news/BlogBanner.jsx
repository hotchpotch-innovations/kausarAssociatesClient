import React from 'react';

const BlogBanner = ({title}) => {
    return (
      <section className="h-40 md:h-60 lg:h-72 bg-[url(https://wallpapercave.com/wp/wp4989892.jpg)] bg-cover bg-center mb-8">
        <div className="h-40 md:h-60 lg:h-72 bg-gradient-to-l from-blue-700/60 via-blue-700/60 to-blue-700/60 bg-cover flex justify-center items-center">
          <div className=" text-white">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              {title}
            </h1>
          </div>
        </div>
      </section>
    );
};

export default BlogBanner;