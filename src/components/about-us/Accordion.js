import React from 'react';

const Accordion = ({title, content}) => {
    return (
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 mb-2"
      >
        <div className="collapse-title text-xl font-medium">
          {title}
        </div>
        <div className="collapse-content">
          <p>{content}</p>
        </div>
      </div>
    );
};

export default Accordion;