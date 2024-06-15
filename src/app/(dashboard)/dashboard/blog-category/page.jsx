import React from "react";
// import CreateCategoryTable from "../../components/create-category/CategoryTable";
// import CreateCategoryForm from "../../components/create-category/CategoryForm";
// import CategoryModal from "../../components/create-category/CategoryModal";

const page = () => {
  const api = `${process.env.NEXT_PUBLIC_BACKEND_API}/blogs-categories`;
  const modalId = "blog-category-modal";
  return (
    <section>
      <div>
        <div className="px-6 md:px-8 lg:px-10 py-4 md:py-6 lg:py-8">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 text-gray-500">
            1. Create Blog Category:
          </h3>
          <div className="flex flex-col md:flex-row lg:flex-row justify-center items-start">
            {/* Components  */}
            {/* <CreateCategoryTable api={api} modalId={modalId} /> */}
            {/* <CreateCategoryForm api={api} title={"dashboard/blogs"} /> */}
          </div>
        </div>
      </div>

      <div>
        {/* Modal  */}
        {/* <CategoryModal api={api} modalId={modalId} /> */}
      </div>
    </section>
  );
};

export default page;
