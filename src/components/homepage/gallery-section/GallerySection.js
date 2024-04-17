import Image from "next/image";
import React from "react";
import sectionImage from "./gallery.jpg";

const GallerySection = () => {
  return (
    <section>
      <div>
        <Image src={sectionImage} alt="" className="w-full" width={1600} height={1200}></Image>
      </div>
    </section>
  );
};

export default GallerySection;
