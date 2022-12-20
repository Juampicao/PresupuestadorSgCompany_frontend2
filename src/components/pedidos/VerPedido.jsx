import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../atoms/Header";
import WatchContainer from "../../atoms/WatchContainer";
import CustomLogger from "../../helpers/CustomLogger";
import usePedidos from "../../hooks/usePedidos";

// Images
import construccionImage from "../../img/newIcons/construccion.png";
import dateImage from "../../img/newIcons/date.png";
import idImage from "../../img/newIcons/documento.png";

const customLogger = new CustomLogger();

const VerPedido = () => {
  const { getPedidoByIdFn, pedido } = usePedidos();

  const params = useParams();
  const navigate = useNavigate();

  const { id, descripcionPedido, nombreCliente, fecha } = pedido;

  useEffect(() => {
    getPedidoByIdFn(params.id);
    customLogger.logDebug("params.id:", params.id);
  }, []);

  const titleStyles = `font-bold`;
  return (
    <>
      <Header title={"Ver Pedido "} />

      <div className="p-5 space-y-5">
        {/* ID */}
        <WatchContainer
          image={idImage}
          alt={"id image"}
          title={"id"}
          paragraph={id}
          titleStyles={titleStyles}
        />
        {/* Pedido */}
        <WatchContainer
          image={construccionImage}
          alt={"Pedido image"}
          title={"Pedido"}
          paragraph={descripcionPedido}
          titleStyles={titleStyles}
        />
        {/* Cliente */}
        <WatchContainer
          image={idImage}
          alt={"cliente image"}
          title={"cliente"}
          paragraph={nombreCliente}
          titleStyles={titleStyles}
        />

        {/* Fecha */}
        <WatchContainer
          image={dateImage}
          alt={"fecha image"}
          title={"Fecha"}
          titleStyles={titleStyles}
          paragraph={fecha.split("T")[0]}
        />
      </div>

      <div className="flex">
        <button
          className="botonVolver mx-auto "
          onClick={() => navigate("/pedidos/listado")}
          value="volver"
        >
          Volver
        </button>
        <button
          className="botonSubmit mx-auto"
          onClick={() => navigate("/pedidos/listado")}
          value="editar"
        >
          editar
        </button>
      </div>
    </>
  );
};

export default VerPedido;
