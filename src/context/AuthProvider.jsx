import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [cargando, setCargando] = useState(true);
  const [token, setToken] = useState();
  const [config, setConfig] = useState({});

  const navigate = useNavigate();

  const autenticarUsuario = async () => {
    const tokenActual = localStorage.getItem("token");
    setToken(tokenActual);

    if (!tokenActual) {
      setCargando(false);
      console.log("no hay tokenActual");
      navigate("/login");
      return;
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenActual}`,
      },
    };
    setConfig(config);

    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/usuarios/perfil`,
        config
      );
      setAuth(data);
      console.log("Inicio Sesion..");
      navigate("/suscriptores");
    } catch (error) {
      console.log(error);
      setAuth({});
    }
    setCargando(false);
  };

  const cerrarSesionAuth = () => {
    window.localStorage.setItem(`token`, "");
    setAuth({});
    navigate("/");
  };

  useEffect(() => {
    autenticarUsuario();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        cerrarSesionAuth,
        cargando,
        token,
        config,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
