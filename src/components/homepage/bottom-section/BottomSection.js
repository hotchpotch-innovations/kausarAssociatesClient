import Image from "next/image";
import React from "react";
import ContactForm from "./ContactForm";

const BottomSection = () => {
  const backgroundAttachment = {
    backgroundImage:
      'url("https://www.lawclerk.legal/wp-content/uploads/2023/03/Business-and-Corporate-lawyers.jpg")',
    backgroundRepeat: "no-repeat",
    overflow: "auto",
    backgroundAttachment: "fixed",
  };
  return (
    <section>
      <div style={backgroundAttachment} className=" bg-cover">
        <div className="min-h-screen bg-gradient-to-l  from-black/60 via-black/70 to-black/60 flex justify-center items-center">
          
           <ContactForm/>
          
        </div>
      </div>
    </section>
    // 'https://www.lawclerk.legal/wp-content/uploads/2023/03/Business-and-Corporate-lawyers.jpg'
  );
};

export default BottomSection;
