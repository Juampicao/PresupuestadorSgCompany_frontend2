import React, { useEffect } from "react";
import Checkbox from "../../atoms/checkbox/Checkbox";
import Error from "../../atoms/Error";
import CustomLogger from "../../helpers/CustomLogger";
import useCheck from "../../hooks/useCheck";
import useGeneral from "../../hooks/useGeneral";

const customLogger = new CustomLogger();

const ProductoFormulario = ({ arrayProductList = "" }) => {
  const { productosList, setProductosList, error, setError, validarForm } =
    useGeneral();

  const { isChecked, changeChecked } = useCheck();

  /**
   * Cambiar atributos de un producto.
   * @param {*} e
   * @param {*} index
   */
  const handleProductoChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...productosList];
    list[index][name] = value;
    setProductosList(list);
    // console.log(productosList);
  };

  /**
   * Remove a product.
   * @param {*} index
   */
  const handleProductoRemove = (index) => {
    const list = [...productosList];
    list.splice(index, 1);
    setProductosList(list);
  };

  /**
   * Add new Product.
   */
  const handleProductAdd = () => {
    setProductosList([...productosList, { nombreMaterial: "" }]);
  };

  /**
   * Completar campos para editar la lista de productos.
   * @param {*} objeto
   */
  function completeFields(objeto) {
    if (objeto.length > 1) {
      customLogger.logDebug(
        "[ProductoFormulario.jsx], Editando, arrayProductList:",
        objeto
      );
      setProductosList(objeto);
    } else {
      customLogger.logDebug(
        "[ProductoFormulario.jsx], Creando nuevo array, No hay arrayProductList"
      );
    }
  }

  useEffect(() => {
    customLogger.logDebug(
      `[ProductoFormulario.jsx], arrayProductList: Cantidad:${arrayProductList.length}, items: ${arrayProductList}`,
      arrayProductList
    );
    completeFields(arrayProductList);
  }, []);

  // Select
  const opcionesNumerosVenta = ["--select--", 1, 1.5, 2, 2.3, 2.5, 3];

  // Select change
  const handleIsCheckedOther = (e, index) => {
    changeChecked();
    handleProductoChange(e, index);
  };
  return (
    <>
      {productosList.map((product, index) => (
        <div key={index} className="form_container">
          <div className="form-field">
            <div>
              <h3 className="titulos"> {index + 1}° Producto</h3>

              {/* -------- Producto Formulario Costo  ------- */}
              <div className="form_container_child ">
                <label htmlFor="coeficienteVenta" className="tooltip">
                  % Multiplicador de Venta
                </label>
                <div className="flex">
                  {isChecked ? (
                    <input
                      type="number"
                      placeholder="completa.."
                      name="coeficienteVenta"
                      id="coeficienteVenta"
                      className="inputSelect"
                      value={product.coeficienteVenta}
                      onChange={(e) => handleProductoChange(e, index)}
                    />
                  ) : (
                    <select
                      type="number"
                      name="coeficienteVenta"
                      id="coeficienteVenta"
                      placeholder="$"
                      className="inputSelect"
                      value={
                        product.coeficienteVenta
                          ? product.coeficienteVenta
                          : (product.coeficienteVenta = 1.5)
                      }
                      onChange={(e) => handleProductoChange(e, index)}
                      // onBlur={() => validarForm(product.coeficienteVenta)}
                    >
                      {opcionesNumerosVenta.map((opcion) => (
                        <option value={opcion}>{opcion}</option>
                      ))}
                    </select>
                  )}

                  {/* HandleIsCheckedOther */}
                  <div className="flex items-center ">
                    <Checkbox
                      value2="Otro Valor"
                      onChange={(e) => handleIsCheckedOther(e, index)}
                      defaultChecked={
                        arrayProductList?.coeficienteVenta ? true : false
                      }
                    />
                  </div>
                </div>

                {/* Moneda */}
                <label htmlFor="coeficienteVenta" className="tooltip">
                  Moneda a cotizar
                </label>
                <select
                  name="monedaCotizar"
                  id=""
                  defaultValue={"dolar"}
                  className="block  p-2 px-2 bg-gray-100 rounded-md mt-1 text-start"
                  value={product.monedaCotizar}
                  onChange={(e) => handleProductoChange(e, index)}
                >
                  <option value="peso"> Peso Argentino </option>
                  <option value="dolar"> Dolar Americano U$D </option>
                </select>
              </div>
              {/* Moneda */}

              {error.coeficienteVenta ? (
                <Error msg="Completa el % coeficiente  de venta" />
              ) : (
                ""
              )}
              {/* Nombre Producto */}
              <div className="form_container_child">
                <label htmlFor=""> Producto</label>
                <input
                  autoComplete="off"
                  type="text"
                  placeholder="Producto a vender .."
                  name="nombreMaterial"
                  value={product.nombreMaterial}
                  onChange={(e) => handleProductoChange(e, index)}
                />
              </div>
              {/* Cantidad  */}
              <div className="form_container_child">
                <label> Cantidad</label>
                <input
                  type="number"
                  placeholder="Cantidad a vender.."
                  name="cantidad"
                  value={product.cantidad}
                  onChange={(e) => handleProductoChange(e, index)}
                  onBlur={() => validarForm(product.cantidad)}
                />
              </div>
              {error ? <Error msg="Completa la cantidad total" /> : ""}

              {/* Costo Unitario  y Precio Venta Unitario*/}
              <div className="form_container_child">
                <label> Costo Unitario</label>
                <input
                  type="number"
                  placeholder="Agrega el costo del producto"
                  name="costoUnitario"
                  value={product.costoUnitario}
                  onChange={(e) => handleProductoChange(e, index)}
                  onBlur={() => validarForm(product.costoUnitario)}
                />
              </div>
              {error ? <Error msg="Completa el costo unitario" /> : ""}

              {/* Descripcion */}
              <div className="form_container_child">
                <label> Descripcion</label>
                <input
                  autoComplete="off"
                  type="text"
                  placeholder="Agrega una descripcion al producto"
                  name="descripcion"
                  value={product.descripcion}
                  onChange={(e) => handleProductoChange(e, index)}
                />
              </div>

              <div className="flex my-3 gap-x-3 pl-3">
                {productosList.length - 1 === index &&
                  productosList.length < 8 && (
                    <button
                      type="button"
                      onClick={handleProductAdd}
                      className="bg-green-600 text-center text-white py-2.5 px-5 rounded-xl "
                    >
                      <span>Nuevo Producto </span>
                    </button>
                  )}
                {productosList.length !== 1 && (
                  <button
                    type="button"
                    className="bg-red-600 text-white py-2.5 px-5 rounded-xl"
                    onClick={() => handleProductoRemove(index)}
                  >
                    <span> Quitar {index + 1}° Producto </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductoFormulario;

//? Tooltip example
{
  /* <label htmlFor="coeficienteVenta" className="tooltip">
  <span className="tooltiptext">
    Multiplica el costo unitario de cada producto
  </span>
  <span className=" sm:hidden">%</span>

  <span className="hidden sm:flex">% Coeficiente Venta</span>
</label> */
}

// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import useGeneral from "../../hooks/useGeneral";
// const ProductoFormulario = () => {
//   const { producto, setProducto, productosList, setProductosList } =
//     useGeneral();
//   const [nombreMaterial, setNombreMaterial] = useState("");
//   const [cantidad, setCantidad] = useState("");
//   const [costoUnitario, setCostoUnitario] = useState("");
//   const [descripcion, setDescripcion] = useState("");
//   const [precioUnitario, setPrecioUnitario] = useState("");

//   useEffect(() => {
//     setProducto({
//       nombreMaterial,
//       cantidad,
//       costoUnitario,
//       precioUnitario,
//       descripcion,
//     });
//   }, [nombreMaterial, cantidad, costoUnitario, precioUnitario, descripcion]);

//   return (
//     <>
//       <div className="form_container">
//         <div className="form_container_child">
//           <label htmlFor=""> Producto</label>
//           <input
//             type="text"
//             placeholder="Producto a vender .."
//             name="nombreMaterial"
//             onChange={(e) => setNombreMaterial(e.target.value)}
//           />
//         </div>
//         <div className="form_container_child">
//           <label> Cantidad</label>
//           <input
//             type="number"
//             placeholder="Cantidad a vender.."
//             name="cantidad"
//             onChange={(e) => setCantidad(e.target.value)}
//           />
//         </div>
//         <div className="form_container_child">
//           <label> Precio Unitario</label>
//           <input
//             type="number"
//             placeholder="Precio del producto.."
//             name="precioUnitario"
//             onChange={(e) => setPrecioUnitario(e.target.value)}
//           />
//         </div>
//         <div className="form_container_child">
//           <label> Costo Unitario</label>
//           <input
//             type="number"
//             placeholder="Agrega una descripcion al producto"
//             name="costoUnitario"
//             onChange={(e) => setCostoUnitario(e.target.value)}
//           />
//         </div>
//         <div className="form_container_child">
//           <label> Descripcion</label>
//           <input
//             type="text"
//             placeholder="Agrega una descripcion al producto"
//             name="descripcion"
//             onChange={(e) => setDescripcion(e.target.value)}
//           />
//         </div>
//         {/* <button onClick={handleSubmit}> Enviar</button> */}
//       </div>
//     </>
//   );
// };

// export default ProductoFormulario;
