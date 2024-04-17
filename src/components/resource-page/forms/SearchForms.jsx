import React from "react";

const SearchForms = () => {
  return (
    <div className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 lg:gap-6">
        {/* Search by keyword  */}
        <div className="">
          <div className="mb-2">
            <label
              htmlFor=""
              className="text-base lg:text-lg font-medium"
            >
              Search by Keyword:
            </label>
          </div>
          <div>
            <input
              type="text"
              className="w-full border py-1 text-gray-600 rounded-md px-4"
              placeholder="Enter keyword"
            />
          </div>
        </div>
        {/* Search by Issuing Authority  */}
        <div className="">
          <div className="mb-2">
            <label
              htmlFor=""
              className="text-base lg:text-lg font-medium"
            >
              Search by Issuing Authority:
            </label>
          </div>
          <div>
            <select id="author" name="author" className="w-full border py-1 text-gray-600 rounded-md px-4">
              <option value="">Select one</option>
              <option value="NBR">NBR</option>
              <option value="RJSE">RJSE</option>
            </select>
          </div>
        </div>
        {/* Search by Category  */}
        <div className="">
          <div className="mb-2">
            <label
              htmlFor=""
              className="text-base lg:text-lg font-medium"
            >
              Search by Category:
            </label>
          </div>
          <div>
            <select id="category" name="category" className="w-full border py-1 text-gray-600 rounded-md px-4">
              <option value="">Select one</option>
              <option value="TAX Forms">TAX Forms</option>
              <option value="VAT Forms">VAT Forms</option>
              <option value="RJSE Forms">RJSE Forms</option>
              <option value="NBR Forms">NBR Forms</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForms;
