import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import useGeneral from "../../hooks/useGeneral";

const FormularioFormik = () => {
  const { productosList, setProductosList, error, setError } = useGeneral();

  const ProductoSchema = Yup.object().shape({
    cantidad: Yup.number().required("Cantidad"),
    costoUnitario: Yup.number().required("Costo"),
    descripcion: Yup.number().required("Descripcion"),
    nombreMaterial: Yup.string().required("Material"),
    coeficienteVenta: Yup.number().required("This field is required"),
  });

  return (
    <>
      <Formik
        initialValues={{
          cantidad: "",
          costoUnitario: "",
          descripcion: "",
          nombreMaterial: "",
          coeficienteVenta: "",
        }}
        validationSchema={ProductoSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <div className="flex items-center flex-wrap sm:justify-between gap-y-3 ">
              <h3 className="titulos"> Producto</h3>
              <div className="">
                <label htmlFor="coeficienteVenta" className="tooltip">
                  <span className="tooltiptext">
                    Multiplica el costo unitario de cada producto
                  </span>
                  <span className=" sm:hidden">%</span>

                  <span className="hidden sm:flex">% Coeficiente Venta</span>
                </label>
                <select
                  name="coeficienteVenta"
                  id="coeficienteVenta"
                  placeholder="$"
                  className="pl-3 ml-3"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.coeficienteVenta}
                >
                  <option> -select- </option>
                  <option> 1 </option>
                  <option> 1.2 </option>
                  <option> 1.5 </option>
                  <option> 2 </option>
                  <option> 2.5 </option>
                  <option> 3</option>
                </select>
              </div>
              {formik.touched.coeficienteVenta &&
                formik.errors.coeficienteVenta && (
                  <span className="field_error">
                    {formik.errors.coeficienteVenta}
                  </span>
                )}
            </div>
            <div className="form_container_child">
              <label htmlFor=""> Producto</label>
              <input
                type="text"
                placeholder="Producto a vender .."
                name="nombreMaterial"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.nombreMaterial}
              />
              {formik.touched.nombreMaterial &&
                formik.errors.nombreMaterial && (
                  <span className="field_error">
                    {formik.errors.nombreMaterial}
                  </span>
                )}
            </div>
            <div className="form_container_child">
              <label>cantidad</label>
              <input
                type="Number"
                name="cantidad"
                placeholder="Cantidad a vender .."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cantidad}
              />
              {formik.touched.cantidad && formik.errors.cantidad && (
                <span className="field_error">{formik.errors.cantidad}</span>
              )}
            </div>
            <div className="form_container_child">
              <label> Costo Unitario</label>

              <input
                type="Number"
                name="costoUnitario"
                placeholder="Agrega el costo del producto"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.costoUnitario}
              />
              {formik.touched.costoUnitario && formik.errors.costoUnitario && (
                <span className="field_error">
                  {formik.errors.costoUnitario}
                </span>
              )}
            </div>
            <div className="form_container_child">
              <label> Descripcion</label>
              <input
                type="text"
                placeholder="Agrega una descripcion al producto"
                name="descripcion"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.descripcion}
              />
              {formik.touched.descripcion && formik.errors.descripcion && (
                <span className="field_error">{formik.errors.descripcion}</span>
              )}
            </div>

            <div className="d-grid mt-2">
              <button
                type="submit"
                onClick={() => formik.handleSubmit()}
                className="btn btn-primary btn-block"
              >
                Sign Up
              </button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FormularioFormik;
