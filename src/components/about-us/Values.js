import React from "react";
import Value from "./Value";
import { coreValues } from "./core-values-data/coreValuesFakeData";

const Values = () => {
    
  return (
    <section>
      <div className="content-container p-2 md:p-4 lg:p-4">
       
        <div>
            <div className="px-8 md:px-10 lg:px-12 py-2">
                <h3 className="text-xl md:text-2xl lg:text-3xl">Core Values</h3>
            </div>
            <div className="content-container">
                <div className="text-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 pb-2 md:pb-4 lg:pb-6 pt-2 md:pt-10 lg:pt-12">
                    {
                        coreValues?.map(value => {
                            return <Value 
                            key={value._id}
                            data={value}></Value>
                        })
                    }
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
