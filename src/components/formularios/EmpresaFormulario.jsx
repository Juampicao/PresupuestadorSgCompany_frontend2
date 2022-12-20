import axios from "axios";
import React, { useEffect, useState } from "react";
import Spiner from "../../atoms/spiner/Spiner";
import useGeneral from "../../hooks/useGeneral";

const EmpresaFormulario = () => {
  const { setEmpresa, isCargando } = useGeneral();

  const [loading, setLoading] = useState(false);
  const [empresas, setEmpresas] = useState([]);

  const [nombreEmpresa, setNombreEmpresa] = useState("");
  const [direccionEmpresa, setDireccionEmpresa] = useState("");
  const [contactoEmpresa, setContactoEmpresa] = useState("");
  const [observacionesParticulares, setObservacionesParticulares] =
    useState("");
  const [aclaracionesGenerales, setAclaracionesGenerales] = useState("");

  const [empresaSeleccionada, setEmpresaSeleccionada] = useState({
    nombreEmpresa: "",
    direccionEmpresa: "",
    contactoEmpresa: "",
    observacionesParticulares: "",
    aclaracionesGenerales: "",
  });

  //* ObjetoEmpresa
  let ObjetoEmpresa = {
    nombreEmpresa,
    direccionEmpresa,
    contactoEmpresa,
    observacionesParticulares,
    aclaracionesGenerales,
  };

  //* Show every companies.
  function getAllCompanies() {
    setLoading(true);
    axios
      // .get(`${import.meta.env.DATABASE__URL}/empresas`)
      .get(`http://localhost:4000/empresas`)
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

  //* Show particular company by id.
  function getParticularCompany(id) {
    axios
      .get(`http://localhost:4000/empresas/${id}`)
      .then((res) => {
        console.log("empresa particular:", res.data);
        setEmpresaSeleccionada(res.data);
      })
      .then(completeFields())
      .catch((err) => {
        console.log(err);
      });
  }

  function completeFields(empresaSeleccionada) {
    if (empresaSeleccionada) {
      setNombreEmpresa(empresaSeleccionada.nombreEmpresa);
      setDireccionEmpresa(empresaSeleccionada.direccionEmpresa);
      setContactoEmpresa(empresaSeleccionada.contactoEmpresa);
      setObservacionesParticulares(
        empresaSeleccionada.observacionesParticulares
      );
      setAclaracionesGenerales(empresaSeleccionada.aclaracionesGenerales);
    }
  }

  function onSelectChange(id) {
    getParticularCompany(id);
    completeFields(empresaSeleccionada);
  }

  useEffect(() => {
    console.log("empresa seleccionada:", empresaSeleccionada);
    setEmpresa({
      ...ObjetoEmpresa,
    });
  }, [
    nombreEmpresa,
    direccionEmpresa,
    contactoEmpresa,
    observacionesParticulares,
    aclaracionesGenerales,
    empresaSeleccionada, // Cuando realice una llamada a la base.
  ]);

  useEffect(() => {
    getAllCompanies();
    console.log("las empresas cargadas son:", empresas);
  }, []);

  return (
    <>
      {/* <input
        type="button"
        name=""
        id=""
        value="Buscar empresas"
        onClick={() => handlePrueba()}
      /> */}
      {loading ? (
        <Spiner />
      ) : (
        <div className="form_container">
          <h3 className="titulos">Empresa Vendedora</h3>
          <div className="form_container_child">
            <p className="font-black">
              Seleccionar 2 veces seguidas ver el autocompletado
            </p>
            <label> Nombre </label>
            {/* {JSON.stringify(empresaSeleccionada, null, 2)} */}

            {empresas.length >= 1 ? (
              <select
                name=""
                id=""
                value={nombreEmpresa}
                onChange={(e) => onSelectChange(e.target.value)}
              >
                <option value="">--select--</option>
                {empresas.map((empresa) => (
                  <option value={empresa.id} key={empresa.id}>
                    {empresa.nombreEmpresa}
                  </option>
                ))}
              </select>
            ) : (
              ""
            )}

            <input
              type="text"
              placeholder="Agrega el nombre de la empresa vendedora"
              name="nombreEmpresa"
              value={nombreEmpresa}
              onChange={(e) => setNombreEmpresa(e.target.value)}
            />
          </div>
          <div className="form_container_child">
            <label> Direccion </label>
            <input
              type="text"
              placeholder="Agrega la direccion de la empresa vendedora"
              name="direccionEmpresa"
              value={direccionEmpresa}
              onChange={(e) => setDireccionEmpresa(e.target.value)}
            />
          </div>
          <div className="form_container_child">
            <label> Contacto</label>
            <input
              type="text"
              placeholder="Agrega el contacto de la empresa vendedora"
              name="contactoEmpresa"
              value={contactoEmpresa}
              onChange={(e) => setContactoEmpresa(e.target.value)}
            />
          </div>
          <div className="form_container_child">
            <label> Observaciones Particulares</label>
            <input
              type="text"
              placeholder="Agrega una observacion particular"
              name="observacionesParticulares"
              value={observacionesParticulares}
              onChange={(e) => setObservacionesParticulares(e.target.value)}
            />
          </div>
          <div className="form_container_child">
            <label> Aclaraciones Generales</label>
            <textarea
              type="textarea"
              placeholder="Agrega una aclaracion general"
              name="aclaracionesGenerales"
              value={aclaracionesGenerales}
              className="bg-slate-100 w-full rounded-xl pl-3 pt-2 h-24"
              onChange={(e) => setAclaracionesGenerales(e.target.value)}
            ></textarea>
          </div>
        </div>
      )}
    </>
  );
};

export default EmpresaFormulario;
