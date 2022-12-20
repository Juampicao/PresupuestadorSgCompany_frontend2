import React, { useEffect, useState } from "react";
import CustomLogger from "../../helpers/CustomLogger";
import useDataBase from "../../hooks/useDataBase";
import useGeneral from "../../hooks/useGeneral";
let customLogger = new CustomLogger();

const ClienteFormulario = () => {
  const { getClientByIdFn, getAllClientesFn, cliente, clientes } =
    useDataBase();

  const { setCliente } = useGeneral(); //Todo hay dos cliente (en dataBase y useGeneral)..

  const [nombreCliente, setNombreCliente] = useState("");
  const [contactoCliente, setContactoCliente] = useState("");
  const [direccionCliente, setDireccionCliente] = useState("");
  const [clienteLocal, setClienteLocal] = useState({});

  let ObjetoCliente = {
    nombreCliente,
    contactoCliente,
    direccionCliente,
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
  }, [nombreCliente, contactoCliente, direccionCliente]);

  useEffect(() => {
    completeFields(clienteLocal);
  }, [clienteLocal]);

  useEffect(() => {
    getAllClientesFn();
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
