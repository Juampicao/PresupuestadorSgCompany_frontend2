import { Outlet, useLocation } from "react-router-dom";
import { ICONS } from "../../helpers/images";
import "./layout.css";
import LayoutContainerChildCelular from "./LayoutContainerChildCelular";

const LayoutCelular = ({ title, url, image }) => {
  const location = useLocation();
  const urlActual = location.pathname;

  // Styles
  const navStyles =
    "absolute inset-x-0 bottom-0 bg-gradient-to-t flex from-gray-700 via-grey-900 to-black  duration-300 rounded-t-2xl  bottom-0 w-full z-50 justify-evenly items-center text-white text-xs";

  return (
    <>
      <div className="w-full origin-left duration-300 bg-slate-100 h-screen  xs:p-5  overflow-y-scroll ">
        <Outlet />
      </div>
      <ul className={navStyles}>
        <LayoutContainerChildCelular
          title={"Clientes"}
          url={"clientes/listado"}
          alt={"listado clientes"}
          image={ICONS.clienteImage}
        />
        <LayoutContainerChildCelular
          title={"Crear"}
          url={"/"}
          alt={"Crear"}
          image={ICONS.addImage}
        />
        <LayoutContainerChildCelular
          title={"Pedidos"}
          url={"/pedidos/listado"}
          alt={"pedido"}
          image={ICONS.notasImage}
        />
      </ul>
    </>
  );
};

export default LayoutCelular;
