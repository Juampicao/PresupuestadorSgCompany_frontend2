import { Outlet } from "react-router-dom";
import BotonFlotante from "../atoms/BotonFlotante";
import LayoutCelular from "../atoms/layout/LayoutCelular";
import LayoutComputadora from "../atoms/layout/LayoutComputadora";
import useResize from "../hooks/useResize";

const Layout = () => {
  const [isActiveMenu, handleClickClose] = useResize();

  return (
    <>
      {/* INICIO CELULAR */}
      <nav className=" xs:hidden ">
        <LayoutCelular />
      </nav>
      {/* FIN CELULAR*/}

      {/* Inicio Computadora */}
      <div className="hidden  xs:flex h-screen">
        <div
          className={`${
            isActiveMenu
              ? "w-96 bg-gradient-to-r from-gray-900 to-gray-700  p-5 py-3 duration-300"
              : "w-24 bg-gradient-to-r from-gray-900 to-gray-700 p-5 py-3 duration-300 "
          }`}
        >
          <LayoutComputadora />
        </div>

        {/* <div className="sm:w-3/4 bg-slate-100 p-10 sm:h-screen sm:overflow-y-scroll">
            <Outlet />
          </div> */}
        <div className="w-full origin-left duration-300 bg-slate-100 h-screen p-5  overflow-y-scroll">
          <BotonFlotante />

          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
