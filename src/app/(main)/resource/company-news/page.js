import BlogBanner from '@/components/resource-page/blog-news/BlogBanner';
import BlogsSection from '@/components/resource-page/blog-news/BlogsSection';
import CategoriesBlogSection from '@/components/resource-page/blog-news/CategoriesBlogSection';
import RecentBlogSection from '@/components/resource-page/blog-news/RecentBlogSection';
import React from 'react';

const page = () => {
    return (
        <section>
      <div>
        <BlogBanner title={'Company News'}/>
      </div>
      <div className="content-container">
        <div className="flex flex-col md:flex-col lg:flex-row justify-between gap-6">
          <div className="w-full md:w-full lg:w-9/12">
            <BlogsSection />
          </div>
          <div className="w-full md:w-full lg:w-3/12">
            <RecentBlogSection />
            <CategoriesBlogSection />
          </div>
        </div>
      </div>
        </section>
    );
};

export default page;