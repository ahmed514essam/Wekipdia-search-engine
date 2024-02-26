import React, { useEffect, useState } from "react";
import style from "./Scroll.module.css";
export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight / 2;
      setIsVisible(isBottom);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 1,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button className={style.atom} onClick={scrollToTop}>
          <img src="/download-removebg-preview (1).png" />
        </button>
      )}
    </div>
  );
}

