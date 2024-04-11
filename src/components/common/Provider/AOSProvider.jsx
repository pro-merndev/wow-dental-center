"use client";

import Aos from "aos";
import { useEffect } from "react";

const AOSProvider = ({ children }) => {
  useEffect(() => {
    Aos.init({
      easing: "ease-in-cubic",
      once: true,
      offset: 0,
    });
  }, []);

  return <>{children}</>;
};

export default AOSProvider;
