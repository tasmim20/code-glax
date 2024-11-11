import React from "react";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";

const CommonLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className=" pt-20  bg-[#151826]">{children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
