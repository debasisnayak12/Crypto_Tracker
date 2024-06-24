import React, { useState, useEffect } from "react";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import "./styles.css";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  return (
    <div
      className="back-to-top"
      id="myBtn"
      onClick={topFunction}
      style={{ display: isVisible ? "flex" : "none" }}
    >
      <ArrowUpwardRoundedIcon style={{ color: "var(--blue)" }} />
    </div>
  );
};

export default BackToTop;
