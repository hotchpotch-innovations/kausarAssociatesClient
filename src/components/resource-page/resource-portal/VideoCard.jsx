import React from 'react';

const VideoCard = ({title}) => {
    return (
<div className="w-11/12 flex flex-col justify-between p-2 mx-auto mb-2 md:mb-0 lg:mb-0">
      <div>
      <iframe className='w-full h-64 md:h-64 lg:h-72' src="https://www.youtube.com/embed/SKsSbOSG3hs?si=8iwmwjRLSeFja50A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

      <div className="mt-2">
        <h3 className="text-lg md:text-xl font-semibold text-justify">
          {title}
        </h3>
      </div>

      <div className="w-full mt-4">
        <button className="px-4 py-1 text-base text-white bg-blue-400 hover:bg-blue-600 duration-500 rounded-md">
          Download
        </button>
      </div>
    </div>
    );
};

export default VideoCard;