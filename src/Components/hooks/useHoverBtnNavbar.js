import { useState } from "react";

const useHoverBtnNavbar = () => {
  const [isHover, setIsHover] = useState(false);

  const btnNavbar = {
    color: isHover ? "black" : "$colorTerciario",
    margin: "0.5rem",
    display: "flex",
    alignItems: "center",
    maxWidth: "100%",
    whiteSpace: "nowrap",
    fontFamily: "Montserrat",
    fontSize: "25px",
  };
  const handleMouseEnterBtnNavbar = () => {
    setIsHover(true);
  };
  const handleMouseLeaveBtnNavbar = () => {
    setIsHover(false);
  };

  return {
    isHover,
    setIsHover,
    handleMouseEnterBtnNavbar,
    handleMouseLeaveBtnNavbar,
    btnNavbar,
  };
};

export default useHoverBtnNavbar;
