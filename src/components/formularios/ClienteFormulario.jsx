import React, { useEffect, useState } from "react";
import CustomLogger from "../../helpers/CustomLogger";
import useClientes from "../../hooks/useClientes";
import useGeneral from "../../hooks/useGeneral";

let customLogger = new CustomLogger();

const ClienteFormulario = ({ objetoCliente = "" }) => {
  const { getClientByIdFn, getAllClientesFn, cliente, clientes } =
    useClientes();

  const { setCliente } = useGeneral(); //Todo hay dos cliente (en dataBase y useGeneral)..

  const [nombreCliente, setNombreCliente] = useState("");
  const [contactoCliente, setContactoCliente] = useState("");
  const [direccionCliente, setDireccionCliente] = useState("");
  const [nombrePedido, setNombrePedido] = useState("");
  const [descripcionPedido, setDescripcionPedido] = useState("");

  let ObjetoCliente = {
    nombreCliente,
    contactoCliente,
    direccionCliente,
    nombrePedido,
    descripcionPedido,
  };

  /**
   * Completar los estados locales con un objeto cliente.
   * @param {object} cliente
   */
  function completeFields(cliente) {
    if (cliente) {
      setNombreCliente(cliente.nombreCliente);
      setContactoCliente(cliente.contactoCliente);
      setDireccionCliente(cliente.direccionCliente);
      setNombrePedido(cliente.nombrePedido);
      setDescripcionPedido(cliente.descripcionPedido);
    }
  }

  function onSelectChange(id) {
    getClientByIdFn(id);
    completeFields(cliente);
  }

  useEffect(() => {
    setCliente({
      ...ObjetoCliente,
    });
  }, [
    nombreCliente,
    contactoCliente,
    direccionCliente,
    nombrePedido,
    descripcionPedido,
  ]);

  useEffect(() => {
    getAllClientesFn();
  }, []);

  useEffect(() => {
    completeFields(objetoCliente);
    customLogger.logDebug("[ClienteFormulario], objetoCliente:", objetoCliente);
  }, []);

  return (
    <>
      <div className="form_container">
        <h3 className="titulos">Cliente </h3>
        <p className="font-black">
          Seleccionar 2 veces seguidas ver el autocompletado
        </p>
        {/* Opciones de clientes pre-cargados */}
        {clientes.length >= 1 ? (
          <div>
            <select
              name=""
              id=""
              className="selectstyles"
              value={(e) => e.target.value}
              onChange={(e) => onSelectChange(e.target.value)}
            >
              {clientes.map((cliente) => (
                <option value={cliente.id} key={cliente.id}>
                  {cliente.nombreCliente}
                </option>
              ))}
            </select>
          </div>
        ) : (
          ""
        )}
        {/* Opciones de clientes pre-cargados */}

        <div className="form_container_child">
          <label htmlFor=""> Nombre</label>
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
          <label> Contacto</label>
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
          <label> Direccion</label>
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
          <label> Nombre Pedido</label>
          <input
            autoComplete="off"
            type="text"
            placeholder="Nombre del pedido.."
            name="nombrePedido"
            value={nombrePedido}
            onChange={(e) => setNombrePedido(e.target.value)}
          />
        </div>
        <div className="form_container_child">
          <label> Descripcion del Pedido</label>
          <input
            autoComplete="off"
            type="textarea"
            className="mt-2 w-full p-3 bg-gray-50 py-10 mx-auto text-start "
            // placeholder="Descripcion del pedido.."
            name="descripcionPedido"
            value={descripcionPedido}
            onChange={(e) => setDescripcionPedido(e.target.value)}
          />
        </div>
        {/* <button onClick={handleSubmit}> Enviar</button> */}
      </div>
    </>
  );
};

export default ClienteFormulario;

//? Comporbar si cliente esta vacio..
// useEffect(() => {
//   // if (Object.keys(cliente).length > 0) {
//   //   setNombreCliente(cliente.nombreCliente);
//   //   setContactoCliente(cliente.contactoCliente);
//   //   setDireccionCliente(cliente.direccionCliente);
//   // }
//   // console.log(cliente);
//   // console.log(clienteSeleccionado);
//   // Todo probar...
// }, [cliente]);
