import React, { useEffect, useState } from "react";
import Checkbox from "../../atoms/checkbox/Checkbox";
import CustomLogger from "../../helpers/CustomLogger";
import { numeroCotizacionPersonalizado } from "../../helpers/numeroCotizacionPersonalizado";
import { tiposDescuentos } from "../../helpers/variables";
import useCheck from "../../hooks/useCheck.js";
import useGeneral from "../../hooks/useGeneral";

const customLogger = new CustomLogger();

const VariablesFormulario = ({ objetoVariables }) => {
  const { setVariables } = useGeneral("");

  const { isChecked: isValidezManual, changeChecked: changeValidezManual } =
    useCheck();
  const { isChecked: isDescuentoCheck, changeChecked: changeDescuentoCheck } =
    useCheck();

  // LocalStates
  const [validezPresupuesto, setValidezPresupuesto] = useState(15);
  const [numeroPresupuesto, setNumeroPresupuesto] = useState("");
  const [fechaPresupuesto, setFechaPresupuesto] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [descuentoTotal, setDescuentoTotal] = useState("");
  const [tipoDescuento, setTipoDescuento] = useState("");

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
      handleIsValidezManual();
      handleIsDescuento();
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
  ];

  /**
   * Habilita un input para completar el numero de validezPresupuesto Manual.
   */
  const handleIsValidezManual = () => {
    changeValidezManual();
    setValidezPresupuesto(null);
  };

  /**
   * Agregar campos para agregar un descuento
   */
  const handleIsDescuento = () => {
    changeDescuentoCheck();

    setDescuentoTotal("");
    setTipoDescuento("");
  };
  return (
    <>
      {/* Logica Validez Presupuesto */}
      <div className="flex items-center flex-wrap sm:justify-evenly gap-y-3 mt-5">
        <div className="">
          <label>Validez del Presupuesto</label>
          {isValidezManual ? (
            <div className="flex items-center">
              <input
                type="number"
                value={validezPresupuesto}
                className="w-16 mr-4"
                placeholder="Escribi la validez.."
                onChange={(e) => setValidezPresupuesto(e.target.value)}
              />
              <label htmlFor="">Dias</label>
            </div>
          ) : (
            <>
              <select
                name="validezPrespuesto"
                className="inputSelect"
                value={validezPresupuesto}
                type="number"
                onChange={(e) => {
                  setValidezPresupuesto(e.target.value);
                }}
              >
                {opcionesNumeros.map((option) => (
                  <option value={option.value}>{option.numero}</option>
                ))}
              </select>
              <label htmlFor="">Dias</label>
            </>
          )}
        </div>
        <div className="flex items-center ">
          <Checkbox
            value1=""
            value2="Otro Valor"
            onChange={handleIsValidezManual}
            defaultChecked={objetoVariables?.validezPresupuesto ? true : false}
          />
        </div>
      </div>
      {/* Fin Logica Validez Presupuesto */}

      <div className="form_container">
        <h3 className="titulos">Datos Cotizacion </h3>

        {/* Quien esta cotizando? */}
        <div>
          <label htmlFor=""> ¿Quien esta cotizando?</label>
          <select
            name=""
            id=""
            className="inputSelect"
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

        <div className="form_container_child">
          <Checkbox
            value2="Agregar descuento"
            value1=""
            onChange={handleIsDescuento}
            defaultChecked={objetoVariables?.descuentoTotal ? true : false}
          />
        </div>

        {/* Tipo descuento */}
        {isDescuentoCheck ? (
          <>
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
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default VariablesFormulario;
