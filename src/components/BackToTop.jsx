import React from "react";
import { BiArrowToTop } from "react-icons/bi";

const BackToTop = () => {
  const backToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <button className="back__to__top" onClick={backToTop}>
      <BiArrowToTop />
    </button>
  );
};

export default BackToTop;
