import React, { useEffect, useState } from "react";
import useGeneral from "../../hooks/useGeneral";

const VariablesFormulario = () => {
  const { setVariables } = useGeneral("");

  const [validezPresupuesto, setValidezPresupuesto] = useState(7);
  const [numeroPresupuesto, setNumeroPresupuesto] = useState("");
  const [fechaPresupuesto, setFechaPresupuesto] = useState(
    new Date().toISOString().split("T")[0]
  );

  let ObjetoVariables = {
    numeroPresupuesto,
    fechaPresupuesto,
    validezPresupuesto,
  };

  useEffect(() => {
    setVariables({
      ...ObjetoVariables,
    });
  }, [numeroPresupuesto, fechaPresupuesto, validezPresupuesto]);

  /**
   * Completa el numero de la cotizacion segun quien la este realizando. (santi o el jefe).
   * @param {*} creadorCotizacion
   */
  function numeroPresupuestoPersonalizado(creadorCotizacion) {
    console.log("Desde numeroCotizacionPersonalizadoo", creadorCotizacion);

    if (creadorCotizacion === "santiago") {
      setNumeroPresupuesto("100-5070B-SAN");
    } else if (creadorCotizacion === "karina") {
      setNumeroPresupuesto("200-20K0B-KAR");
    } else if (creadorCotizacion === "tomas") {
      setNumeroPresupuesto("300-39IOD-TOM");
    }
  }

  return (
    <>
      <div className="flex items-center flex-wrap sm:justify-evenly gap-y-3 mt-5">
        <div className="">
          <label>Validez del Presupuesto</label>

          <select
            name="validezPrespuesto"
            className="inputSelect"
            value={validezPresupuesto}
            onChange={(e) => setValidezPresupuesto(e.target.value)}
          >
            <option value="5"> 5 </option>
            <option value="7" defaultValue>
              7
            </option>
            <option value="10">10</option>
            <option value="15"> 15 </option>
            <option value="30"> 30 </option>
          </select>
          <label htmlFor="">Dias</label>
        </div>
      </div>
      <div className="form_container">
        <h3 className="titulos">Datos Cotizacion </h3>

        {/* Quien esta cotizando? */}
        <div>
          <label htmlFor=""> ¿Quien esta cotizando?</label>
          <select
            name=""
            id=""
            onChange={(e) => numeroPresupuestoPersonalizado(e.target.value)}
          >
            <option value="">--Select--</option>
            <option value="santiago">Santago</option>
            <option value="karina">Karina</option>
            <option value="tomas">Tomas</option>
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
      </div>
    </>
  );
};

export default VariablesFormulario;
