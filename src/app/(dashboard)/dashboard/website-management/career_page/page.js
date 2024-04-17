import React from "react";
import MemoriesPhotosTable from "./components/MemoriesPhotosTable";
import MemoriesPhotoForm from "./components/MemoriesPhotoForm";

const CareerDashboard = () => {
  return (
    <section>
      <div>
        <div className="px-6 md:px-8 lg:px-10 py-4 md:py-6 lg:py-8">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 text-gray-500">
            1. Memories Images :
          </h3>
          <div className="w-full grid grid-cols-1 gap-3">
            <div>
              <div className="mb-6 flex justify-end">
                <MemoriesPhotoForm />
              </div>
              <div>
                <MemoriesPhotosTable />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>{/* Modal  */}</div>
    </section>
  );
};

export default CareerDashboard;
