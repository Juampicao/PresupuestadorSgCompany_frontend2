import { useContext } from "react";
import GeneralContext from "../context/GeneralProvider";

const useGeneral = () => {
  return useContext(GeneralContext);
};

export default useGeneral;
