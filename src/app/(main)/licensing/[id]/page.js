import Banner from '@/components/service-page/Banner';
import DetailsTitleSection from '@/components/service-page/DetailsTitleSection';
import HowWeHelp from '@/components/service-page/HowWeHelp';
import React from 'react';

const page = () => {
    return (
        <section>
        <Banner></Banner>
        <DetailsTitleSection></DetailsTitleSection>
        <HowWeHelp></HowWeHelp>
        </section>
    );
};

export default page;