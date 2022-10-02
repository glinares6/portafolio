import { useState } from "react";
import { useEffect } from "react";

export const useMain = () => {
  const [num, setNum] = useState("Mostrar hora");
  const [localidad, setLocalidad] = useState(new Date().toTimeString());

  const getInfo = () => {
    const getLocal = new Date();
    let dia = getLocal.getDate();
    let mes = getLocal.getMonth() + 1;
    let anio = getLocal.getFullYear();
    let result = `Hoy día es ${dia}/${mes}/${anio}`;
    return result;
  };

  let real = () => {
    setInterval(() => setLocalidad(() => new Date().toTimeString()), 1000);
  };
  let real2 = () => {
    setInterval(() => setNum(() => new Date().toLocaleTimeString()), 1000);
  };

  //* ejecuta la funcion que encuentre

  useEffect(() => {
    real();
  }, []);

  return [getInfo, localidad, num, real2];
};
