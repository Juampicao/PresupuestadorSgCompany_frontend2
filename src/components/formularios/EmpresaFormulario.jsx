import axios from "axios";
import React, { useEffect, useState } from "react";
import Spiner from "../../atoms/spiner/Spiner";
import CustomLogger from "../../helpers/CustomLogger";
import useGeneral from "../../hooks/useGeneral";

const customLogger = new CustomLogger();

const EmpresaFormulario = ({ objetoEmpresa = "" }) => {
  const { empresa, setEmpresa, isCargando } = useGeneral();

  const [loading, setLoading] = useState(false);
  const [empresas, setEmpresas] = useState([]);
  const [nuevaEmpresa, setNuevaEmpresa] = useState({
    nombreEmpresa: "",
    direccionEmpresa: "",
    contactoEmpresa: "",
    observacionesParticulares: "",
    aclaracionesGenerales: "",
  });

  //* Show every companies.
  function getAllCompanies() {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_DATABASE_URL}/empresas`)
      .then((res) => {
        console.log("getAllCompanies:", res.data);
        setEmpresas(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  function completeFields(objeto) {
    if (objeto) {
      customLogger.logDebug(
        "[EmpresaFormulario.jsx], Editando, objetoEmpresa:",
        objeto
      );
      setNuevaEmpresa(objeto);
    } else {
      customLogger.logDebug(
        "[EmpresaFormulario.jsx], Creando nuevo objetoEmpresa, No hay ningun objetoEmpresa."
      );
    }
  }

  //* On select Change
  function handleChangeSelect(e) {
    let obj = JSON.parse(e.target.value);
    setNuevaEmpresa(obj);
    customLogger.logDebug("[handleChangeSelect], empresa:", nuevaEmpresa);
  }

  //* Form input change
  const handleInputChange = (e) => {
    setNuevaEmpresa({
      ...nuevaEmpresa,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setEmpresa({
      ...nuevaEmpresa,
    });
  }, [nuevaEmpresa]);

  useEffect(() => {
    getAllCompanies();
    completeFields(objetoEmpresa);
    customLogger.logDebug("[EmpresaFormulario], objetoEmpresa:", objetoEmpresa);
    customLogger.logDebug(
      "[EmpresaFormulario], Las empresas cargadas son:",
      empresas
    );
  }, []);

  return (
    <>
      {loading ? (
        <Spiner />
      ) : (
        <div className="form_container">
          <h3 className="titulos">Empresa Vendedora</h3>
          {/* {JSON.stringify(nuevaEmpresa, null, 2)} */}

          {empresas.length >= 1 ? (
            <select
              className="selectstyles"
              name=""
              id=""
              value={nuevaEmpresa.nombreEmpresa}
              onChange={(e) => handleChangeSelect(e)}
            >
              <option value="--select--" key="1">
                --select--
              </option>

              {empresas.map((empresa) => (
                <option value={JSON.stringify(empresa)} key={empresa.id}>
                  {empresa.nombreEmpresa}
                </option>
              ))}
            </select>
          ) : (
            ""
          )}
          <div className="form_container_child">
            <label> Nombre </label>

            <input
              type="text"
              placeholder="Agrega el nombre de la empresa vendedora"
              name="nombreEmpresa"
              value={nuevaEmpresa.nombreEmpresa}
              onChange={handleInputChange}
            />
          </div>
          <div className="form_container_child">
            <label> Direccion </label>
            <input
              type="text"
              placeholder="Agrega la direccion de la empresa vendedora"
              name="direccionEmpresa"
              value={nuevaEmpresa.direccionEmpresa}
              onChange={handleInputChange}
            />
          </div>
          <div className="form_container_child">
            <label> Contacto</label>
            <input
              type="text"
              placeholder="Agrega el contacto de la empresa vendedora"
              name="contactoEmpresa"
              value={nuevaEmpresa.contactoEmpresa}
              onChange={handleInputChange}
            />
          </div>
          <div className="form_container_child">
            <label> Observaciones Particulares</label>
            <input
              type="text"
              placeholder="Agrega una observacion particular"
              name="observacionesParticulares"
              value={nuevaEmpresa.observacionesParticulares}
              onChange={handleInputChange}
            />
          </div>
          <div className="form_container_child">
            <label> Aclaraciones Generales</label>
            <textarea
              type="textarea"
              placeholder="Agrega una aclaracion general"
              name="aclaracionesGenerales"
              className="bg-slate-100 w-full rounded-xl pl-3 pt-2 h-24"
              value={nuevaEmpresa.aclaracionesGenerales}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>
      )}
    </>
  );
};

export default EmpresaFormulario;
