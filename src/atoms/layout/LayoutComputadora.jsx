import React from "react";
import { ICONS } from "../../helpers/images";
import useResize from "../../hooks/useResize";
import BotonFlotante from "../BotonFlotante";
import LayoutContainerChildComputadora from "./LayoutContainerChildComputadora";
import LayoutTitle from "./LayoutTitle";
const LayoutComputadora = () => {
  const [isActiveMenu, handleClickClose] = useResize();

  return (
    <>
      <LayoutTitle
        src={ICONS.closeImage}
        onClick={handleClickClose}
        url={""}
        title={"SG Company"}
      />

      <nav className="mt-10 space-y-4 xs:space-y-16">
        <LayoutContainerChildComputadora
          title={"Listado Clientes"}
          url={"/clientes/listado"}
          alt={"Listado Clientes"}
          image={ICONS.clienteImage}
        />
        <LayoutContainerChildComputadora
          title={"Listado Pedidos"}
          url={"/pedidos/listado"}
          alt={"Listado Pedidos"}
          image={ICONS.pedidosImage}
        />
        <LayoutContainerChildComputadora
          title={"Nuevo Cliente"}
          url={"/clientes/nuevo"}
          alt={"Nuevo Cliente"}
          image={ICONS.addImage}
        />
        <LayoutContainerChildComputadora
          title={"Nuevo Pedido"}
          url={"/pedidos/nuevo"}
          alt={"Nuevo Pedido"}
          image={ICONS.addImage}
        />
        <LayoutContainerChildComputadora
          title={"Crear Presupuesto"}
          url={"/"}
          alt={"Crear Presupuesto"}
          image={ICONS.notasImage}
        />

        <BotonFlotante />
      </nav>
    </>
  );
};

export default LayoutComputadora;
