import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../atoms/Header";

import Spiner from "../../atoms/spiner/Spiner";
import WatchContainer from "../../atoms/WatchContainer";
import CustomLogger from "../../helpers/CustomLogger.js";
import useDataBase from "../../hooks/useDataBase";

// IMAGENES
import clienteImage from "../../img/newIcons/cliente.png";
import construccionImage from "../../img/newIcons/construccion.png";
import dateImage from "../../img/newIcons/date.png";
import idImage from "../../img/newIcons/documento.png";
import emailImage from "../../img/newIcons/email.png";
import homeImage from "../../img/newIcons/home.png";
import phoneImage from "../../img/newIcons/phone.png";

let customLogger = new CustomLogger();

const VerCliente = () => {
  const { getClientByIdFn, cliente } = useDataBase();

  const params = useParams();
  const navigate = useNavigate();

  const {
    id,
    nombreCliente,
    contactoCliente,
    direccionCliente,
    pedidoCliente,
    correoElectronico,
    fechaUltimaModificacion,
  } = cliente;

  useEffect(() => {
    getClientByIdFn(params.id);
    customLogger.logDebug("params.id:" + params.id);
  }, []);

  const titleStyles = `font-bold`;
  return (
    <>
      {cliente ? (
        <>
          <Header title={"Ver Cliente "} />

          <div className="p-5 space-y-5">
            {/* ID */}
            <WatchContainer
              image={idImage}
              alt={"id image"}
              title={"id"}
              paragraph={id}
              titleStyles={titleStyles}
            />

            {/* Contacto */}
            <WatchContainer
              image={phoneImage}
              alt={"Nombre cliente"}
              title={"Contacto"}
              paragraph={contactoCliente}
              titleStyles={titleStyles}
            />

            {/* Nombre */}
            <WatchContainer
              image={clienteImage}
              alt={"nombre image"}
              title={"Nombre"}
              titleStyles={titleStyles}
              paragraph={nombreCliente}
            />

            {/* Correo */}
            <WatchContainer
              image={emailImage}
              alt={"email image"}
              title={"Correo Electronico"}
              titleStyles={titleStyles}
              paragraph={correoElectronico}
            />

            {/* Pedido */}
            <WatchContainer
              image={construccionImage}
              alt={"pedido image"}
              title={"Pedidos"}
              titleStyles={titleStyles}
              paragraph={pedidoCliente ? pedidoCliente : "no hay pedidos"}
            />

            {/* Fecha */}
            <WatchContainer
              image={dateImage}
              alt={"fecha image"}
              title={"Fecha"}
              titleStyles={titleStyles}
              paragraph={fechaUltimaModificacion.split("T")[0]}
            />

            {/* Direccion */}
            <WatchContainer
              image={homeImage}
              alt={"home image"}
              title={"Direccion"}
              titleStyles={titleStyles}
              paragraph={direccionCliente}
            />
          </div>

          <div className="flex">
            <button
              className="botonVolver mx-auto "
              onClick={() => navigate("/clientes/listado")}
              value="volver"
            >
              Volver
            </button>
            <button
              className="botonSubmit mx-auto"
              onClick={() => navigate("/clientes/listado")}
              value="editar"
            >
              editar
            </button>
          </div>
          {/* <div className="py-5 flex justify-center space-x-3"></div> */}
        </>
      ) : (
        <Spiner />
      )}
    </>
  );
};

export default VerCliente;
