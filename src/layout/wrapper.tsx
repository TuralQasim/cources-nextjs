import { animationCreate } from "@/utils/utils";
import React, { useEffect } from "react";
import BackToTop from "../lib/BackToTop";
import Footer from "./footers/footer";
import Header from "./headers/header";

type WrapperProps = {
  children: React.ReactNode;
};
const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <>
      <Header />
      {children}
      <Footer />
      <BackToTop />
    </>
  );
};

export default Wrapper;
