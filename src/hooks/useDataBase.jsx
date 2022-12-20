import { useContext } from "react";
import DataBaseContext from "../context/DataBaseProvider";

const useDataBase = () => {
  return useContext(DataBaseContext);
};

export default useDataBase;
