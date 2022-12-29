import { useEffect, useState } from "react";

const useResize = () => {
  const [isActiveMenu, setActiveMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(undefined);

  // Close
  const handleClickClose = () => {
    setActiveMenu(!isActiveMenu);
  };

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return [isActiveMenu, setActiveMenu, handleClickClose];
};

export default useResize;
