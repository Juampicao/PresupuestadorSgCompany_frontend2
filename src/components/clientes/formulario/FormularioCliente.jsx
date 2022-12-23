import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormContainerChild from "../../../atoms/FormContainerChild";
import CustomLogger from "../../../helpers/CustomLogger";
import useClientes from "../../../hooks/useClientes";
import useGeneral from "../../../hooks/useGeneral";

// IMAGENES
import clienteImage from "../../../img/newIcons/cliente.png";
import pedidoImage from "../../../img/newIcons/construccion.png";
import emailImage from "../../../img/newIcons/email.png";
import homeImage from "../../../img/newIcons/home.png";
import phoneImage from "../../../img/newIcons/phone.png";

let customLogger = new CustomLogger();

const FormularioCliente = ({ cliente }) => {
  const { createNewClientFn, editClientFn } = useClientes();
  const { isCargando } = useGeneral();

  let navigate = useNavigate();

  const [nombreCliente, setNombreCliente] = useState("");
  const [contactoCliente, setContactoCliente] = useState("");
  const [direccionCliente, setDireccionCliente] = useState("");
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [pedidoCliente, setPedidoCliente] = useState("");
  const [fechaUltimaModificacion, setFechaUltimaModificacion] = useState(
    new Date()
  );
  const [id, setId] = useState(null);

  //* Completar los campos de input.
  async function completeFields(cliente) {
    if (cliente) {
      setNombreCliente(cliente.nombreCliente);
      setContactoCliente(cliente.contactoCliente);
      setDireccionCliente(cliente.direccionCliente);
      setCorreoElectronico(cliente.correoElectronico);
      setPedidoCliente(cliente.pedidoCliente);
      setId(cliente.id);
    }
  }

  //* Objeto Nuevo Cliente
  let objetoNuevoCliente = {
    nombreCliente,
    contactoCliente,
    direccionCliente,
    correoElectronico,
    pedidoCliente,
    fechaUltimaModificacion,
    id,
  };

  //* Guardar Cliente
  const handleSubmit = async () => {
    customLogger.logDebug(
      "[FormularioCliente.jsx]=> handleSubmit() =>  ObjetoNuevoCliente:",
      objetoNuevoCliente
    );

    if (cliente?.id) {
      customLogger.logDebug("editando");
      await editClientFn(objetoNuevoCliente);
    } else {
      customLogger.logDebug("creando");
      await createNewClientFn(objetoNuevoCliente);
    }
    await navigate(`/clientes/listado`);
  };

  useEffect(() => {
    // setClienteSeleccionado(cliente);
    completeFields(cliente);
  }, []);

  return (
    <>
      <div className="">
        <div className="form_container ">
          <form action="">
            <h3 className="titulos">
              {cliente?.id ? "Editar Cliente" : "Crear Cliente"}
            </h3>
            <div className="form_container_child">
              <FormContainerChild img={clienteImage} title={"nombre"} />
              <input
                autoComplete="off"
                type="text"
                placeholder="Nombre cliente.."
                name="nombreCliente"
                value={nombreCliente}
                onChange={(e) => setNombreCliente(e.target.value)}
              />
            </div>
            <div className="form_container_child">
              <FormContainerChild img={phoneImage} title={"contacto"} />

              <input
                autoComplete="off"
                type="text"
                placeholder="Contacto cliente.."
                name="contactoCliente"
                value={contactoCliente}
                onChange={(e) => setContactoCliente(e.target.value)}
              />
            </div>
            <div className="form_container_child">
              <FormContainerChild img={homeImage} title={"direccion"} />

              <input
                autoComplete="off"
                type="text"
                placeholder="Direccion cliente.."
                name="direccionCliente"
                value={direccionCliente}
                onChange={(e) => setDireccionCliente(e.target.value)}
              />
            </div>
            <div className="form_container_child">
              <FormContainerChild
                img={emailImage}
                title={"correo electronico"}
              />

              <input
                autoComplete="off"
                type="text"
                placeholder="correo electronico cliente.."
                name="correoElectronico"
                value={correoElectronico}
                onChange={(e) => setCorreoElectronico(e.target.value)}
              />
            </div>
            <div className="form_container_child">
              <FormContainerChild
                img={pedidoImage}
                title={"pedido a cotizar"}
              />
              <textarea
                autoComplete="off"
                type="textarea"
                placeholder="Notas del cliente.."
                className="mt-2 block w-full p-3 bg-gray-50 h-40"
                name="notas"
                value={pedidoCliente}
                onChange={(e) => setPedidoCliente(e.target.value)}
              ></textarea>
            </div>
          </form>
          <button className="botonSubmit mx-auto" onClick={handleSubmit}>
            {cliente?.id ? "Guardar Cliente" : "Crear Cliente"}
            {isCargando ? (
              <span className="pl-3">
                <Spiner />
              </span>
            ) : (
              ""
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default FormularioCliente;
