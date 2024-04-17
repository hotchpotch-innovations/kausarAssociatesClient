import DownloadSection from '@/components/resource-page/resource-portal/DownloadSection';
import ProfileSection from '@/components/resource-page/resource-portal/ProfileSection';
import React from 'react';

const page = () => {
    return (
        <section>
            <div className='content-container'>
            <ProfileSection/>
            <DownloadSection/>
            </div>
        </section>
    );
};

export default page;