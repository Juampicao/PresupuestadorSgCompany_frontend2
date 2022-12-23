import React, { useEffect, useState } from "react";
import CustomLogger from "../../helpers/CustomLogger";
import { numeroCotizacionPersonalizado } from "../../helpers/numeroCotizacionPersonalizado";
import { tiposDescuentos } from "../../helpers/variables";
import useGeneral from "../../hooks/useGeneral";

const customLogger = new CustomLogger();

const VariablesFormulario = ({ objetoVariables }) => {
  const { setVariables } = useGeneral("");

  const [validezPresupuesto, setValidezPresupuesto] = useState(7);
  const [numeroPresupuesto, setNumeroPresupuesto] = useState("");
  const [fechaPresupuesto, setFechaPresupuesto] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [descuentoTotal, setDescuentoTotal] = useState("");
  const [tipoDescuento, setTipoDescuento] = useState("");

  const [nuevaValidezPresupuesto, setNuevaValidezPresupuesto] = useState("");

  let ObjetoVariables = {
    validezPresupuesto,
    numeroPresupuesto,
    fechaPresupuesto,
    descuentoTotal,
    tipoDescuento,
  };

  /**
   * Completar los estados locales con un objeto cliente.
   * @param {object} cliente
   */
  function completeFields(variables) {
    if (variables) {
      setValidezPresupuesto(variables.validezPresupuesto);
      setNumeroPresupuesto(variables.numeroCotizacion);
      setFechaPresupuesto(variables.fechaPresupuesto);
      setDescuentoTotal(variables.descuentoTotal);
      setTipoDescuento(variables.tipoDescuento);
    }
  }

  useEffect(() => {
    setVariables({
      ...ObjetoVariables,
    });
  }, [
    numeroPresupuesto,
    fechaPresupuesto,
    validezPresupuesto,
    descuentoTotal,
    tipoDescuento,
  ]);

  useEffect(() => {
    completeFields(objetoVariables);
    customLogger.logDebug(
      "[VariablesFormulario], objetoVariables",
      objetoVariables
    );
  }, []);

  const opcionesNumeros = [
    { numero: 7, value: 7 },
    { numero: 15, value: 15 },
    { numero: 21, value: 21 },
    { numero: 30, value: 30 },
    { numero: "otro", value: "otro" },
  ];
  return (
    <>
      <div className="flex items-center flex-wrap sm:justify-evenly gap-y-3 mt-5">
        {validezPresupuesto !== "otro" ? (
          <div className="">
            <label>Validez del Presupuesto</label>
            <select
              name="validezPrespuesto"
              className="inputSelect"
              value={validezPresupuesto}
              onChange={(e) => {
                setValidezPresupuesto(e.target.value);
              }}
            >
              {opcionesNumeros.map((option) => (
                <option value={option.value}>{option.numero}</option>
              ))}
            </select>
            <label htmlFor="">Dias</label>
          </div>
        ) : (
          <div className="form_container_child">
            <label htmlFor=""> Dias Validez Presupuesto </label>
            <input
              type="number"
              className="inputSelect"
              name="nuevaValidezPresupuesto"
              value={nuevaValidezPresupuesto}
              onChange={(e) => {
                setNuevaValidezPresupuesto(e.target.value),
                  setValidezPresupuesto("otro");
              }}
            />
          </div>
        )}
      </div>

      <div className="form_container">
        <h3 className="titulos">Datos Cotizacion </h3>

        {/* Quien esta cotizando? */}
        <div>
          <label htmlFor=""> ¿Quien esta cotizando?</label>
          <select
            name=""
            id=""
            onChange={(e) => setNumeroPresupuesto(e.target.value)}
          >
            <option value="">--Select--</option>

            {numeroCotizacionPersonalizado.map((e) => (
              <option value={e.abreviatura + "-" + e.ultimoNumeroCotizacion}>
                {e.nombre}
              </option>
            ))}
          </select>
        </div>

        {/* Fecha */}
        <div className="form_container_child">
          <label htmlFor=""> Fecha</label>
          <input
            type="date"
            name="fechaPresupuesto"
            value={fechaPresupuesto}
            onChange={(e) => setFechaPresupuesto(e.target.value)}
          />
        </div>

        {/* Numero Cotizacion */}
        <div className="form_container_child">
          <label htmlFor=""> Numero de Cotizacion</label>
          <input
            type="text"
            placeholder="numero de la cotizacion.."
            name="numeroPresupuesto"
            value={numeroPresupuesto}
            onChange={(e) => setNumeroPresupuesto(e.target.value)}
          />
        </div>
        {/* Tipo descuento */}
        <div>
          <label htmlFor=""> Tipo de descuento</label>
          <select
            type="text"
            placeholder="tipo de descuento.."
            name="tipoDescuento"
            className="selectstyles"
            value={tipoDescuento}
            onChange={(e) => setTipoDescuento(e.target.value)}
          >
            <option value="">--select--</option>
            {tiposDescuentos.map((descuento) => (
              <option value={descuento.nombre}> {descuento.nombre}</option>
            ))}
          </select>
        </div>

        {/* Descuento Total */}
        <div className="form_container_child flex">
          <div>
            <label htmlFor=""> % Descuento Total</label>
            <input
              type="number"
              placeholder="descuento sobre el total.."
              name="descuentoTotal"
              value={descuentoTotal}
              onChange={(e) => setDescuentoTotal(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default VariablesFormulario;
