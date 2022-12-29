import React from "react";
import { Link } from "react-router-dom";
import useResize from "../../hooks/useResize";

const LayoutTitle = ({ src, url, onClick, title }) => {
  const [isActiveMenu] = useResize();
  return (
    <>
      <div className="flex justify-end mb-4">
        <div className="flex items-center  justify-center h-10 w-10 rounded-full ">
          <button onClick={onClick} className="hover:scale-105">
            <img
              src={src}
              alt="cerrar"
              className="hover:scale-110 hover:duration-300 duration-150  "
            />
          </button>
        </div>
      </div>
      <h2 className="text-2xl uppercase font-black text-center text-white">
        <Link to={url}>{title}</Link>
      </h2>
    </>
  );
};

export default LayoutTitle;
