// import { clients } from "@/components/dashboard/fakeData/clients";
// import ClientPostForm from "@/components/dashboard/managements/website/home-page/forms/create-forms/ClientPostForm";
// import HeroPostForm from "@/components/dashboard/managements/website/home-page/forms/create-forms/HeroPostForm";
// import TeamPostForm from "@/components/dashboard/managements/website/home-page/forms/create-forms/TeamPostForm";
// import ClientTable from "@/components/dashboard/managements/website/home-page/tables/ClientTable";
// import HeroTable from "@/components/dashboard/managements/website/home-page/tables/HeroTable";
// import TeamTable from "@/components/dashboard/managements/website/home-page/tables/TeamTable";
import React from "react";

const HomepageDashboard = () => {
  return (
    <section>
      <div>
        {/* Hero section  */}
        <div className="px-6 md:px-8 lg:px-10 py-4 md:py-6 lg:py-8">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 text-gray-500">
            1. Hero Section :
          </h3>
          <div className="w-full grid grid-cols-1 gap-3">
            <div>
              <div className="mb-2 flex justify-end">
                {/* <HeroPostForm /> */}
              </div>
              {/* <HeroTable /> */}
            </div>
          </div>
        </div>

        {/* Team section  */}

        <div className="px-6 md:px-8 lg:px-10 py-4 md:py-6 lg:py-8">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 text-gray-500">
            2. Team Section :
          </h3>
          <div className="w-full grid grid-cols-1 gap-3">
            <div>
              <div className="mb-2 flex justify-end">
                {/* <TeamPostForm /> */}
              </div>
              {/* <TeamTable /> */}
            </div>
          </div>
        </div>

        {/* Team section  */}

        <div className="px-6 md:px-8 lg:px-10 py-4 md:py-6 lg:py-8">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 text-gray-500">
            3. Our Client Section :
          </h3>
          <div className="w-full grid grid-cols-1 gap-3">
            <div>
              <div className="mb-2 flex justify-end">
                {/* <ClientPostForm /> */}
              </div>
              {/* <ClientTable clients={clients} /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageDashboard;
