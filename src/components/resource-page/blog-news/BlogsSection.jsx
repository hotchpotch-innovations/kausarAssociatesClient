import React from 'react';
import BlogCard from './BlogCard';
import PaginationButton from '@/components/common/Buttons/PaginationButton';

const BlogsSection = () => {
    return (
        <div className=''>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3'>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
            </div>
            <div className="my-6 md:my-8 lg:my-10 flex justify-center items-center">
                <PaginationButton/>
            </div>
        </div>
    );
};

export default BlogsSection;