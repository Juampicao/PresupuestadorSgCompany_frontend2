import { Link, Outlet, useLocation } from "react-router-dom";
import BotonFlotante from "../atoms/BotonFlotante";

const Layout = () => {
  const location = useLocation();
  const urlActual = location.pathname;

  return (
    <div className="sm:flex  ">
      <div className="sm:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="text-2xl uppercase font-black text-center text-white">
          {" "}
          <Link to="/">SG Company</Link>
        </h2>

        <nav className="mt-10 space-y-4 md:space-y-16">
          <Link
            className={`${
              urlActual === "/clientes/listado" ? "text-blue-300" : "text-white"
            } text-2xl block mt-2 hover:text-blue-300`}
            to="/clientes/listado"
          >
            Listado Clientes
          </Link>
          <Link
            className={`${
              urlActual === "/pedidos/listado" ? "text-blue-300" : "text-white"
            } text-2xl block mt-2 hover:text-blue-300`}
            to="/pedidos/listado"
          >
            Listado Pedidos
          </Link>
          <Link
            className={`${
              urlActual === "/clientes/nuevo" ? "text-blue-300" : "text-white"
            } text-2xl block mt-2 hover:text-blue-300`}
            to="/clientes/nuevo"
          >
            Nuevo Cliente
          </Link>
          <Link
            className={`${
              urlActual === "/pedidos/nuevo" ? "text-blue-300" : "text-white"
            } text-2xl block mt-2 hover:text-blue-300`}
            to="/pedidos/nuevo"
          >
            Nuevo Pedido
          </Link>
          <BotonFlotante />
          <Link
            className={`${
              urlActual === "" ? "text-blue-300" : "text-white"
            } text-2xl block mt-2 hover:text-blue-300`}
            to=""
          >
            {" "}
            Crear Presupuesto{" "}
          </Link>
        </nav>
      </div>

      <div className="sm:w-3/4 bg-slate-100 p-10 sm:h-screen sm:overflow-y-scroll">
        <Outlet />
      </div>
      {/* <div className="w-full origin-left duration-300 bg-slate-100 h-screen p-5  overflow-y-scroll">
        <BotonFlotante />

        <Outlet />
      </div> */}
    </div>
  );
};

export default Layout;
