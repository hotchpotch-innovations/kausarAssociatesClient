import BlogBanner from '@/components/resource-page/blog-news/BlogBanner';
import FormsHeader from '@/components/resource-page/forms/FormsHeader';
import FormsTable from '@/components/resource-page/forms/FormsTable';
import SearchForms from '@/components/resource-page/forms/SearchForms';
import React from 'react';

const page = () => {
    return (
        <section>
            <BlogBanner title={"Forms"}/>
            <div className='content-container'>
                <FormsHeader/>
                <SearchForms/>
                <FormsTable/>
            </div>
        </section>
    );
};

export default page;