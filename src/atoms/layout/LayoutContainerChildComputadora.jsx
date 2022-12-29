import React from "react";
import { Link, useLocation } from "react-router-dom";
import useResize from "../../hooks/useResize";

const LayoutContainerChildComputadora = ({ image, alt, title, url }) => {
  const [isActiveMenu] = useResize();

  const location = useLocation();
  const urlActual = location.pathname;

  // Computer Styles
  const activeStyles = `text-white  duration-200 border-l-4  hover:border-r-lime-50 p-1   ${
    isActiveMenu ? "pl-5" : "pl-3"
  }`;

  const notActiveStyles = "text-2xl block mt-10 sm:mt-10 text-slate-300";
  const hover =
    "text-white duration-200 hover:pl-2 hover:border-l-2  hover:border-r-lime-50 ";

  const hiddenTitles = `${
    isActiveMenu ? "" : "hidden"
  } origin-left duration-300 `;

  // Styles
  const navStyles =
    "absolute inset-x-0 bottom-0 bg-gradient-to-t flex from-gray-700 via-grey-900 to-black  duration-300 rounded-t-2xl  bottom-0 w-full z-50 justify-evenly items-center text-white text-xs";
  const liStyles =
    "block items-center pt-2 hover:cursor-pointer transition duration-200 ease-in-out hover:duration-200  cursor-pointer hover:scale-105 active:scale-105";
  const imgStyles = "h-8 mx-auto  ";

  // Menu Styles
  const activeMenuStyles = "w-72 fixed sidebar ";
  const notActiveMenuStyles = "0";

  return (
    <Link
      className={`${
        urlActual === `${url}` ? `${activeStyles}` : `${hover}`
      } ${notActiveStyles} `}
      to={url}
    >
      <div className="flex items-center space-x-4 text-base xs:text-lg">
        <img src={image} className="h-6 sm:h-8 imageStyle" alt={alt} />
        <p className={hiddenTitles}>{title}</p>
      </div>
    </Link>
  );
};

export default LayoutContainerChildComputadora;
