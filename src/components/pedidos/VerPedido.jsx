import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../atoms/Header";
import Spiner from "../../atoms/spiner/Spiner";
import WatchContainer from "../../atoms/WatchContainer";
import CustomLogger from "../../helpers/CustomLogger";
import usePedidos from "../../hooks/usePedidos";

import EditarFormularioFinalLocal from "../presupuestos/EditarFormularioFinalLocal";

// Images
import clienteImage from "../../img/newIcons/cliente.png";
import construccionImage from "../../img/newIcons/construccion.png";
import dateImage from "../../img/newIcons/date.png";
import idImage from "../../img/newIcons/documento.png";
import notas from "../../img/newIcons/notas.png";

const customLogger = new CustomLogger();

const VerPedido = () => {
  const { getPedidoByIdFn, pedido, loading } = usePedidos();

  const params = useParams();
  const navigate = useNavigate();

  const {
    id,
    descripcionPedido,
    nombreCliente,
    fecha,
    nombrePedido,
    numeroCotizacion,
    variables,
    cliente,
    empresa,
    productosList,
  } = pedido;

  useEffect(() => {
    getPedidoByIdFn(params.id);
    customLogger.logDebug("params.id:", params.id);
    customLogger.logDebug("[VerPedido.jsx], pedido:", pedido);
  }, []);

  const titleStyles = `font-bold`;
  return (
    <>
      <Header title={"Ver Pedido "} />

      {loading ? (
        <Spiner />
      ) : (
        <>
          <div className="p-5 space-y-5">
            {/* ID */}
            <WatchContainer
              image={idImage}
              alt={"id image"}
              title={"id"}
              paragraph={id}
              titleStyles={titleStyles}
            />
            {/* Nombre Pedido */}
            <WatchContainer
              image={construccionImage}
              alt={"Pedido image"}
              title={"Nombre Pedido"}
              paragraph={nombrePedido}
              titleStyles={titleStyles}
            />
            {/* Descripcion Pedido */}
            <WatchContainer
              image={notas}
              alt={"Pedido image"}
              title={"Descripcion Pedido"}
              paragraph={descripcionPedido}
              titleStyles={titleStyles}
            />
            {/* Cliente */}
            <WatchContainer
              image={clienteImage}
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
              paragraph={fecha ? fecha.split("T")[0] : fecha}
            />

            {/* Numero cotizacion */}
            <WatchContainer
              image={dateImage}
              alt={"cotizacion image"}
              title={"Numero Cotizacion"}
              titleStyles={"Numero Cotizacion"}
              paragraph={numeroCotizacion}
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
            <button
              className="botonSubmit mx-auto"
              onClick={() => navigate(`/formulario/editar/${id}`)}
              value="editar"
            >
              Imprimir PDF
            </button>
          </div>
          <EditarFormularioFinalLocal pedido={pedido} />
        </>
      )}
    </>
  );
};

export default VerPedido;
