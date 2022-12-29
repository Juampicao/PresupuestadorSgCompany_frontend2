import React, { useEffect, useState } from "react";
import FormContainerChild from "../../atoms/FormContainerChild";
import CustomLogger from "../../helpers/CustomLogger";
import useClientes from "../../hooks/useClientes";
import useGeneral from "../../hooks/useGeneral";

// IMAGENES
import { ICONS } from "../../helpers/images";

let customLogger = new CustomLogger();

const ClienteFormulario = ({ objetoCliente = "" }) => {
  const { getAllClientesFn, clientes } = useClientes();

  const { setCliente } = useGeneral(); //Todo hay dos cliente (en dataBase y useGeneral)..
  const [nuevoCliente, setNuevoCliente] = useState({
    nombreCliente: "",
    contactoCliente: "",
    direccionCliente: "",
    nombrePedido: "",
    descripcionPedido: "",
    prueba: "",
  });

  /**
   * Completar los estados locales con un objeto cliente.
   * @param {object} cliente
   */
  async function completeFields(objeto) {
    if (objeto) {
      customLogger.logDebug(
        "[ClienteFormulario.jsx], Editando, objetoCliente:",
        objeto
      );
      setNuevoCliente(objeto);
    } else {
      customLogger.logDebug(
        "[ClienteFormulario.jsx], Creando nuevo objetoCliente, No hay ningun objetoCliente."
      );
    }
  }

  // UseEffect
  useEffect(() => {
    setCliente({
      ...nuevoCliente,
    });
  }, [nuevoCliente]);

  useEffect(() => {
    getAllClientesFn();
    completeFields(objetoCliente);
  }, []);

  //* On select Change
  function handleChangeSelect(e) {
    // Nuevo Cliente
    let obj = JSON.parse(e.target.value);
    setNuevoCliente(obj);
    customLogger.logDebug("[handleChangeSelect], nuevoCliente:", nuevoCliente);
  }

  //* Form input change
  const handleInputChange = (e) => {
    setNuevoCliente({
      ...nuevoCliente,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="form_container">
        <h3 className="titulos">Cliente </h3>

        {/* {nuevoCliente ? JSON.stringify(nuevoCliente) : ""} */}

        {/* Opciones de clientes*/}
        {clientes.length >= 1 ? (
          <div>
            <select
              name=""
              id=""
              className="selectstyles"
              value={nuevoCliente.nombre}
              onChange={(e) => handleChangeSelect(e)}
            >
              <option value="--select--" key="1">
                --select--
              </option>

              {clientes.map((cliente) => (
                <option value={JSON.stringify(cliente)} key={cliente.id}>
                  {cliente.nombreCliente}
                </option>
              ))}
            </select>
          </div>
        ) : (
          ""
        )}

        <div className="form_container_child">
          <FormContainerChild img={ICONS.clienteImage} title={"Nombre"} />
          <input
            autoComplete="off"
            type="text"
            placeholder="Nombre cliente.."
            name="nombreCliente"
            value={nuevoCliente.nombreCliente}
            onChange={handleInputChange}
          />
        </div>
        <div className="form_container_child">
          <FormContainerChild img={ICONS.phoneImage} title={"Contacto"} />
          <input
            autoComplete="off"
            type="text"
            placeholder="Contacto cliente.."
            name="contactoCliente"
            value={nuevoCliente.contactoCliente}
            onChange={handleInputChange}
          />
        </div>
        <div className="form_container_child">
          <FormContainerChild img={ICONS.homeImage} title={"Direccion"} />
          <input
            autoComplete="off"
            type="text"
            placeholder="Direccion cliente.."
            name="direccionCliente"
            value={nuevoCliente.direccionCliente}
            onChange={handleInputChange}
          />
        </div>
        <div className="form_container_child">
          <FormContainerChild
            img={ICONS.pedidosImage}
            title={"Nombre Pedido"}
          />
          <input
            autoComplete="off"
            type="text"
            placeholder="Nombre del pedido.."
            name="nombrePedido"
            value={nuevoCliente.nombrePedido}
            onChange={handleInputChange}
          />
        </div>
        <div className="form_container_child">
          <FormContainerChild
            img={ICONS.notasImage}
            title={"Descripcion del pedido"}
          />

          <input
            autoComplete="off"
            type="textarea"
            className="mt-2 w-full p-3 bg-gray-50 py-10 mx-auto text-start "
            // placeholder="Descripcion del pedido.."
            name="descripcionPedido"
            value={nuevoCliente.descripcionPedido}
            onChange={handleInputChange}
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
