import { animationCreate } from "@/utils/utils";
import React, { useEffect } from "react";
import BackToTop from "../lib/BackToTop";
import FooterThree from "./footers/footer-3";
import HeaderTwo from "./headers/header-2";

type WrapperFourProps = {
  children: React.ReactNode;
};
const WrapperFour: React.FC<WrapperFourProps> = ({ children }) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <>
      <HeaderTwo />
      {children}
      <FooterThree />
      <BackToTop />
    </>
  );
};

export default WrapperFour;
