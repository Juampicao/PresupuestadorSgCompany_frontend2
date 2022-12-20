import React, { useEffect } from "react";
import CustomLogger from "../helpers/CustomLogger";

let customLogger = new CustomLogger();

const DataListReutilizable = ({ dataList, fieldValue, fieldShow }) => {
  const option = "";
  const fieldValue1 = `${option}.${fieldValue}`;
  const fieldShow1 = `${option}.${fieldShow}`;

  useEffect(() => {
    customLogger.logDebug(
      `dataList:${dataList}, fieldValue:${fieldValue}, fieldShow:${fieldShow}`
    );
  }, []);

  return (
    <div>
      <input
        type="text"
        list="dataListData"
        id="country"
        name="country"
        size="50"
        autocomplete="off"
      />
      <datalist id="dataListData">
        {dataList.length > 0 ? (
          dataList.map((option) => (
            <option key={option.id} value={option.nombreCliente}>
              {option.nombreCliente}
            </option>
            // <option key={option.id} value={fieldValue1}>
            //   {`${option}.${fieldShow}`}
            // </option>
          ))
        ) : (
          <p className="my-5 text-center">No hay ningun dato para mostrar</p>
        )}
      </datalist>
    </div>
  );
};

export default DataListReutilizable;
